from flask import Flask, request, jsonify, session
from flask_socketio import SocketIO, emit
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from decorators import admin_required
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app, origins="*")
socketio = SocketIO(app, cors_allowed_origins="*")
bcrypt = Bcrypt(app)

# Configure the PostgreSQL database URI
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://vhxwrrdf:OCUjI8Rr_8DOg-PlBdZM9YdUtDFoFwak@surus.db.elephantsql.com/vhxwrrdf'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Secret key for session management
app.config['SECRET_KEY'] = 'hello123'

db = SQLAlchemy(app)

# User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    role = db.Column(db.String(20), nullable=False)

# user1 = password1, also 2 and 3.
    
@socketio.on('register')
def handle_register(data):
    username = data['username']
    password = data['password']

    # Check if the username is already taken
    existing_user = User.query.filter_by(username=username).first()
    if existing_user:
        emit('register_response', {'success': False, 'message': 'Username already taken'})
    else:
        # If the username is available, hash the password and create a new user
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        new_user = User(username=username, password=hashed_password, role='user')

        # Add the new user to the database
        db.session.add(new_user)
        db.session.commit()

        emit('register_response', {'success': True, 'message': 'Registration successful'})

@socketio.on('login')
def handle_login(data):
    username = data['username']
    password = data['password']

    user = User.query.filter_by(username=username).first()

    if user and bcrypt.check_password_hash(user.password, password):
        session['username'] = username
        emit('login_response', {'success': True, 'message': 'Login successful', 'user': {'username': username, 'role': user.role}})
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
