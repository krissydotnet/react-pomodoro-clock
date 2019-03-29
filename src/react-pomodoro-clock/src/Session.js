import React from 'react';
import ButtonUp from './ButtonUp';
import ButtonDown from './ButtonDown';
import Length from './Length';

const Session = ({sessionTime, handleIncrement, handleDecrement}) => {

    return (
        <div className="buttons-container">
            <h3 id="session-label">Session Length</h3>
            <div className="buttons">
            <ButtonUp id="session-increment" handleClick={handleIncrement}/>
            <Length id="session-length" value={sessionTime} />
            <ButtonDown id="session-decrement" handleClick={handleDecrement}/>
            </div>
        </div>
    );
}

export default Session;