import React from 'react';
import DocArea from './DocArea'


function Position() {

    function getpos(evt){
        var myElement = document.getElementById('edit-doc');
        var startPosition = myElement.selectionStart;
        var endPosition = myElement.selectionEnd;

        console.log('\nSTART => ' + startPosition + '\nEND =>' + endPosition);
        if(startPosition == endPosition){
            alert("The position of the cursor is (" + startPosition + "/" + myElement.value.length + ")");
        }else{
            alert("Selected text from ("+ startPosition +" to "+ endPosition + " of " + myElement.value.length + ")");
        }
    }

    return (
        <div>
            <DocArea/>
            <input type="button" id="trigger" value="Check" onClick={getpos} />
        </div>
    );
};

export default Position;