import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlay, faPause, faUndoAlt } from '@fortawesome/free-solid-svg-icons';

const Clock = ({isBreak, timeRemaining, timerOn, toggleTimer, handleReset}) => {
    const minRemaining = ('00' + Math.floor(timeRemaining / 60)).slice(-2);
    const secondsRemaining = ('00' + (timeRemaining - minRemaining * 60)).slice(-2);
    return (
        <div className="clock-container">
        <h2 id="timer-label">
        {isBreak? "Break": "SESSION"}
        </h2>
        <div className={isBreak ? "clock-display green": "clock-display red"} id="time-left">
        {minRemaining}:{secondsRemaining}
        </div>
        <div className="clock-buttons">
        <button id="start_stop" onClick={toggleTimer}>
        
        <FontAwesomeIcon icon={ timerOn ? faPause: faPlay} />
        </button>
        <button id="reset" onClick={handleReset}> <FontAwesomeIcon icon={faUndoAlt}/></button>
        </div>
        
        </div>
    );
}


export default Clock;