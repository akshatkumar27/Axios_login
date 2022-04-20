import './App.css';
import React from 'react'
import { useState } from "react";
import axios from "axios";

function App() {
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  console.log({email,password});
  const headers = {
    
  }

const handleSubmit = (e) => {
  e.preventDefault();
  
  // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  axios.post("https://reqres.in/api/login",{
        email: email,
        password: password
      })
      .then(result=>{
        console.log(result)
      })
      .catch(error=>{
        console.log(error)
      })
    };
  return (
    <>
     <div className="container">
       
  
       <form >
         <h1>Login Form</h1>
         <hr/>
         <div className="ui divider"></div>
         <div className="ui form">
           <div className="field">
             <label>Username</label><br></br>
             <input
               type="text"
               name="username"
               placeholder="Username"
               value={username}
               onChange={e => setUsername(e.target.value)}
             />
           </div>
           <div className="field">
             <label>Email</label><br />
             <input
               type="text"
               name="email"
               placeholder="Email"
               value={email}
               onChange={e => setEmail(e.target.value)}

             />
           </div>
           <div className="field">
             <label>Password</label><br />
             <input
               type="password"
               name="password"
               placeholder="Password"
                value={password}
               onChange={e => setPassword(e.target.value)}

             />
           </div>
           <button className="btn" onClick={handleSubmit}>Submit</button>
         </div>
       </form>
     </div>
    </>
  );
}

export default App;
