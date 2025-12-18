import React, { useEffect, useRef, useState } from 'react';

const CountDownTimer = ({ minute, mode }) => {
  const initialSeconds = minute * 60;

  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [buttonText, setButtonText] = useState("Start");
  const intervalRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeLeft(initialSeconds);
    setIsRunning(false);
    setButtonText("Start");
    clearInterval(intervalRef.current);
  }, [initialSeconds]);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } // count time

    return () => clearInterval(intervalRef.current);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
      setButtonText("Start");
      setCount(pre => pre + 1);

      setTimeout(() => {
        setTimeLeft(initialSeconds);
        document.body.style.background = "rgb(255, 255, 180)";
      }, 500);
    }
  }, [timeLeft, isRunning, initialSeconds]);

  const start = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
      setButtonText("Continue");
      document.body.style.background = "rgb(136, 255, 136)";
    }
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current); // Optional
    document.body.style.background = "rgb(255, 105, 105)";
  };

  const reset = () => {
    setIsRunning(false);
    setButtonText("Start");
    setTimeLeft(initialSeconds);
    clearInterval(intervalRef.current);
    document.body.style.background = "rgb(255, 255, 180)";
  };

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className='box'>
      <div className='clock'>{formatTime()}</div>
      
      {mode === 'study' && (
        <div className='cycle'>Cycle: {count}</div>
      )}

      <div className='button'>
        <button onClick={start} className='start-button'>{buttonText}</button>
        <button onClick={stop} className='stop-button'>Stop</button>
        <button onClick={reset} className='reset-button'>Reset</button>
      </div>
    </div>
  );
};

export default CountDownTimer;
