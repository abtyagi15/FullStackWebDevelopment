import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    country : "",
    streetAddresss : ""

  });
  function changeHandler(event) {
    setFormData((prevFormData)=>{
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      }
    });
    console.log(formData);
  }
  return (
    <div className="App">
      <form>
        <label htmlFor="firstName">First name</label>
        <input 
          type="text" 
          name="firstName"
          placeholder="Pranay"
          onChange={changeHandler}
          value={formData.firstName}
          />
          <br/>
        <label htmlFor="lastName">Last name</label>
        <input 
          type="text" 
          name="lastName"
          placeholder="Gupta "
          onChange={changeHandler}
          value={formData.firstName}
          />
          <br/>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="pgupta@duck.com"
          />  
          <br/>
          <br/>
          <label htmlFor="country">Country</label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={changeHandler}
            
          >
            <option value="india">India</option>
            <option value="china">China</option>
            <option value="australia">Australia</option>
            <option value="bangladesh">Bangladesh</option>
          </select>
          <label htmlFor="streetAddress">Street Address</label>
          <input
            type=""
            name="streetAddresss"
            value={formData.streetAddress}
          />

      </form>
    </div>
  );
}

export default App;
