import React, { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'


const Update = () => {
  const [contacts,setContacts] = useState(
    {
      name : "",
      mail : "",
      phone : "",
      profile : "",
    }
  );
  const location = useLocation();
  const navigate = useNavigate();
  const contactid = location.pathname.split("/")[2];
  const handleClick=async (e)=>{
    e.preventDefault();
    try
    {
      await axios.put("http://localhost:8000/contacts/"+contactid,contacts)
      navigate("/");
    }
    catch(err)
    {
      console.log(err);
    }
  }

  const handleChange = (e)=>{
    setContacts((prev)=>({...prev,[e.target.name]:e.target.value}));
  };
  return (
    <div>
      <div className="form">
        <h1>Update Contact</h1>
        <input type="text"  name='name' placeholder='name' onChange={handleChange}/>
        <input type="text"  name='mail' placeholder='email' onChange={handleChange}/>
        <input type="text"  name='phone' placeholder='number' onChange={handleChange}/>
        <input type="text"  name='profile' placeholder='profile pic' onChange={handleChange}/>
        <button onClick={handleClick}>Update</button>
      </div>
    </div>
  )
}

export default Update
