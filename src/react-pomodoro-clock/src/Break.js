import React from 'react';
import ButtonUp from './ButtonUp';
import ButtonDown from './ButtonDown';
import Length from './Length';

const Break = ({breakTime, handleIncrement, handleDecrement}) => {
   
    return (
        <div className="buttons-container">
            <h3 id="break-label">Break Length</h3>
            <div className="buttons">
            <ButtonUp id="break-increment" handleClick={handleIncrement}/>
            <Length id="break-length" value={breakTime} />
            <ButtonDown id="break-decrement" handleClick={handleDecrement}/>
            </div>

        </div>
    );
}

export default Break;