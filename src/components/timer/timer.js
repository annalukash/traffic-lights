import React from 'react';

import './timer.css'

const Timer = ({timer}) => {

    return (
        <div className="timer">
            <div>{timer}</div>
        </div>
    )
}

export default Timer;