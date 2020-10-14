import React, {useState } from 'react';
import axios from 'axios';

import './Home.scss'
import { useHistory } from 'react-router-dom';
import crypto from "crypto";

export default function Home(){

    const [token, setToken] = useState('');
    const history = useHistory();

    function handleChange(evt) {
        setToken(evt.target.value);
    }

    async function handleClick(event){
        event.preventDefault()
        //console.log('TOKEN =>>>>>>>>>>>>>>>>>>>>>>> ' + token);
        // CHECK IF THIS TOKEN EXIST
        let data = await axios.get('http://localhost:3002/isvalidtoken?token=' + token);
        if (data.data === "")
            window.alert("Token doesn't exist!")
        else
            history.push("/sheet/" + token + "/v/" + '1');

    }

    var id = crypto.randomBytes(10).toString('hex');
    var str = "/sheet/" + id + "/v/1";

    return(
        <div id="home">
            <div className="title-container">
                <p className="title">Collaborativ'sheet</p>
                <p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="btn-container">
                    {/* - GENERATE TOKEN and add it to the url 
                        - CHECK IF TOKEN EXIST (yes go back up, no down)
                        - SEND IT*/}
                    <div><a href={str}>Create new</a></div>
                    <div className="or">or</div>
                    <form><input onChange={handleChange} placeholder="Enter token"/><button onClick={(event) => {handleClick(event)}}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></svg></button></form>
                </div>
            </div>
        </div>
    );
}