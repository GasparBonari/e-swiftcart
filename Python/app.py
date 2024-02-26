from flask import Flask
from flask_socketio import SocketIO
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="*")
socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on('message_from_frontend')
def handle_message(message):
    print('Message from frontend:', message)
    socketio.emit('message_from_backend', 'Message received on the backend')

if __name__ == '__main__':
    socketio.run(app, debug=True)
