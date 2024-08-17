import React, { useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import axios from "axios";

function Login(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();

    async function login(event)
    {
        event.preventDefault();
    
    try
    {
        await axios.post("http://localhost:8080/member/login",
        {
            email:email,
            password:password
        }).then((res)=>
        {
            console.log(res.data);
            if(res.data==="Login Failed")
            {
                alert("Password Wrong!!!");
            }
            else if(res.data==="Login Successs")
            {
                alert("Login Success..")
                navigate('/memberhome');
            }
            else{
                alert("incorrect pass or mail!!!");
            }
        });
    }

    catch(err)
    {
        alert("Member Login Failed!!!");
    }
    }
    return(
        <div className="login template d-flex justify-content-center align-items-center vh-100 ">
           <div className="form_container p-5 rounded">
            <form>
                <h3 className="text-center">Sign In</h3>
                <div className="mb-2">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Enter Email" className="form-control"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" className="form-control"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary" onClick={login}>Sign In</button>
                </div>
                <p className="text-end mt-2">
                    <a href="/">Home</a><Link to={"/registration"}className="ms-2">SignUp</Link>
                </p>
            </form>
            </div>
        </div>
    );
}
export default Login;