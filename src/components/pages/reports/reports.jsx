import React from 'react';
import Drawer from "../../navbar/Drawer.jsx";

{/*passing content prop in drawer to update content exporting all functions to paths
  in order to render required content according to path mapping*/}
function Sales(){
  return(
    <div>
    <Drawer content="Sales">
    </Drawer>
    </div>
  )
}

function Inventory(){
  return(
    <div>
    <Drawer content="Inventory">
    </Drawer>
    </div>
  )
}

function Vendors(){
  return(
    <div>
    <Drawer content="Vendors">
    </Drawer>
    </div>
  )
}

function Transaction(){
  return(
    <div>
    <Drawer content="Transaction">
    </Drawer>
    </div>
  )
}

function Customers(){
  return(
    <div>
    <Drawer content="Customers">
    </Drawer>
    </div>
  )
}

function Taxes(){
  return(
    <div>
    <Drawer content="STaxes">
    </Drawer>
    </div>
  )
}
function Discount(){
  return(
    <div>
    <Drawer content="Discount">
    </Drawer>
    </div>
  )
}

export {Sales,Inventory,Vendors,Transaction,Customers,Taxes,Discount};
