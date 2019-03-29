
import React, { useState, useRef } from 'react';
import './App.css';
import Clock from './Clock';
import Break from './Break';
import Session from './Session';
import soundfile from "./assets/BeepSound.wav";


const App = () =>  {
  const defaultSession = 25;
  const defaultBreak = 5;
  

  const [timeRemaining, setTimeRemaining] = useState(defaultSession * 60);
  const [sessionTime, setSessionTime] = useState(defaultSession);
  const [breakTime, setBreakTime] = useState(defaultBreak);
  const [timerOn, setTimerOn] = useState(false);
  const [intervalID, setIntervalID] = useState(null);
  const [isBreak, setIsBreak] = useState(false);
  const audioBeep = useRef(null);

  var currentIntervalID;
  var onBreak = isBreak;


  const breakIncrement = () => {
    if (!timerOn && breakTime <60) {
      let time = breakTime + 1;
      setBreakTime(time); 
    }
  }

  const breakDecrement = () => {
    if (!timerOn && breakTime > 1) {
      let time = breakTime - 1;
      setBreakTime(time); 
    }
  }

  const sessionIncrement = () => {
    if (!timerOn && sessionTime <60) {
      let newTime = sessionTime + 1;
      setSessionTime(newTime); 
      setTimeRemaining(newTime * 60);
    }
  }

  const sessionDecrement = () => {
    
    if (!timerOn && sessionTime > 1) {
      let newTime = sessionTime - 1;
      setSessionTime(newTime); 
      setTimeRemaining(newTime * 60);
    }
  }


  const toggleTimer = () => {

    if (!timerOn) {
      currentIntervalID = setInterval(() => tick(), 1000);
      setIntervalID(currentIntervalID);
    } else {
      clearInterval(intervalID);
    }
    
    setTimerOn(!timerOn);
    
  }
  const tick = () => {

    setTimeRemaining (prevTime => {
       if (prevTime > 0) {
         return prevTime - 1;
       }
       else {
         console.log(isBreak);
         onBreak = !onBreak;
         setIsBreak(onBreak);
         // start break
         if(onBreak) {
          alert();
           return startBreak();
           
         } else {
           return startSession();
         }
       }
    });
   }

   const alert = () => {
       audioBeep.current.play();
       setTimeout(()=> {
         audioBeep.current.pause();
         audioBeep.current.currentTime = 0;
      }, 2000)
   }
   const startBreak = () => {
     
      return breakTime * 60;
    }
    
    const startSession = () => {
      return sessionTime * 60;
    }

      
    
      

 
  const resetTimer = () => {
    setSessionTime(defaultSession);
    setBreakTime(defaultBreak);
    onBreak = false;
    setIsBreak(onBreak);
    setTimeRemaining(defaultSession * 60);
    setTimerOn(false);
    clearInterval(intervalID);
    audioBeep.current.pause();
    audioBeep.current.currentTime = 0;
  }

    return (
      <div className="main-container">
       <h1>Pomodoro Clock</h1>
       <Clock isBreak={isBreak} timeRemaining={timeRemaining} toggleTimer={toggleTimer} handleReset={resetTimer} timerOn={timerOn}/>
       <div className="row-container">
       <Break 
              breakTime={breakTime} 
              handleIncrement={breakIncrement} 
              handleDecrement={breakDecrement}
        />
        <Session 
              sessionTime={sessionTime} 
              handleIncrement={sessionIncrement}
              handleDecrement={sessionDecrement}
        />
       </div>

        

        <audio id="beep" ref={audioBeep} src={soundfile} />
      </div>
    );
  
}

export default App;
