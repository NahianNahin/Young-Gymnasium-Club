import React from 'react';
import './Button.css';

const Button = ({time,setTheBreakTime}) => {
    return (
        <div className='btn'>
            <button onClick={() => setTheBreakTime(time)}>{time}s</button>
        </div>
    );
};

export default Button;