import React, { useState } from "react";

function App() {
 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar: ""

  });
  function changeHandler(event) {
    const {type,name,checked,value} = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type==="checkbox" ? checked : value
      };
    });
  }
  function submitHandler(event){
    event.preventDefault();
    console.log("Finaaly printing the entire form data ...............");
    console.log(formData);
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          onChange={changeHandler}
          value={formData.firstName}
        />
        <br />
        <br />

        <input
          type="text"
          name="lastName"
          placeholder="last name"
          onChange={changeHandler}
          value={formData.lastName}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
          value={formData.email}
        />
        <br />
        <br />
        <textarea 
          type="text"
          placeholder="enter your comment here"
          name="comments"
          onChange={changeHandler}
          value={formData.comment}
        />
        <br/><br/>
        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">Am I isVisible</label>
        <br/>
        <br/>
        <input 
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="Online-Mode"
          id="Online-Mode"
          checked={formData.mode === "Online-Mode"}
        />
        <label
          htmlFor="Online-Mode"
        >Online Mode</label>
        <input 
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="Offline-Mode"
          id="Offline-Mode"
          checked={formData.mode === "Offline-Mode"}          
        />
        <label
          htmlFor="Offline-Mode"
        >Offline Mode</label>

        <br/>
        <br/>
        <label htmlFor="favCar">Tell me your favourite car : </label>
        <select
          name="favCar"
          id="favCar"
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="scorpio">Scorpio</option>
          <option value="fortuner">Fortuner</option>
          <option value="thar">Thar</option>
          <option value="legender">Legender</option>
          <option value="defender">Defender</option>
        </select>
        <br/>
        <br/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
