import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import ContentEditable from 'react-contenteditable'

import './Collab.scss';
import axios from "axios";
import crypto from 'crypto';

var socket = io('http://localhost:3001');

export default function MyComponent(props) {

    async function getdata() {
        let content = await axios.get('http://localhost:3002/version?token=' + props.pid + '&version=' + props.vid);

        if (content !== "")
            setHtml(content);
        else
            setHtml('this is a new sheet.')
    }

    //  GET THE TEXT FROM THE DATABASE WITH PID AND VID => set html with it
    const [html, setHtml] = useState(""); // TO MODIFY
    var editable = true;
    if (props.vid == 1) {
        editable = false;
    }

    useEffect(() => {
        socket.on('message', (html) => {
            getdata();
        })
    }, []);

    function send(evt) {
        setHtml(evt.target.value);
        socket.send(evt.target.value);
    };


    return (
        <div>
            <ContentEditable
                id="edit-doc"
                html={html}
                disabled={editable}
                onChange={send}
                tagName='doc'
            />
        </div>
    );
};