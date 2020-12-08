import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'



 const Navbar = (props) => {
    
        return (
            <nav className='navbar bg-primary'>
                <h1>
                <FontAwesomeIcon icon={faGithub}/> {props.title}
                </h1>
            </nav>
        );
    
}

export default Navbar;
