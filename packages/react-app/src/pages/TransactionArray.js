import Transaction from "./Transaction";
import React from "react";
import Tdata from "./Tdata";
export default function TransactionArray()

{
    return ( 
        <div className="Apps"> 
       {Tdata.map(TransactionCard)}
   
   
   </div>
    )
}

function TransactionCard(val) { // val stores the array values of Sdata
    return (
         <Transaction 
         key={val.key} // add key to every array as a unique id
         details={val.details} // in the form of objects
         logo={val.logo}
         time={val.time}
         img={val.img}
         
    />



    )
}
