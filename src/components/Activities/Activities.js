import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css';
import image from '../../my-image.png';
import Information from '../Information/Information';
import Properties from '../Properties/Properties';
import Breaks from '../Breaks/Breaks';
import Exercise from '../Exercise/Exercise';
import Completed from '../Completed/Completed';

const Activities = () => {
    const [activities,setActivities] = useState([]);
    const [selected,setSelected] = useState([]);
    const [breakTime,setBreakTime] = useState(0);
    useEffect(() => {
        fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivities(data));
    },[])

    const handleAddList = activity => {
        const newSelected = [...selected,activity];
        setSelected(newSelected);
        
    }
    const setTheBreakTime = (time) => {
        localStorage.setItem("Break-time",time);
        const newTime = localStorage.getItem('Break-time');
        
        setBreakTime(newTime);
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
                <Breaks setTheBreakTime = {setTheBreakTime}></Breaks>
                <Exercise selected={selected} breakTime={breakTime}></Exercise>
                <Completed></Completed>
                
                </div>

            </div>
        </div>
    );
};

export default Activities;