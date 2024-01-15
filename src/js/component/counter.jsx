import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import { BsStopwatch, BsWindowDesktop } from "react-icons/bs";
import Timer from "./timer";

const Counter = (props) => {

	const [hours,setHours] = useState(0);
	const [minutes,setMinutes] = useState(0);
	const [seconds,setSeconds] = useState(0);
	const [milliseconds,setMilliseconds] = useState(0);
	const [isRunning, setIsRunning] = useState (null);
	

		

	useEffect(() => {
		let interval;
	  
		const tick = () => {
		  if (milliseconds > 0) {
			setMilliseconds((ms) => ms - 1);
		  } else if (seconds > 0) {
			setSeconds((sec) => sec - 1);
			setMilliseconds(99);
		  } else if (minutes > 0) {
			setMinutes((min) => min - 1);
			setSeconds(59);
			setMilliseconds(99);
		  } else if (hours > 0) {
			setHours((hr) => hr - 1);
			setMinutes(59);
			setSeconds(59);
			setMilliseconds(99);
		  } else {
			clearInterval(interval);
			setIsRunning(false);
		  }
		};
	  
		if (isRunning) {
		  interval = setInterval(tick, 100); 
		}
	  
		return () => clearInterval(interval);
	  }, [milliseconds, seconds, minutes, hours, isRunning]);

	
	const changeMilliseconds = (event) => {
		setMilliseconds(event.target.value)
	}
	const changeSeconds = (event) => {
		setSeconds (event.target.value)
	}
	const changeMinutes = (event) => {
		setMinutes(event.target.value)
	}
	const changeHours = (event) => {
		setHours(event.target.value)
	}

	
	const startTimer = () =>  { 
		if (hours !== 0 || minutes !== 0 || seconds !== 0 || milliseconds != 0){
			setIsRunning(true)
		} else {
			window.alert('Add time!')
		}
	};

	const pauseTimer = () => {
		setIsRunning(false);
	}

	const stopTimer = () => { 
		resetTimer()
	} ;

	const resetTimer = () => { 
		setIsRunning (false);
		setMilliseconds (0);
		setSeconds(0);
		setMinutes(0);
		setHours(0);
	}

	return (

		<div> 
			<Timer 
			milliseconds={milliseconds}
			seconds ={seconds}
			minutes = {minutes}
			hours ={hours}
			changeMilliseconds={changeMilliseconds}
			changeSeconds = {changeSeconds}
			changeMinutes = {changeMinutes}
			changeHours = {changeHours}

			/>
			{!isRunning && (
				<button className="btn btn-outline-light m-4" onClick= {startTimer}>Start</button>
			)} 
			{isRunning && (<button className="btn btn-outline-light m-4" onClick= {pauseTimer}>Pause</button>) } 
			{""}

				<button className="btn btn-outline-light m-4" onClick={stopTimer}>Stop</button>
				
			
		</div>
	);
};



export default Counter