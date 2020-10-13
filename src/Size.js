import React from 'react';
import './Size.scss'
import Popup from 'reactjs-popup';
import MyButton from './MyButton';

export default function Size() {
    return (
        <div id="size">
            <input value="" />
            <MyPop/>
        </div>
    );
}


function MyPop() {
    const changesize=['1','2','3','4','5','6','7'];
    const items =[];
    for (var i = 0; i < changesize.length; i++){
        items.push(<MyButton command="fontSize" arg={changesize[i]} type="size"/>);
    }
    return (
        <Popup
            trigger={<button type="button"
                role="presentation"
                className="set-size">
                <i>
                    <svg height="100%" width="100%" viewBox="0,0,2048,2048" focusable="false"><path type="path" class="OfficeIconColors_HighContrast" d="M 939 1571 l -829 -828 l 121 -121 l 708 708 l 707 -708 l 121 121"></path><path type="path" class="OfficeIconColors_m22 OfficeIconColors_DynamicColor" d="M 939 1571 l -829 -828 l 121 -121 l 708 708 l 707 -708 l 121 121"></path></svg>
                </i>
            </button>}
            position="bottom center"
            nested
        >
            <div className="btn-list">
                {items}
            </div>
        </Popup>
    );
}