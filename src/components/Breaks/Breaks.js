import React from 'react';
import Button from '../Button/Button';
import './Breaks.css';

const Breaks = ({setTheBreakTime}) => {
    
    return (
        <div>
            <p className='mb-5 font-semibold text-xl'>Add A Break</p>
            <div className='grid grid-cols-5 gap-1 bg-slate-100 py-2 px-3 rounded-lg mb-5'>
                <Button time="10" setTheBreakTime={setTheBreakTime}></Button>
                <Button time="20" setTheBreakTime={setTheBreakTime}></Button>
                <Button time="30" setTheBreakTime={setTheBreakTime}></Button>
                <Button time="40" setTheBreakTime={setTheBreakTime}></Button>
                <Button time="50" setTheBreakTime={setTheBreakTime}></Button>
            </div>
        </div>
    );
};

export default Breaks;