import { useState, useEffect } from "react"
import createConnection from "./createConnection";

interface ChatroomProps {
    room: string,
    serverUrl: string
}

function Chatroom({room, serverUrl}:ChatroomProps) {
const [message, setMessage] = useState("");

useEffect(() => {
    const connection = createConnection(room, serverUrl);
    connection.connect();
    
    return () => { connection.disconnect() };
}, [room, serverUrl]);
    
  return (
    <>
    <h2> Wellcome to the {room} Room</h2>
    <input
    value={message}
    type="text"
    onChange={(e) => {return setMessage(e.target.value)}}
    />
    </>
  )
}

export default Chatroom
