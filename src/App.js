import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';


var socket = io('http://localhost:3001');

function App() {
  
  const [text, setText] = useState('');
  useEffect(()=> {
    socket.on('message', (data) => {
    setText(data);
  })},[]);

  // send
  function send(data){
      setText(data);
      socket.send(data);
  }

  return (
    <div className="App">
      <title>Realtime Editor/Collaboration</title>
      <body>
        <h3>Realtime Editor/Collaboration</h3>
        <div>
          <textarea onChange={(e) => {send(e.target.value)}} value={text} rows="30" cols="50" id="editor" style={{backgroundColor:"dimgrey",color:"white"}} placeholder="Type Your Text..."></textarea>
        </div>
      </body>
    </div>
  );
}

export default App;
