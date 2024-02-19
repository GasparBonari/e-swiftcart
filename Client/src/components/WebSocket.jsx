import React, { useEffect } from 'react';
import io from 'socket.io-client';

const WebSocketComponent = () => {
    useEffect(() => {
        // Connect to the WebSocket server (your Flask backend)
        const socket = io('http://localhost:5000'); // Adjust the URL accordingly

        // Send a message to the backend
        socket.emit('message_from_frontend', 'Hello from the frontend');

        // Listen for messages from the backend
        socket.on('message_from_backend', (message) => {
            console.log('Message from backend:', message);
            // Process the message as needed
        });

        // Clean up the socket connection when the component unmounts
        return () => {
            socket.disconnect();
        };
    }, []);

    // return (
    //     <div>
    //         <h1>Hello from Websocket</h1>
    //     </div>
    // );
};

export default WebSocketComponent;
