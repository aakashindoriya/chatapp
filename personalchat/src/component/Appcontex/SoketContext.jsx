import { createContext, useEffect, useState } from "react";
import socketIOClient from "socket.io-client"
export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const io = socketIOClient('http://localhost:8080'); // Replace with your backend URL
    setSocket(io);

    // Clean up the connection when the component unmounts
    return () => io.disconnect();
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;