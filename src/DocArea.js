import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import ContentEditable from 'react-contenteditable'
import sanitizeHtml from "sanitize-html";

import './Collab.scss';

var socket = io('http://localhost:3001');

export default function MyComponent() {
    const [html, setHtml] = useState('<b>Hello <i>World</i></b>');
    const [sani, setSani] = useState('');
    
    const sanitizeConf = {
        allowedTags: ["b", "i", "em", "strong", "a", "p", "h1","u","big","small"],
        allowedAttributes: { a: ["href"] }
      };

    function sanitize(){
        setSani({ html: sanitizeHtml(html, sanitizeConf) });
    }

    useEffect(() => {
        socket.on('message', (html) => {
            setHtml(html);
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
        disabled={false}
        onChange={send}
        tagName='doc'
        onBlur={sanitize}
        />
        {/* <hr style={{margin:'40px 0'}}/>
        <textarea
          className="editable"
          value={html}
          onChange={send}
          onBlur={sanitize}
        /> */}
    </div>
    );
};