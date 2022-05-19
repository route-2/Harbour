import React from 'react';
import Header from '../components/Header';
import Track from './track';

import './styles.css'

function HomePage() {
    return ( 
    
        
        <div className='cont'>
        <div className="gradient_bg">
        <Header/>
            <Track/>
        </div>
           
        </div>

     );
}

export default HomePage;