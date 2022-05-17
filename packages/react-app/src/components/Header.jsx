import React from "react";
import { Typography } from "antd";
import '../App.css'


const { Title, Text } = Typography;

// displays a page header

export default function Header({ link, title, subTitle, ...props }) {
  return (
      
    <div style={{ display: "flex", justifyContent: "space-between"}}>
      <h1> HARBOR </h1>
      <div className="appcont">
        {props.children}
      </div>
      
      
    </div>
    
  );
}

Header.defaultProps = {
  
};
