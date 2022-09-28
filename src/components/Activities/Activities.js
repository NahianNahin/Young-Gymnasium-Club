import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css';

const Activities = () => {
    const [activities,setActivities] = useState([]);
    useEffect(() => {
        fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivities(data));
    },[])
    return (
        <div className='overall-area '>
            <div className='activities-container'>
            <h1 className='text-3xl font-semibold p-5 mb-2'> Welcome to Young Gymnasium Club!!!</h1>
            <p className='text-xl font-semibold p-5 '>Select today’s exercise</p>
            <div className='grid grid-cols-3 gap-4'>
                {
                    activities.map(activity => <Activity key={activity.id} activity={activity}></Activity>)
                }
            </div>
                
            </div>
            <div className='added-area '>
                <h1>Add your activities time</h1>
            </div>
        </div>
    );
};

export default Activities;