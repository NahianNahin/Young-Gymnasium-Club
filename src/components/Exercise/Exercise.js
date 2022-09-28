import React from 'react';
import Results from '../Results/Results';

const Exercise = ({selected}) => {
    let totalTime = 0;
    for(const activity of selected){
        totalTime = totalTime + activity.time;
    }
    return (
        <div>
            <p className='mb-5 font-semibold text-xl'>Exercise Details</p>
            <Results about = "Exercise Time" result = {totalTime}></Results>
            <Results about = "Break Time" result = "0"></Results>
        </div>
    );
};

export default Exercise;