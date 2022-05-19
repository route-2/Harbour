import React from "react";
import { Typography } from "antd";
import Comp from "../images/maincomp.png"
import Line from '../images/Line.svg'
import Explorer from "../pages/Explorer";
import { Link } from "react-router-dom";
import '../App.css'


const { Title, Text } = Typography;

// displays a page header

export default function Header({ link, title, subTitle, ...props }) {
  return (
      <div className="headcont">
    <div style={{ display: "flex", justifyContent: "space-between"}}>
      <div className="headhead"> 
      <h1 className="harbor"> HARBOR   <span className="line"> <img src={Line}/> </span>  </h1>
      
      <div className="line"> 
     
      </div>
      <div className="navhead">
      <p> <a href="#Portfolio"> Portfolio </a> </p> <br/>
      
        <p> <Link to ='/Explorer'> Explorer </Link></p>
      </div>
      </div>
      
      
     
      {/* <div className="Header"> 
      
      <img src={Comp}/> 
      
      
      
      </div> */}
     
      
      
      
      
      
      
      
      
      
      
      <div className="appcont">
        {props.children}
      </div>
      
     
      
      
    </div>
    </div>
    
  );
}

Header.defaultProps = {
  
};
