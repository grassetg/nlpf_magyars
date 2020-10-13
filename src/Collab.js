import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';

import './Collab.scss';
import Docarea from './DocArea';
import MyButton from './MyButton';
import Size from './Size';
import Color from './Color';
import VersionPop from './Version';



var socket = io('http://localhost:3001');

function Collab(props) {

    return (
        <div id="collab">
            <div className="container">
                <div className="static-div">
                    <div className="bandeau">
                        <VersionPop pid={props.match.params.pid}/>
                        {props.match.params.vid == 1 && <p>Editable - {props.match.params.pid}</p>}
                        {props.match.params.vid != 1 && <p>ReadOnly - {props.match.params.pid}</p>}
                        {/* BUTTON ACTION : 
                        => (BAC) clone the current version (VID) and put it on the head of the doc (PID)
                        => (FRONT) history.push the last version */}
                        {props.match.params.vid != 1 && <button className="revert-btn">Revert version</button>}
                        <a href="/"><img className="home-icon" src={require("./media/home.svg")} /></a>
                    </div>
                    <div className="outil">
                        <div>
                            <Size />
                            <MyButton command="bold" type="bold" />
                            <MyButton command="italic" type="italic" />
                            <MyButton command="underline" type="underline" />
                            <Color more="hiliteColor"/>
                            <Color more="foreColor"/>
                            <div className="text-pos"></div>
                            <MyButton command="justifyLeft" type="align-left" />
                            <MyButton command="justifyCenter" type="align-center" />
                            <MyButton command="justifyRight" type="align-right" />
                        </div>
                    </div>
                </div>  
                <div className="document">
                    <div className="doc-page">
                        <Docarea vid={props.match.params.vid} pid={props.match.params.pid}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collab;
