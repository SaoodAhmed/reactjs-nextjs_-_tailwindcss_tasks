"use client"


import { useState } from "react";

interface AlertType {
    type:string;
    heading:string;
    children:any;
    closable:boolean

}

const Alert = ({ type = "Information", heading, children, closable }:AlertType) => {
    
  return (
    <>
      <div>
        <span
          role="img"
          aria-label={type === "warning" ? "Warning" : "Information"}
        >
          {type === "warning" ? "⚠" : "i"}
        </span>
        <span>{heading}</span>
        {closable && (
          <button>X</button>)
        }
        <div>{children}</div>
      </div>
    </>
  );
};



const AlertButtonUseState = () => {
    const [closable, setClosable] = useState(true)
  return (
    <>
        <Alert closable={closable} heading="Success" type="Information">Every thing is really good!</Alert>
    </>

  )
};

export default AlertButtonUseState;
