import React from 'react';
import Line from '../images/Line.svg'
import './styles.css'

function Header() {
    return ( 
        <div className='cont'>
            <p className='header' > HARBOR <br/> <img className='comp' src={Line} /> <br/> <span className='purple'> </span> </p>
            <span className="compImg"> <img className="comp" src="../images/comp.svg"> </img> </span> 
        </div>

     );
}

export default Header;