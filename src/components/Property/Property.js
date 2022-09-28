import React from 'react';

const Property = (props) => {
    const {amount,name,unit} = props;
    return (
        <div>
            <p><span className='text-2xl font-semibold'>{amount}</span><span className='font-extralight'>{unit}</span></p>
            <p className='font-extralight'>{name}</p>
        </div>
    );
};

export default Property;