import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import {BsStopwatch} from "react-icons/bs"

const myStyle = {
    marginTop: "50px",
    fontSize: "30px",
    marginTop: "200px",
}

const inputTextStyle = {
    width: '80px',
    backgroundColor: "onyx",
    borderRadius: "5px",
    
}

const Timer = ({seconds, minutes, hours, milliseconds, changeSeconds, changeMinutes, changeHours}) => {
    
    return (
        <div className="d-flex justify-content-center" style ={myStyle}> 
        <BsStopwatch className="my-5" />
            <div className='d-flex flex-column m-3'>
                        <label>HH</label> 
                        <input style={inputTextStyle} value={hours} onChange={changeHours}/> 
                    </div> {""}

            <div className='d-flex flex-column m-3'>
                        <label>MM</label> 
                        <input  style={inputTextStyle} value={minutes} onChange={changeMinutes}/> 
            </div> {""}
            <div className='d-flex flex-column m-3' >
                        <label>SS</label> 
                        <input style={inputTextStyle} value={seconds} onChange={changeSeconds}/> 
                    </div> {""}
             <div className='d-flex flex-column m-3' >
                        <label>MS</label> 
                        <input style={inputTextStyle} value={milliseconds}/> 
                </div> {""}
    </div> )


}; 



export default Timer