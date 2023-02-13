import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
//custom component view order popup
import ViewOrderPopup from "./customer-list/order-list/view-order/view-order-popup-template.jsx";

//customer
//function to transfer id to order ListTemp
import *as  func2 from "./customer-list/order-list/order-list-template.jsx";
//function to transfer id to view order ListTemp
import *as  func3 from "./customer-list/order-list/view-order/view-order-template.jsx";
//vendor
//function to transfer vendor id to purchase list template
import *as sendVendorId from "./vendor-list/purchase-list/purchase-list-template.jsx";
//function to transfer vendor id to purchase return list template
import *as sendVendorId2 from "./vendor-list/purchase-return/purchase-return-template.jsx";
//custom function to get id
import * as func from "./to-get-send-id.jsx";



export default function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let navigate = useNavigate();
//function to route customers list page of particular restaurantType mixed for all pages
function block(){
  console.log("block button clicked")
}
function reject(){
  console.log("reject button clicked")
}
function approve(){
  console.log("approve button clicked")
}
//customer list page note block there in customer as well as restaurant page
function profile(){
  console.log("profile button clicked")
}
function order(){
  var id=func.Id()
  func2.getID(id)
  let path = "/restaurants/total-list/view-customer-list/order-list";
  navigate(path);
  console.log("order button clicked")
}
//order list page
function viewOrder(){
  //var id=func.Id()
  //func3.getID(id)
  //let path = "/restaurants/total-list/view-customer-list/order-list/view-order";
  //navigate(path);
    <ViewOrderPopup/>
  console.log("view button clicked & order id is")
}
function invoice(){
  console.log("invoice button clicked")
}
function purchaseList(){
  var id=func.Id()
  sendVendorId.getID(id)
  let path = "/restaurants/total-list/view-vendor-list/purchase-list";
  navigate(path);
}
function purchaseReturn(){
  var id=func.Id()
  sendVendorId2.getID(id)
  let path = "/restaurants/total-list/view-vendor-list/purchase-return";
  navigate(path);
}
function viewInvoice(){
  console.log("view invoice button clicked")
}
function viewDetails(){
  console.log("view details button clicked")
}
function addPurchase(){
  console.log("Add purchase button clicked")
}
function edit(){
  console.log("edit button clicked")
}
function delet(){
  console.log("delete button clicked")
}
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="contained"
        sx={{height:20}}
      >
      {/*label of button*/}
        {props.label}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      {/*drop down of button also Deciding which drop down button has been clicked and according to that call respective function for that action*/}
        {props.dropDown.map((text)=>(
        <div key={text}>
        {text=="Block"?<MenuItem onClick={block}>{text}</MenuItem>:text=="Reject"?<MenuItem onClick={reject}>{text}</MenuItem>:text=="Approve"?<MenuItem onClick={approve}>{text}</MenuItem>:text=="Profile"?<MenuItem onClick={profile}>{text}</MenuItem>:text=="Order List"?<MenuItem onClick={order}>{text}</MenuItem>:text=="View Order"?<MenuItem><ViewOrderPopup sx={{textAlign:"left"}}/></MenuItem>:text=="Invoice"?<MenuItem onClick={invoice}>{text}</MenuItem>:text=="Purchase List"?<MenuItem onClick={purchaseList}>{text}</MenuItem>:text=="Purchase Return"?<MenuItem onClick={purchaseReturn}>{text}</MenuItem>:text=="View Invoice"?<MenuItem onClick={viewInvoice}>{text}</MenuItem>:text=="View Details"?<MenuItem onClick={viewDetails}>{text}</MenuItem>:text=="Add Purchase"?<MenuItem onClick={addPurchase}>{text}</MenuItem>:text=="Edit"?<MenuItem onClick={edit}>{text}</MenuItem>:text=="Delete"?<MenuItem onClick={delet}>{text}</MenuItem>:null}
        </div>
        ))}
      </Menu>
    </div>
  );
}
