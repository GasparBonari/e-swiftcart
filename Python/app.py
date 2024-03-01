from flask import Flask, request, jsonify, session
from flask_socketio import SocketIO, emit
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from decorators import admin_required 

app = Flask(__name__)
CORS(app, origins="*")
socketio = SocketIO(app, cors_allowed_origins="*")
bcrypt = Bcrypt(app)

# Mock user data (replace with database storage)
users = [
    {"username": "admin", "password": bcrypt.generate_password_hash("admin").decode('utf-8'), "role": "admin"},
    {"username": "user1", "password": bcrypt.generate_password_hash("user1").decode('utf-8'), "role": "user"}
]

# Secret key for session management
app.config['SECRET_KEY'] = 'hello123'

@socketio.on('login')
def handle_login(data):
    username = data['username']
    password = data['password']

    user = next((user for user in users if user['username'] == username), None)

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
@admin_required  # Apply the decorator to protect the route
def admin_dashboard():
    return jsonify({'message': 'Welcome to the admin dashboard!'})

if __name__ == '__main__':
    socketio.run(app, debug=True)