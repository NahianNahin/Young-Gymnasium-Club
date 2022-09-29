import React from 'react';
import './Button.css';

const Button = ({time,setTheBreakTime}) => {
    return (
        
     <button className='btn' onClick={() => setTheBreakTime(time)}>{time}s</button>
        
    );
};

export default Button;