import { useState } from 'react';
import './navigation.styles.scss';
import { Link } from 'react-router-dom';
import Destinations from '../../pages/destinations/destinations.component';

const Navigation = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    };
    
    return (
            <nav className='navigation'>
                <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleClass}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`menu ${isActive ? 'open' : ''}`}>
                    <li><Link to="/destinations" element={<Destinations />}>Destinations</Link></li>
                    <li><Link to="/tours">Tours</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            
    )
}

export default Navigation;