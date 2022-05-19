import React from "react"
export default function Transaction(props) {
    return (
        
    <> 
    
    <div className="Card"> 
     <div className="TransCard">   
     
     
     <div className="card__info"> 
     <input type="text" className="inputTrans"> 
     <span className="card-category"> {props.details}</span>
     <img src={props.logo} alt="Logo" className="card-logo"/>
     </input>
     <h3 className="card-title"> {props.time} </h3>
     <img src={props.img} alt="myPic" className="card-img"/>
     
     </div>
     </div>
     </div>
    
    
    </>
    
    
    )
    
    }