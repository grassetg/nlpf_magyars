import React from 'react';
import './Size.scss'
import Popup from 'reactjs-popup';
import MyButton from './MyButton';

export default function Color(props) {
    return (
        <div id="color">
            {props.more == "hilitedColor" && <MyPopH/>}
            {props.more == "foreColor" && <MyPopF/>}
        </div>
    );
}

function MyPopF(){
    const changecolor=[
        '#FFFF00','#00FF00','#00FFFF','#FF00FF','#0000FF',
        '#FF0000','#000080','#008080','#008000','#800080',
        '#800000','#808000','#808080','#C0C0C0','#000000'];
        const items =[];
        for (var i = 0; i < changecolor.length; i++){
            items.push(<MyButton command="foreColor" type="hiliteColor" arg={changecolor[i]}/>);
        }
        return (
            <Popup
                trigger={<button type="button"
                    role="presentation">
                    <i>
                    <svg height="100%" width="100%" viewBox="0,0,2048,2048" focusable="false"><path type="path" class="OfficeIconColors_HighContrast" d="M 2048 2048 h -2048 v -512 h 2048 m -589 -102 l -147 -410 h -571 l -143 410 h -137 l 507 -1332 h 124 l 504 1332 m -569 -1169 h -4 l -240 658 h 487 z"></path><path type="path" class="OfficeIconColors_m227" d="M 51 1997 v -410 h 1946 v 410 z"></path><path type="path" class="OfficeIconColors_m21" d="M 2048 1536 v 512 h -2048 v -512 m 1946 102 h -1844 v 308 h 1844 z"></path><path type="path" class="OfficeIconColors_DynamicColor" d="M 2048 1536 v 512 h -2048 v -512 z"></path><path type="path" class="OfficeIconColors_m22" d="M 1459 1434 l -147 -410 h -571 l -143 410 h -137 l 507 -1332 h 124 l 504 1332 m -569 -1169 h -4 l -240 658 h 487 z"></path></svg>
                    </i>
                </button>}
                position="bottom center"
                nested
            >
                <div className="color-div">
                    <p>Couleur de police</p>
                    <div className="color-list">
                        {items}
                    </div>
                    <hr/>
                    <div className="color-last">
                        <button className="no-color"></button>
                        <p>Automatique</p>
                    </div>
                </div>
            </Popup>
        );
}

function MyPopH() {
    const changecolor=[
    '#FFFF00','#00FF00','#00FFFF','#FF00FF','#0000FF',
    '#FF0000','#000080','#008080','#008000','#800080',
    '#800000','#808000','#808080','#C0C0C0','#000000'];
    const items =[];
    for (var i = 0; i < changecolor.length; i++){
        items.push(<MyButton command="hiliteColor" type="hiliteColor" arg={changecolor[i]}/>);
    }
    return (
        <Popup
            trigger={<button type="button"
                role="presentation">
                <i>
                <svg height="100%" width="100%" viewBox="0,0,2048,2048" focusable="false"><path type="path" class="OfficeIconColors_HighContrast" d="M 2048 1536 v 512 h -2048 v -512 m 737 -96 h -532 l 266 -177 l 44 -252 l 841 -842 q 32 -32 75 -48 q 42 -16 87 -16 q 44 0 87 16 q 43 16 75 48 l 62 63 q 32 32 50 74 q 17 41 17 88 q 0 46 -17 88 q -18 41 -50 73 l -789 797 h -216 m -25 -394 l 241 242 l 717 -717 q 37 -37 37 -89 q 0 -53 -37 -90 l -63 -63 q -37 -35 -89 -35 q -25 0 -48 9 q -24 9 -42 27 z"></path><path type="path" class="OfficeIconColors_m227" d="M 51 1997 v -410 h 1946 v 410 z"></path><path type="path" class="OfficeIconColors_m21" d="M 2048 1536 v 512 h -2048 v -512 m 1946 102 h -1844 v 308 h 1844 z"></path><path type="path" class="OfficeIconColors_DynamicColor" d="M 2048 1536 v 512 h -2048 v -512 z"></path><path type="path" class="OfficeIconColors_m23" d="M 205 1440 l 266 -177 l 44 -252 l 112 -112 l 326 446 h -216 v 95 z"></path><path type="path" class="OfficeIconColors_m20" d="M 639 958 l 753 -753 q 25 -25 58 -38 q 33 -13 68 -13 q 35 0 68 13 q 32 13 57 38 l 63 63 q 52 52 52 126 q 0 36 -13 68 q -14 32 -39 57 l -753 753 z"></path><path type="path" class="OfficeIconColors_m22" d="M 953 1345 l -386 -387 l 789 -789 q 32 -32 75 -48 q 42 -16 87 -16 q 45 0 88 16 q 42 16 74 48 l 62 63 q 32 32 50 74 q 17 41 17 88 q 0 46 -17 88 q -18 41 -50 73 m -1030 403 l 241 242 l 717 -717 q 37 -37 37 -89 q 0 -53 -37 -90 l -63 -63 q -37 -35 -89 -35 q -25 0 -48 9 q -24 9 -42 27 z"></path></svg>
                </i>
            </button>}
            position="bottom center"
            nested
        >
            <div className="color-div">
                <p>Couleur de surlignage</p>
                <div className="color-list">
                    {items}
                </div>
                <hr/>
                <div className="color-last">
                    <button className="no-color"></button>
                    <p>Aucune couleur</p>
                </div>
            </div>
        </Popup>
    );
}