import React, {useEffect, version} from 'react';

import Popup from 'reactjs-popup';
import axios from 'axios';
import ReactDOM from 'react-dom';

import './Version.scss';
import {Link, useHistory} from 'react-router-dom';


export default function VersionPop(props) {

    async function getdata() {
        var id
        if (props.vid === undefined)
        {
            id = 1;
        }
        else
            id = props.vid;
        let content = await axios.get('http://localhost:3002/version?token=' + props.pid + '&version=' + id);

        console.log(content)
        if (content.data !== "")

            document.getElementById("edit-doc").innerHTML = content.data;
        else
            document.getElementById("edit-doc").innerHTML = 'this is a new sheet.'
    }

    function setVersions() {

        axios.get("http://localhost:3002/versions?token=" + props.pid).then((response) => {

            const versions = response.data.versions;
            const listVersionButton = versions.map((version) =>
                <button onClick={handleClick(version.versionNumber, props.pid)}>Version {version.versionNumber}</button>);

            ReactDOM.render(
                <ul>{listVersionButton}</ul>,
                document.getElementById('versions-list')
            );

        })
    }

    useEffect(() => {
        getdata();
    }, []);

    function newVersionButtons(vid, pid) {
        return (
            <button onClick={handleClick(vid, pid)}>
                Version + {vid}
            </button>
        );
    }

    function handleClick(vid, pid) {
        getdata()
        return () => history.push("/sheet/" + pid + "/v/" + vid);
    }

    console.log("PID =>>>>>>>>>>>>" + props.pid);
    const history = useHistory();
    const items = [];

    return (
        <Popup
            trigger={
                <button onClickCapture={setVersions} className="left">
                    <div>
                        <span>Versions</span>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"
                             class="svg-inline--fa fa-angle-right fa-w-8 fa-3x">
                            <path fill="currentColor"
                                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                                  class=""/>
                        </svg>
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
                    <div className="header"> Versionning</div>
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <div id="versions-list" className="version-list">
                    </div>
                </div>
            )}
        </Popup>
    );
}
