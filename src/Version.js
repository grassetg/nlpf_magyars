import React, { version } from 'react';

import Popup from 'reactjs-popup';
import './Version.scss';

import { Link,useHistory } from 'react-router-dom';


export default function VersionPop(props) {

    function handleClick(vid,pid) {
        return () => history.push("/sheet/" + pid + "/v/" + vid);
    }   

    console.log("PID =>>>>>>>>>>>>" + props.pid);
    const history = useHistory();
    const version = ['1', '2', '3', '4', '5', '6', '7']; // remove with list of version
    const items = [];
    for (var i = 0; i < version.length; i++) {
        items.push(<div className="unit-version" onClick={handleClick(version[i],props.pid)}><span>VERSION {version[i]}</span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-angle-right fa-w-8 fa-3x"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" class=""></path></svg></div>);
    }
    return (
        <Popup
            trigger={
                <button className="left">
                    <div>
                        <span>Versions</span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-angle-right fa-w-8 fa-3x"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" class=""></path></svg>
                    </div>
                </button>
            }
            position="left"
            nested
            modal
            id="testouille"
        >
            {close => (
                <div className="modal">
                    <div className="header"> Versionning </div>
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <div className="version-list">
                        {items}
                    </div>
                </div>
            )}
        </Popup>
    );
}