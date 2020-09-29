import React from 'react';

import './Home.scss'

export default function Home(){
    return(
        <div id="home">
            <div className="title-container">
                <p className="title">Collaborativ'sheet</p>
                <p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="btn-container">
                    <div><a href="/sheet">Create new</a></div>
                    <div className="or">or</div>
                    <div><input placeholder="Enter token"/></div>
                </div>
            </div>
        </div>
    );
}