import React from 'react';
import './Activity.css';

const Activity = (props) => {
    const {name,img,detials,time,age} = props.activity;
    return (
        <div>
            <div className="card w-64 bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src={img} alt={name} className="rounded-xl h-40" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    {/* <p>{detials.slice(0,100)}...</p> */}
                    <p>For Age : {age}</p>
                    <p><b className='font-semibold'>Time required :</b> {time}</p>
                    <div className="card-actions">
                    <button className="btn btn-sm  ">Add to list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;