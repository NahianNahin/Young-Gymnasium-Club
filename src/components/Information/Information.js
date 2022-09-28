import React from 'react';
import './Information.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation} from '@fortawesome/free-solid-svg-icons';

const Information = (props) => {
    const{name,image,location} = props;
    return (
        <div className='flex gap-4 mb-7'>
            <div>
                <img src={image} alt="My-Photo" className='w-14' />
            </div>
            <div>
                <p className='font-semibold'>{name}</p>
                <p className='font-extralight'><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>  {location}</p>
            </div>
            
        </div>
    );
};

export default Information;