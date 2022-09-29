import React from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({blogs}) => {
    return (
        <div>
            <h1 className='text-3xl font-semibold p-5 my-3'>All Blogs</h1>
            <div>
                {
                    blogs.map(blog => <Blog blog = {blog}></Blog>)
                }
            </div>
        </div>
        
    );
};

export default Blogs;