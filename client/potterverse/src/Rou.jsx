import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Charf from "./Charf";
import New1 from "./New1";
import New2 from "./New2";
import About from "./About";
import News3 from "./News3";
import Quiz from "./Quiz";
import Fic from "./Fic";
import io from 'socket.io-client';
import Chat from "./chat/Chat";
import ChatBox from "./chat/ChatBox";

const socket = io.connect('http://localhost:4000');


const Rou = () => {
    const [username,setUsername] = useState('');
    const [room,setRoom] = useState("");
  return (
    <>
      {/* <Charf/> */}
      {/* <New1/> */}
      {/* <New2/> */}
      <Routes>
        <Route path="/" element={<New1 />} />
        <Route path="/news" element={<New2 />} />
        <Route path="info" element={<Charf />} />
        <Route path="about" element={<About />} />
        <Route path="latest" element={<News3 />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/fic" element={<Fic />} />
        <Route
          path="/ChatBox"
          element={
            <ChatBox
              username={username}
              setUsername={setUsername}
              room={room}
              setRoom={setRoom}
              socket={socket}
            />
          }
        >
          ChatBox
        </Route>
        <Route
          exact
          path="/chat"
          element={<Chat username={username} room={room} socket={socket} />}
        />
      </Routes>
    </>
  );
};
export default Rou;
