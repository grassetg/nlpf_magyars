import React from 'react';

function icon(type) {
    if (type == 1) {
        return <div>1</div>
    }
    else if (type == 2) {
        return <div>2</div>
    }
    else if (type == 3) {
        return <div>3</div>
    }
    else if (type == 4) {
        return <div>4</div>
    }
    else
        return <div>v</div>
}

export default function EditButton(props) {
    return (
        <button
            key={props.command}
            onMouseUp={evt => {
                evt.preventDefault(); // Avoids loosing focus from the editable area
                document.execCommand(props.command, false, props.arg); // Send the command to the browser
            }}
        >
            {props.type == 1 && <div className="btn-div"><svg height="100%" width="100%" viewBox="0,0,2048,2048" focusable="false"><path type="path" class="OfficeIconColors_HighContrast" d="M 1398 307 h -158 l -261 1229 h 234 l -102 102 h -563 l 102 -102 h 166 l 259 -1229 h -240 l 102 -102 h 563 z"></path><path type="path" class="OfficeIconColors_m22" d="M 1398 307 h -158 l -261 1229 h 234 l -102 102 h -563 l 102 -102 h 166 l 259 -1229 h -240 l 102 -102 h 563 z"></path></svg></div>}
            {props.type == 2 && <div className="btn-div"><svg height="100%" width="100%" viewBox="0,0,2048,2048" focusable="false"><path type="path" class="OfficeIconColors_HighContrast" d="M 1638 1519 q -200 117 -503 117 q -167 0 -300 -48 q -133 -48 -226 -137 q -93 -90 -143 -218 q -50 -129 -50 -291 q 0 -160 55 -295 q 54 -135 155 -233 q 100 -99 242 -154 q 142 -55 318 -55 q 220 0 388 61 v 292 q -162 -93 -392 -93 q -96 0 -176 33 q -80 33 -138 94 q -59 60 -91 146 q -33 85 -33 190 q 0 106 28 189 q 28 83 81 140 q 52 57 127 87 q 75 30 169 30 q 57 0 103 -7 q 46 -8 79 -24 v -271 h -307 v -248 h 614 z"></path><path type="path" class="OfficeIconColors_m22" d="M 1638 1519 q -200 117 -503 117 q -167 0 -300 -48 q -133 -48 -226 -137 q -93 -90 -143 -218 q -50 -129 -50 -291 q 0 -160 55 -295 q 54 -135 155 -233 q 100 -99 242 -154 q 142 -55 318 -55 q 220 0 388 61 v 292 q -162 -93 -392 -93 q -96 0 -176 33 q -80 33 -138 94 q -59 60 -91 146 q -33 85 -33 190 q 0 106 28 189 q 28 83 81 140 q 52 57 127 87 q 75 30 169 30 q 57 0 103 -7 q 46 -8 79 -24 v -271 h -307 v -248 h 614 z"></path></svg></div>}
            {props.type == 3 && <div className="btn-div"><svg height="100%" width="100%" viewBox="0,0,2048,2048" focusable="false"><path type="path" class="OfficeIconColors_HighContrast" d="M 1229 1638 l -145 -386 h -642 l -140 386 h -148 l 546 -1433 h 134 l 543 1433 m -612 -1283 h -4 q -5 26 -12 51 q -7 25 -16 50 l -246 675 h 552 l -247 -675 q -18 -55 -27 -101 m 1108 157 l -189 -189 l -189 189 l -72 -72 l 261 -262 l 262 261 z"></path><path type="path" class="OfficeIconColors_m22" d="M 1229 1638 l -145 -386 h -642 l -140 386 h -148 l 546 -1433 h 134 l 543 1433 m -612 -1283 h -4 q -5 26 -12 51 q -7 25 -16 50 l -246 675 h 552 l -247 -675 q -18 -55 -27 -101 z"></path><path type="path" class="OfficeIconColors_m24" d="M 1873 512 l -189 -189 l -189 189 l -72 -72 l 261 -262 l 262 261 z"></path></svg></div>}
            {props.type == 4 && <div className="btn-div">a</div>}

        </button>
    );
}