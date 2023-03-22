import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
let id=Math.floor(Math.random() * 90 + 10)
const Messaging = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const socket = io('http://localhost:8080',{
    query: {
      "userid":id
    }
  });

  useEffect(() => {
    // Listen for new messages from the server
    
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      // Clean up the socket connection
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    // Send a new message to the server
    socket.emit('message', { text });
    setText('');
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message.text}</li>
        ))}
      </ul>
      <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Messaging;
