import React from 'react';
import Line from '../images/Line.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HomePage from './Homepage';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './styles.css'
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
{/* <h1 className="harbor" > HARBOR    </h1> */}
<a href="/" className="harbor" onClick={HomePage}> HARBOR
</a>
<div className='expcomp'>
    <input type='text'  placeholder='Search address' className='search'/> 
    {/* onChange={e => setQuery(e.target.value)} */}
    
</div>
</div>
<div className='TrackAdd'>
<input className='Addy'
            type="text"
            value="You are now tracking address"
            // value=
            // onChange=
         />
</div>
{/* {filteredItems.map(value => <h1 key={value.name}>{value.name} </h1>)} */}
<div className='Chain'>

{/* <Button variant="contained" href="#">Ethereum Chain</Button>
<Button variant="contained" href="#">Solana Chain</Button>
<Button variant="contained" href="#">Bitcoin Chain</Button>
<Button variant="contained" href="#">Cardano Chain</Button>
<Button variant="contained" href="#">Tron Chain</Button>
 */}

<button className='Button'> <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=022" className='crypto' /> Bitcoin chain</button>
<button className='Button'> <img src='https://cryptologos.cc/logos/solana-sol-logo.svg?v=022' className='crypto'/>  Solana chain</button>
<button className='Button'><img src='https://cryptologos.cc/logos/tron-trx-logo.svg?v=022' className='crypto'/> Tron chain</button>
<button className='Button'><img src='https://cryptologos.cc/logos/cardano-ada-logo.svg?v=022' className='crypto'/> Cardano chain</button>
<button className='Button'><img src='https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022' className='crypto'/> Ethereum chain</button>


</div>
<div className='Trans'>
       <div className='leftcont'> 
            
       <div className='Cardlist'>

<button className='Button'><img src='https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022' className='crypto'/> You have sent .....</button>



<label className="Time"> Time <img src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=022 " className='crypto'/></label>
{/* <h3> Time <img src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=022 " className='crypto'/></h3>
<h3> Time <img src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=022 " className='crypto'/></h3>
<h3> Time <img src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=022 " className='crypto'/></h3>
<h3> Time <img src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=022 " className='crypto'/></h3>
<h3> Time <img src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=022 " className='crypto'/></h3>
<h3> Time <img src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=022 " className='crypto'/></h3>
<h3> Time <img src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=022 " className='crypto'/></h3>
<h3> Time <img src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=022 " className='crypto'/></h3>
<h3> Time <img src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=022 " className='crypto'/></h3> */}


</div>
<div className='Cardlist'>

<button className='Button'><img src='https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022' className='crypto'/> You have sent .....</button>



<label className="Time"> Time <img src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=022 " className='crypto'/></label>



</div>
<div className='Cardlist'>

<button className='Button'><img src='https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022' className='crypto'/> You have sent .....</button>



<label className="Time"> Time <img src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=022 " className='crypto'/></label>



</div>
<div className='Cardlist'>

<button className='Button'><img src='https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022' className='crypto'/> You have sent .....</button>



<label className="Time"> Time <img src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=022 " className='crypto'/></label>



</div>
<div className='Cardlist'>

<button className='Button'><img src='https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022' className='crypto'/> You have sent .....</button>



<label className="Time"> Time <img src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=022 " className='crypto'/></label>



</div>
<div className='Cardlist'>

<button className='Button'><img src='https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022' className='crypto'/> You have sent .....</button>



<label className="Time"> Time <img src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=022 " className='crypto'/></label>



</div>
      <div className='Cardlist'>

<button className='Button'><img src='https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022' className='crypto'/> You have sent .....</button>



<label className="Time"> Time <img src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=022 " className='crypto'/></label>



</div>  </div>
     </div>
</div>




);




}
export default Explorer;
{/* <button className='Button'> <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=022" className='crypto' /> You have sent ....</button>
<button className='Button'> <img src='https://cryptologos.cc/logos/solana-sol-logo.svg?v=022' className='crypto'/> You have sent ..... </button>
<button className='Button'><img src='https://cryptologos.cc/logos/tron-trx-logo.svg?v=022' className='crypto'/>You have sent .....</button>
<button className='Button'><img src='https://cryptologos.cc/logos/cardano-ada-logo.svg?v=022' className='crypto'/> You have sent .....</button>
<button className='Button'><img src='https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022' className='crypto'/> You have sent .....</button>
<button className='Button'> <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=022" className='crypto' /> You have sent ....</button>
<button className='Button'> <img src='https://cryptologos.cc/logos/solana-sol-logo.svg?v=022' className='crypto'/> You have sent ..... </button>
<button className='Button'><img src='https://cryptologos.cc/logos/tron-trx-logo.svg?v=022' className='crypto'/>You have sent .....</button>
<button className='Button'><img src='https://cryptologos.cc/logos/cardano-ada-logo.svg?v=022' className='crypto'/> You have sent .....</button> */}