import React, {useState} from "react";
import axios from "axios";
import "./Register.css"

export default function Register() {

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });



  const handleClick = async (e) => {



    console.log("data is", data);

   if (!data.password || !data.email) return;

    const response = await axios.post("/users/register", data);
    console.log("response is", response);

    setData({
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        password: "",
      })
     
  };

  return (
    <form action="register">
      <div className="input-container">
        <input type="text" value={data.firstName} 
        onChange={(e) => setData({ ...data, firstName: e.target.value })}/>
        <label >First Name</label>
      </div>

      <div className="input-container">
        <input type="text" value={data.lastName} 
        onChange={(e) => setData({ ...data, lastName: e.target.value })}/>
        <label >Last Name</label>
      </div>

      <div className="input-container-date">
        <input type="date" value={data.dateOfBirth} 
        onChange={(e) => setData({ ...data, dateOfBirth: e.target.value })}/>
        <label >Date of birth</label>
      </div>

     {/*  <p>Please choose:</p>

      <div>
        <input type="radio" id="Mankobita" name="drone" value="Man" d />
        <label for="Man">Man</label>
      </div>

      <div>
        <input type="radio" id="Woman" name="drone" value="Woman" />
        <label for="Woman">Woman</label>
      </div>

      <div>
        <input type="radio" id="Transgender" name="drone" value="Transgender" />
        <label for="Transgender">Transgender</label>
      </div>
 
      <div>
        <input
          type="radio"
          id="Prefer not to respond"
          name="drone"
          value="Prefer not to respond"
        />
        <label for="Prefer not to respond">Prefer not to respond</label>
      </div>*/}

      <div className="input-container">
        <input type="email" value={data.email} 
        onChange={(e) => setData({ ...data, email: e.target.value })} />
        <label >Email</label>
      </div>

      <div className="input-container">
        <input type="Password" value={data.password} 
        onChange={(e) => setData({ ...data, password: e.target.value })}/>
        <label >Password</label>
      </div>
      
      <button type="submit" onClick={handleClick}>Register</button>
    </form>
  );
}
