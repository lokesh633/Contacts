import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaAddressBook, FaPhoneSquare } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";


export default function Edit({editItems,setEditItems,editIndex,setEditIndex,contacts,setContact,setShowEdit}){

    const [editVal,setEditVal] = useState(editItems);

    const handleEditFrom = ({target:{name,value}})=>{
           setEditVal({...editVal,[name]:value})
    }

    const mapOper = ()=>{
      setContact(contacts.map((item,index)=>{
        if(index===editIndex){
          return editVal;
        }else{
          return item;
        }
      }))
    }

    const handleEditSubmit = (e)=>{
       e.preventDefault()
       mapOper()
       setEditItems({
        name: "",
        phone: "",
        whatsApp: "",
        email: "",
        address: "",
      })
      setEditIndex();
      setShowEdit(0)
    }

    return (<>
      <div className="form-main">
      <div className="form-container">
        <form>
          <div className="form-group">
            <label >
              <IoPerson />
            </label>
            <input
              name="name"
              type="text"
              value={editVal.name}
              placeholder="Name"
              onChange={handleEditFrom}
            />
          </div>
          <div className="form-group">
            <label>
              <FaPhoneSquare />
            </label>
            <input
              name="phone"
              type="text"
              value={editVal.phone}
              placeholder="Phone"
              onChange={handleEditFrom}
            />
          </div>
          <div className="form-group">
            <label>
              <FaSquareWhatsapp />
            </label>
            <input
              name="whatsApp"
              type="text"
              value={editVal.whatsApp}
              placeholder="Whats App"
              onChange={handleEditFrom}
            />
          </div>
          <div className="form-group">
            <label>
              <MdEmail />
            </label>
            <input
              type="email"
              name="email"
              value={editVal.email}
              placeholder="Email"
              onChange={handleEditFrom}
            />
          </div>
          <div className="form-group">
            <label>
              <FaAddressBook />
            </label>
            <input
              type="text"
              name="address"
              value={editVal.address}
              placeholder="Address"
              onChange={handleEditFrom}
            />
          </div>
          <button type="submit" className="btn" onClick={handleEditSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
    </>)
}