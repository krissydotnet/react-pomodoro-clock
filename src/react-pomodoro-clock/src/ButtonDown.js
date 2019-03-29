import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

const ButtonDown = ({id, handleClick}) => {

    return (
  
            <button id={id} onClick={handleClick}><FontAwesomeIcon icon={faArrowAltCircleDown} /></button>
    );
}

export default ButtonDown;