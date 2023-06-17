import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Add = () => {
  const [contacts,setContacts] = useState(
    {
      name : "",
      mail : "",
      phone : "",
      profile : "",
    }
  );
  const navigate = useNavigate();
  const handleClick=async (e)=>{
    e.preventDefault();
    try
    {
      await axios.post("http://localhost:8000/contacts",contacts)
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
  console.log(contacts);
  return (
    <div>
      <div className="form">
        <h1>Add Contact</h1>
        <input type="text"  name='name' placeholder='name' onChange={handleChange}/>
        <input type="text"  name='mail' placeholder='email' onChange={handleChange}/>
        <input type="text"  name='phone' placeholder='number' onChange={handleChange}/>
        <input type="text"  name='profile' placeholder='profile pic' onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  )
}

export default Add
