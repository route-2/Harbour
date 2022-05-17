import React from 'react';
import Line from '../images/Line.svg'
import './styles.css'

function Header() {
    return ( 
        <div className='cont'>
            <p className='header' > HARBOR <br/> <img className='line' src={Line} /> <br/> <span className='purple'> </span> </p>
        </div>

     );
}

export default Header;