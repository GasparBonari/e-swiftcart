from functools import wraps
from flask import jsonify, session

def admin_required(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        if 'username' in session:
            user = next((user for user in users if user['username'] == session['username']), None)
            if user and user['role'] == 'admin':
                return func(*args, **kwargs)
        return jsonify({'error': 'Unauthorized access'}), 403
    return wrapper
