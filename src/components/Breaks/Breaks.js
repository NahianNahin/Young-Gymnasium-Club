import React from 'react';
import './Breaks.css';

const Breaks = () => {
    return (
        <div>
            <p className='mb-5 font-semibold text-xl'>Add A Break</p>
            <div className='grid grid-cols-5 gap-1 bg-slate-100 py-2 px-3 rounded-lg mb-7'>
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
            </div>
        </div>
    );
};

export default Breaks;