import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';

import './Collab.scss';
import Docarea from './DocArea';
import EditButton from './MyButton';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from "react-bootstrap/FormGroup";
import FormFile from "react-bootstrap/FormFile";

var socket = io('http://localhost:3001');


function Collab() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div id="collab">
            <div className="container">
                <div className="static-div">
                    <div className="bandeau">
                        <p>Document - XZS24JDNX</p>
                        <a href="/"><img className="home-icon" src={require("./media/home.svg")} /></a>
                    </div>
                    <div className="outil">
                        <div>
                            {/* <svg height="100%" width="100%" viewBox="0,0,2048,2048" focusable="false"><path type="path" class="OfficeIconColors_HighContrast" d="M 1229 1638 l -145 -386 h -642 l -140 386 h -148 l 546 -1433 h 134 l 543 1433 m -612 -1283 h -4 q -5 26 -12 51 q -7 25 -16 50 l -246 675 h 552 l -247 -675 q -18 -55 -27 -101 m 1108 157 l -189 -189 l -189 189 l -72 -72 l 261 -262 l 262 261 z"></path><path type="path" class="OfficeIconColors_m22" d="M 1229 1638 l -145 -386 h -642 l -140 386 h -148 l 546 -1433 h 134 l 543 1433 m -612 -1283 h -4 q -5 26 -12 51 q -7 25 -16 50 l -246 675 h 552 l -247 -675 q -18 -55 -27 -101 z"></path><path type="path" class="OfficeIconColors_m24" d="M 1873 512 l -189 -189 l -189 189 l -72 -72 l 261 -262 l 262 261 z"></path></svg>
                            <svg height="100%" width="100%" viewBox="0,0,2048,2048" focusable="false"><path type="path" class="OfficeIconColors_HighContrast" d="M 1951 278 l -261 261 l -262 -262 l 73 -72 l 189 189 l 188 -189 m -507 1433 h -146 l -110 -289 h -496 l -103 289 h -146 l 430 -1126 h 137 m 134 717 l -185 -504 q -4 -9 -8 -28 q -4 -19 -10 -48 h -4 q -6 47 -17 76 l -184 504 z"></path><path type="path" class="OfficeIconColors_m22" d="M 1371 1638 h -146 l -110 -289 h -496 l -103 289 h -146 l 430 -1126 h 137 m 134 717 l -185 -504 q -4 -9 -8 -28 q -4 -19 -10 -48 h -4 q -6 47 -17 76 l -184 504 z"></path><path type="path" class="OfficeIconColors_m24" d="M 1951 278 l -261 261 l -262 -262 l 73 -72 l 189 189 l 188 -189 z"></path></svg>
                            <svg height="100%" width="100%" viewBox="0,0,2048,2048" focusable="false"><path type="path" class="OfficeIconColors_HighContrast" d="M 1638 1519 q -200 117 -503 117 q -167 0 -300 -48 q -133 -48 -226 -137 q -93 -90 -143 -218 q -50 -129 -50 -291 q 0 -160 55 -295 q 54 -135 155 -233 q 100 -99 242 -154 q 142 -55 318 -55 q 220 0 388 61 v 292 q -162 -93 -392 -93 q -96 0 -176 33 q -80 33 -138 94 q -59 60 -91 146 q -33 85 -33 190 q 0 106 28 189 q 28 83 81 140 q 52 57 127 87 q 75 30 169 30 q 57 0 103 -7 q 46 -8 79 -24 v -271 h -307 v -248 h 614 z"></path><path type="path" class="OfficeIconColors_m22" d="M 1638 1519 q -200 117 -503 117 q -167 0 -300 -48 q -133 -48 -226 -137 q -93 -90 -143 -218 q -50 -129 -50 -291 q 0 -160 55 -295 q 54 -135 155 -233 q 100 -99 242 -154 q 142 -55 318 -55 q 220 0 388 61 v 292 q -162 -93 -392 -93 q -96 0 -176 33 q -80 33 -138 94 q -59 60 -91 146 q -33 85 -33 190 q 0 106 28 189 q 28 83 81 140 q 52 57 127 87 q 75 30 169 30 q 57 0 103 -7 q 46 -8 79 -24 v -271 h -307 v -248 h 614 z"></path></svg>
                            <svg height="100%" width="100%" viewBox="0,0,2048,2048" focusable="false"><path type="path" class="OfficeIconColors_HighContrast" d="M 1398 307 h -158 l -261 1229 h 234 l -102 102 h -563 l 102 -102 h 166 l 259 -1229 h -240 l 102 -102 h 563 z"></path><path type="path" class="OfficeIconColors_m22" d="M 1398 307 h -158 l -261 1229 h 234 l -102 102 h -563 l 102 -102 h 166 l 259 -1229 h -240 l 102 -102 h 563 z"></path></svg>
                            <svg height="100%" width="100%" viewBox="0,0,2048,2048" focusable="false"><path type="path" class="OfficeIconColors_HighContrast" d="M 410 1843 h 1228 v 103 h -1228 m 975 -684 q 0 88 -32 158 q -33 69 -92 117 q -60 48 -145 74 q -85 25 -190 25 q -36 0 -82 -7 q -46 -8 -91 -20 q -45 -12 -82 -26 q -38 -14 -57 -26 v -192 q 29 26 70 49 q 41 22 86 39 q 45 17 92 27 q 46 9 86 9 q 267 0 267 -207 q 0 -45 -12 -80 q -12 -35 -44 -69 q -32 -35 -89 -73 q -57 -39 -147 -90 q -86 -49 -144 -93 q -59 -44 -95 -90 q -36 -47 -52 -98 q -16 -52 -16 -115 q 0 -82 33 -149 q 33 -68 92 -117 q 58 -49 139 -76 q 80 -27 175 -27 q 187 0 273 49 v 181 q -109 -85 -281 -85 q -57 0 -104 15 q -48 15 -83 43 q -35 27 -54 66 q -20 39 -20 86 q 0 52 11 88 q 11 36 41 68 q 30 32 83 65 q 52 33 135 79 q 92 51 155 98 q 63 47 102 95 q 38 48 55 99 q 17 51 17 110 z"></path><path type="path" class="OfficeIconColors_m22" d="M 410 1843 h 1228 v 103 h -1228 m 975 -684 q 0 88 -32 158 q -33 69 -92 117 q -60 48 -145 74 q -85 25 -190 25 q -36 0 -82 -7 q -46 -8 -91 -20 q -45 -12 -82 -26 q -38 -14 -57 -26 v -192 q 29 26 70 49 q 41 22 86 39 q 45 17 92 27 q 46 9 86 9 q 267 0 267 -207 q 0 -45 -12 -80 q -12 -35 -44 -69 q -32 -35 -89 -73 q -57 -39 -147 -90 q -86 -49 -144 -93 q -59 -44 -95 -90 q -36 -47 -52 -98 q -16 -52 -16 -115 q 0 -82 33 -149 q 33 -68 92 -117 q 58 -49 139 -76 q 80 -27 175 -27 q 187 0 273 49 v 181 q -109 -85 -281 -85 q -57 0 -104 15 q -48 15 -83 43 q -35 27 -54 66 q -20 39 -20 86 q 0 52 11 88 q 11 36 41 68 q 30 32 83 65 q 52 33 135 79 q 92 51 155 98 q 63 47 102 95 q 38 48 55 99 q 17 51 17 110 z"></path></svg> */}
                            <EditButton command="italic" type="1"/>
                            <EditButton command="bold" type="2"/>
                            <EditButton command="formatBlock" arg="h1" name="heading" type="3"/>
                            <EditButton
                            command="createLink"
                            arg="#"
                            name="hyperlink"
                            type="4"
                            />
                            <Form onSubmit={submit_img}>
                                <FormGroup>
                                    <FormFile id="img_path" label="Example file input" />
                                    <Button className="btn btn-primary btn-large centerButton" type="submit">Send</Button>
                                </FormGroup>
                            </Form>
                            <EditButton command="InsertImage" arg="http://placekitten.com/200/300" name="heading" type="5"/>
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

function submit_img(evt){
    evt.preventDefault();

     console.log("image added :" + String (evt.target[0].value));
    document.execCommand("InsertImage", false, evt.target[0].value);
}

export default Collab;
