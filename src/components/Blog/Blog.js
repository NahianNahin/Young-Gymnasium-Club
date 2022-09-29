import React from 'react';

const Blog = ({blog}) => {
    const {id,question,answer} = blog;
    return (
        <div>
            <div className="card w-11/12 bg-base-100 shadow-xl mb-10">
                <div className="card-body">
                    <h2 className="card-title"> Blog {id}</h2>
                    <p className='font-semibold'>{question}</p>
                    <p>{answer}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Blog;