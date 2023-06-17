import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const fetchAllContacts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/contacts");
        setContacts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllContacts();
  }, []);

  const handleDelete = async (id)=>{
    try{
      await axios.delete("http://localhost:8000/contacts/"+id);
    window.location.reload();
    }catch(err)
    {
      console.log(err);
    }
  }

  return (
    <div>
      <div className="add">
        <Link to="/add">
          <button>Add new Contact</button>
        </Link>
      </div>
      <div className="contacts">
        <h1>My Contacts</h1>
        {contacts.map((contact) => (
          <div className="contact" key={contact.id}>
            {contact.profile && <img src={contact.profile} alt="" />}
            <h2>{contact.name}</h2>
            <h2>{contact.mail}</h2>
            <h2>{contact.phone}</h2>
            <Link to={`/update/${contact.id}`}><button className="buttons up">Update</button></Link>
            <button className="buttons de" onClick={()=>handleDelete(contact.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
