from flask import Flask, render_template
from flask_socketio import SocketIO
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="*")  # Allow requests from any origin (for testing only)
socketio = SocketIO(app)

@socketio.on('message_from_frontend')
def handle_message(message):
    print('Message from frontend:', message)
    # Process the message as needed
    # You can emit a response back to the frontend if necessary
    socketio.emit('message_from_backend', 'Message received on the backend')

if __name__ == '__main__':
    socketio.run(app, debug=True)
