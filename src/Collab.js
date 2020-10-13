import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';

import './Collab.scss';
import Docarea from './DocArea';
import MyButton from './MyButton';
import Size from './Size';
import Color from './Color';
import VersionPop from './Version';



var socket = io('http://localhost:3001');

function Collab() {

    return (
        <div id="collab">
            <div className="container">
                <div className="static-div">
                    <div className="bandeau">
                        <VersionPop />
                        <p>Document - XZS24JDNX</p>
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
                        <Docarea />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collab;
