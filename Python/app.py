from flask import Flask, request, jsonify, session
from flask_socketio import SocketIO, emit
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_pymongo import PyMongo

app = Flask(__name__)
CORS(app, origins="*")
socketio = SocketIO(app, cors_allowed_origins="*")
bcrypt = Bcrypt(app)

# Configure MongoDB URI
app.config['MONGO_URI'] = 'mongodb+srv://gasparbonari:FWNHnri166UVnlIc@cluster0.env08ue.mongodb.net/user_data?retryWrites=true&w=majority'
mongo = PyMongo(app)
print("Mongo:", mongo)
# Secret key for session management
app.config['SECRET_KEY'] = 'hello123'

@socketio.on('register')
def handle_register(data):
    username = data['username']
    password = data['password']

    # Check if the username is already taken
    existing_user = mongo.db.users.find_one({'username': username})
    if existing_user:
        emit('register_response', {'success': False, 'message': 'Username already taken'})
    else:
        # If the username is available, hash the password and create a new user
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        new_user = {'username': username, 'password': hashed_password, 'role': 'user'}

        # Insert the new user into MongoDB
        mongo.db.users.insert_one(new_user)

        emit('register_response', {'success': True, 'message': 'Registration successful'})

@socketio.on('login')
def handle_login(data):
    username = data['username']
    password = data['password']

    user = mongo.db.users.find_one({'username': username})

    if user and bcrypt.check_password_hash(user['password'], password):
        session['username'] = username
        emit('login_response', {'success': True, 'message': 'Login successful', 'user': {'username': username, 'role': user['role']}})
    else:
        emit('login_response', {'success': False, 'message': 'Invalid credentials'})

@socketio.on('logout')
def handle_logout():
    if 'username' in session:
        del session['username']
        emit('logout_response', {'success': True, 'message': 'Logout successful'})
    else:
        emit('logout_response', {'success': False, 'message': 'User not logged in'})

@app.route('/admin_dashboard')
def admin_dashboard():
    if 'username' in session:
        # Check user role from MongoDB if needed
        return jsonify({'message': 'Welcome to the admin dashboard!'})
    else:
        return jsonify({'message': 'You are not logged in.'})

if __name__ == '__main__':
    socketio.run(app, debug=True)
