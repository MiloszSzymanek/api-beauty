import React, {useState} from "react";
import axios from "axios";
import "./Login.css"

export default function Login(props) {

    const [loginUser, setLoginUser] = useState({});
    const [data, setData] = useState({
        email: "",
        password: "",
      });

      

      const handleClick = async e => {

        e.preventDefault();

        console.log("data is", data)
    
        if (!data.password) return
    
        const response = await axios.post("users/login", data);
    
        console.log("response is", response);
        
    
        if (response.data.success) {
            setLoginUser({...response.data.user});
            props.closeModal(false)
          } 
    

      };


      



    return (
<div className="loginContainer">
        <form action="login">
      <div className="input-container">
        <input type="text" value={data.email} 
        onChange={(e) => setData({ ...data, email: e.target.value })}/>
        <label >Email</label>
      </div>

      <div className="input-container">
        <input type="password" value={data.password} 
        onChange={(e) => setData({ ...data, password: e.target.value })}/>
        <label >Password</label>
      </div>

      <button className="loginButton" type="submit" onClick={handleClick}>Log in</button>
      </form>
      </div>
    )


}