import React from 'react';

function MyInfo (props){
    return (
        <div>
            <h1>My name is {props.myName}</h1>
            <h1>My Education is {props.myEdu}</h1>
            <h1>Thanks Sir Zia Khan and Team for creating this amazing platform for us</h1>
        </div>
    )
}

export default MyInfo;