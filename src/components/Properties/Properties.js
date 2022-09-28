import React from 'react';
import Property from '../Property/Property';
import './Properties.css';

const Properties = () => {
    return (
        <div className='grid grid-cols-3 gap-3 bg-slate-100 py-2 px-7 rounded-lg mb-7'>
            <Property amount="56" unit="kg" name="Weight"></Property>
            <Property amount="5.8" unit="ft" name="Height"></Property>
            <Property amount="23" unit="yrs" name="Age"></Property>
        </div>
    );
};

export default Properties;