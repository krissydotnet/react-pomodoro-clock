import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

const ButtonUp = ({id, handleClick}) => {
    
    return (
  
            <button id={id} onClick={handleClick} ><FontAwesomeIcon icon={faArrowAltCircleUp}/></button>
    );
}

export default ButtonUp;