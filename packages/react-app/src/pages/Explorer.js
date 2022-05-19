import React from 'react';
import Line from '../images/Line.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';
// const getFilteredItems = (query,items) => {
//     if(!query)
//     {
//         return items;
//     }
//     return items.filter(address => address.name.includes(query))
// }


 const Explorer =() =>
  {
    // const [query, setQuery] = useState("");
    // const{tracks}= ;
    // const{items} = tracks;
    // const filteredItems = getFilteredItems(query,items);
return (
<div className='navex'>
<div className='expheader'> 
<h1 className="harbor"> HARBOR    </h1>
<div className='expcomp'>
    <input type='text'  placeholder='search'/> 
    {/* onChange={e => setQuery(e.target.value)} */}
    
</div>
</div>
{/* {filteredItems.map(value => <h1 key={value.name}>{value.name} </h1>)} */}









</div>




);




}
export default Explorer;