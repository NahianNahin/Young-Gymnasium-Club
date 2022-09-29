import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css';
import image from '../../my-image.png';
import Information from '../Information/Information';
import Properties from '../Properties/Properties';
import Breaks from '../Breaks/Breaks';
import Exercise from '../Exercise/Exercise';
import Completed from '../Completed/Completed';
import Blogs from '../Blogs/Blogs';
import icon from '../../icon.png';

const Activities = () => {
    const initial = localStorage.getItem('Break-time');
    const [activities,setActivities] = useState([]);
    const [selected,setSelected] = useState([]);
    const [breakTime,setBreakTime] = useState(initial ? initial : 0);
    const [blogs,setBlogs] = useState([]);
    useEffect(() => {
        fetch('activities.json')
        .then(res => res.json())
        .then(data => setActivities(data));
    },[])
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
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
        <div className='overall-area'>
            <div className='activities-container'>
            <div className='title'>
                <div className='icon'>
                    <img className='img-size' src={icon} alt="icon" />
                </div>
            <div>
            <h1 className='text-3xl font-semibold py-5 mb-2'> Welcome to Young Gymnasium Club!!!</h1>
            </div>
            </div>
            <p className='text-xl font-semibold p-5 '>Select Today’s Exercise</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 grid-cols-1'>
                {
                    activities.map(activity => <Activity key={activity.id} activity={activity} handleAddList = {handleAddList}></Activity>)
                }
                
            </div>
            <Blogs blogs={blogs}></Blogs>
                
            </div>
            <div className='added-area'>
                
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