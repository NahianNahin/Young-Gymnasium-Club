import React from 'react';
import Results from '../Results/Results';

const Exercise = ({selected,breakTime}) => {
    let totalTime = 0;
    for(const activity of selected){
        totalTime = totalTime + activity.time;
    }
    
    return (
        <div>
            <p className='mb-5 font-semibold text-xl'>Exercise Details</p>
            <Results about = "Exercise Time" result = {totalTime} unit="min"></Results>
            <Results about = "Break Time" result = {breakTime} unit="sec"></Results>
        </div>
    );
};

export default Exercise;