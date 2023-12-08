import React, { useState } from "react";
import "./contacts.css";
import { MdOutlinePreview, MdDeleteForever, MdAddCall } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaPhoneSquare, FaUserEdit } from "react-icons/fa";
import View from "./view";
import image from "./no-contacts.png";
import Forms from "./forms";
import Edit from "./edit";

const Maincom = () => {
  const [newShowHide, setNewShowHide] = useState(0);
  const [showView, setShowView] = useState(0);
  const [showEdit,setShowEdit]=useState(0);
  const [viewItems,setViewItems] = useState();

  const [editItems,setEditItems] = useState();
  const [editIndex,setEditIndex]  = useState();

  const AddEditItem = (item,index)=>{
     setEditItems(item);
     setEditIndex(index);
     setShowEdit(1);
  }

  const [contacts, setContact] = useState([]);

  const handleDelete = (item, ind) => {
    let res = window.confirm(`Are you sure to delete ${item.name}`);
    if (res) {
      setContact(
        contacts.filter((item, index) => {
          return ind !== index;
        })
      );
    }
  };

  const handleView = (item)=>{
    setViewItems(item);
    setShowView(1)
  }

  return (
    <div className="main-contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>CONTACTS</h2>
        </div>
        <div className="addnew" onClick={() => setNewShowHide(1)}>
          <h3>
            Add New
            <span>
              <MdAddCall />
            </span>
          </h3>
        </div>
        <div className="image-container">
          {contacts.length === 0 ? (
            <div className="image-container">
            <img id="img" src={image} alt="No Contacts found" />
            </div>
          ) : (
            <div className="displaymain">
              <ul className="display-ul">
                {contacts.map((item, index) => {
                  return (
                    <li className="display-li" key={index}>
                      <span className="iconMax1">
                        <span>
                          <IoPerson />
                        </span>
                        {item.name}
                      </span>
                      <span className="iconMax2">
                        <span>
                          <FaPhoneSquare />
                        </span>
                        {item.phone}
                      </span>
                      <span className="iconMax3">
                        <span onClick={()=>handleView(item) }>
                          <MdOutlinePreview />
                        </span>{" "}
                        <span onClick={()=>AddEditItem(item,index)}>
                          <FaUserEdit />
                        </span>{" "}
                        <span onClick={() => handleDelete(item, index)}>
                          <MdDeleteForever />
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
      {newShowHide === 1 && (
        <div className="main-form-container">
          <Forms
            setNewShowHide={setNewShowHide}
            contacts={contacts}
            setContact={setContact}
          />
        </div>
      )}
      {showView === 1 && (
        <div className="view-main-container">
          <View setShowView={setShowView} viewItems={viewItems} setViewItems={setViewItems} />
        </div>
      )}
      {
        showEdit === 1 &&(
        <div className="edit-main-container">
           <Edit 
             editItems={editItems} 
             setEditItems={setEditItems} 
             editIndex={editIndex} 
             setEditIndex={setEditIndex} 
             contacts={contacts} 
             setContact={setContact}
             setShowEdit={setShowEdit}
           /> 
        </div>)
      }
      
    </div>
  );
};

export default Maincom;
