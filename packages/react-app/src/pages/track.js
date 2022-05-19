import React from 'react';
import Explorer from './Explorer';
import { Button } from "antd";
import './styles.css'
function Track  (){
return (
<div className='track'>
<h1> Track Your Wallet <br/>
  transactions now. </h1>
 
 <input className='trackbutton' type='button' onClick={Explorer} value="Track"/>




</div>


);




}
export default Track;