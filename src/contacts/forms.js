import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaAddressBook, FaPhoneSquare } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


import { IoPerson } from "react-icons/io5";
import "./forms.css";

const Forms = ({ setNewShowHide, contacts, setContact }) => {

  const [inpVal, setInpVal] = useState({
    name: "",
    phone: "",
    whatsApp: "",
    email: "",
    address: "",
  });

  const handleForm = ({ target: { name, value } }) => {
    setInpVal({ ...inpVal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    let objVal  = Object.values(inpVal)
    let res = objVal.every((ele)=>{
        return ele !== ""
    });

    if(res){
      setContact([...contacts, inpVal]);
      setNewShowHide(0);
    }
    if(!res){
      alert("Please fill all form")
    }
    
  };
  return (
    <div className="form-main">
      <div className="form-container">
        <div className="close" onClick={()=>setNewShowHide(0)}><IoMdClose/></div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">
              <IoPerson />
            </label>
            <input
              name="name"
              type="text"
              value={inpVal.name}
              placeholder="Name"
              onChange={handleForm}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">
              <FaPhoneSquare />
            </label>
            <input
              name="phone"
              type="text"
              value={inpVal.phone}
              placeholder="Phone"
              onChange={handleForm}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">
              <FaSquareWhatsapp />
            </label>
            <input
              name="whatsApp"
              type="text"
              value={inpVal.whatsApp}
              placeholder="Whats App"
              onChange={handleForm}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">
              <MdEmail />
            </label>
            <input
              type="email"
              name="email"
              value={inpVal.email}
              placeholder="Email"
              onChange={handleForm}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">
              <FaAddressBook />
            </label>
            <input
              type="text"
              name="address"
              value={inpVal.address}
              placeholder="Address"
              onChange={handleForm}
            />
          </div>
          <button type="submit" class="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forms;
