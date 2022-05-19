import React from 'react';

import Comp from '../images/maincomp.png'
import './styles.css'

function Head() {
    return ( 
        <div className='cont'>
            <p className='header' > HARBOR  <br/> <p className='portfolio'> Portfolio </p> <br/> <span className='purple'> </span> <img className='appcont' src={Comp}/> </p>
            <span className="compImg">  </span> 
        </div>
        

     );
}

export default Head;