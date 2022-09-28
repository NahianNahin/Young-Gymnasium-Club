import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css';
import image from '../../my-image.png';
import Information from '../Information/Information';
import Properties from '../Properties/Properties';
import Breaks from '../Breaks/Breaks';
import Exercise from '../Exercise/Exercise';

const Activities = () => {
    const [activities,setActivities] = useState([]);
    const [selected,setSelected] = useState([]);
    useEffect(() => {
        fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivities(data));
    },[])

    const handleAddList = activity => {
        const newSelected = [...selected,activity];
        setSelected(newSelected);
        
    }
    return (
        <div className='overall-area '>
            <div className='activities-container'>
            <h1 className='text-3xl font-semibold p-5 mb-2'> Welcome to Young Gymnasium Club!!!</h1>
            <p className='text-xl font-semibold p-5 '>Select Today’s Exercise</p>
            <div className='grid grid-cols-3 gap-4'>
                {
                    activities.map(activity => <Activity key={activity.id} activity={activity} handleAddList = {handleAddList}></Activity>)
                }
            </div>
                
            </div>
            <div className='added-area '>
                
                <div className='info'>
                <Information name = "Md Rizwan" location = "Dhaka,Bangladesh" image = {image}></Information>
                <Properties></Properties>
                <Breaks></Breaks>
                <Exercise selected={selected}></Exercise>
                <button className='btn mt-5'>Activity Completed</button>
                </div>

            </div>
        </div>
    );
};

export default Activities;