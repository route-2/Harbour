import React from 'react';
import Header from '../components/Header';
import Track from './track';
import '../App.css'

import './styles.css'
import ThemeSwitcher from '../components/ThemeSwitch';

function HomePage() {
    return ( 
    
        
        <div className='cont'>
        <div className="gradient_bg">
        <Header/>

            <Track/>
            <ThemeSwitcher/>
        </div>
           
        </div>

     );
}

export default HomePage;