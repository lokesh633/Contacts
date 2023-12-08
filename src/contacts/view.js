import React from "react";
import { MdEmail } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaAddressBook, FaPhoneSquare } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import "./view.css";


const View = ({setShowView,viewItems,setViewItems}) => {

  const handleClose= ()=>{
    setShowView(0);
    setViewItems("")
  }

  return (
    <div className="view-main">
        <div className="view-container">
               <h1 className="view-heading">Contact Details</h1>
              <div className="view-box">
                <span className="span-icon"><IoPerson /></span>
                <span className="span-item">{viewItems.name}</span>
              </div>
              <div className="view-box">
                <span className="span-icon"> <FaPhoneSquare /></span>
                <span className="span-item">{viewItems.phone}</span>
              </div>  
              <div className="view-box">
                <span className="span-icon"><FaSquareWhatsapp /></span>
                <span className="span-item">{viewItems.whatsApp}</span>
              </div>
              <div className="view-box">
                <span className="span-icon"><MdEmail /></span>
                <span className="span-item">{viewItems.email}</span>
              </div>
              <div className="view-box">
                <span className="span-icon"><FaAddressBook /></span>
                <span className="span-item">{viewItems.address}</span>
              </div>
              <div className="view-box">
                <button className="btn" onClick={handleClose}>Close</button>
              </div>
        </div>
    </div>
  )
}

export default View