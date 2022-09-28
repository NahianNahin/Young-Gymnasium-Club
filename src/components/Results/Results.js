import React from 'react';

const Results = (props) => {
    const {about,result,unit} = props;
    return (
        <div className='flex justify-between bg-slate-100 py-3 px-6 rounded-lg mb-4'>
            <p className='font-semibold'>{about}</p>
            <p className='font-extralight'>{result} {unit} </p>
        </div>
    );
};

export default Results;