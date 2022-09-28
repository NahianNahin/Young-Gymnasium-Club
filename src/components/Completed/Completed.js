import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Completed = () => {
    const notify = () => toast("Wow so easy! Congratulation you have completed your workouts.");
    return (
        <div>
        <button onClick={notify} className="btn">Activity Completed</button>
        <ToastContainer />
        </div>
    );
};

export default Completed;