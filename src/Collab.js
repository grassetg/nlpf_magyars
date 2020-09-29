import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import io from 'socket.io-client';

import './Collab.scss';

var socket = io('http://localhost:3001');

function Collab() {

    const [text, setText] = useState('');

    useEffect(() => {
        socket.on('message', (data) => {
            setText(data);
        })
    }, []);

    // send
    function send(data) {
        setText(data);
        socket.send(data);
    }

    return (
        <div id="collab">
            <div className="container">
                <div className="bandeau">
                    <p>Document - XZS24JDNX</p>
                </div>
                <div className="outil">
                </div>
                <div className="document">
                    <textarea onChange={(e) => { send(e.target.value) }} value={text} rows="30" cols="50" id="editor" placeholder="Type Your Text..."></textarea>
                </div>
            </div>
        </div>
    );
}

export default Collab;
