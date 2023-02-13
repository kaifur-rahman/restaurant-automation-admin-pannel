import React from 'react';
import Drawer from "../../navbar/Drawer.jsx";

{/*passing content prop in drawer to update content exporting all functions to paths
  in order to render required content according to path mapping*/}
function Received(){
  return(
    <div>
    <Drawer content="TRecieved">
    </Drawer>
    </div>
  )
}

function InProcess(){
  return(
    <div>
    <Drawer content="In Process">
    </Drawer>
    </div>
  )
}

function Resolved(){
  return(
    <div>
    <Drawer content="Resolved">
    </Drawer>
    </div>
  )
}

function Closed(){
  return(
    <div>
    <Drawer content="Closed">
    </Drawer>
    </div>
  )
}


export {Received,InProcess,Resolved,Closed};
