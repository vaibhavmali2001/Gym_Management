import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Registration(props) {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [contact, setContact] = useState(0);
    const [email, setEmail] = useState("");
    const [profilePic, setProfilePic] = useState(null); // Change to null
    const [adharNumber, setAdharNumber] = useState(0);
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validateMobile = (contact) => {
        const regex = /^\d{10}$/;
        return regex.test(contact);
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProfilePic(file);
    };
const save = async (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
        setErrorMessage("Invalid email address");
        return;
    }

    if (!validateMobile(contact)) {
        setErrorMessage("Invalid mobile number");
        return;
    }

    if (!validatePassword(password)) {
        setErrorMessage("Invalid password. Password must contain at least 8 characters including at least one uppercase letter, one lowercase letter, one number, and one special character.");
        return;
    }

    try {
        const formData = new FormData();
        formData.append("id", id);
        formData.append("name", name);
        formData.append("age", age);
        formData.append("contact", contact);
        formData.append("email", email);
        formData.append("profilePic", profilePic); // Append the file directly
        formData.append("adharNumber", adharNumber);
        formData.append("password", password);

        await axios.post("http://localhost:8080/member/add", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        alert("Member Registration Successfully...");
        setId("");
        setName("");
        setAge(0);
        setContact("");
        setEmail("");
        setProfilePic(null);
        setAdharNumber(0);
        setPassword("");
        setErrorMessage("");
    } catch (err) {
        console.error("Error:", err); // Log the error
        alert("Member Registration Failed!!!");
    }
};

    return (
        <div className="signup template d-flex justify-content-center align-items-center vh-100">
        <div className="form_container p-5 rounded bg-transparent">
         <form>
             <h3 className="text-center">Sign Up</h3>
             <div className="mb-1">
                 <label htmlFor="fname">Name</label>
                 <input type="text" placeholder="Enter Name" className="form-control"
                 value={name}
                 onChange={(e)=>setName(e.target.value)}
                 />
             </div>
             <div className="mb-1">
                 <label htmlFor="age">Age</label>
                 <input type="number" placeholder="Enter Age" className="form-control"
                 value={age}
                 onChange={(e)=>setAge(e.target.value)}
                 />
             </div>
             <div className="mb-1">
                 <label htmlFor="mobile">Contact No.</label>
                 <input type="tel" placeholder="Enter Mobile No." className="form-control"
                 value={contact}
                 onChange={(e)=>setContact(e.target.value)}
                 />
             </div>
             <div className="mb-1">
                 <label htmlFor="email">Email</label>
                 <input type="email" placeholder="Enter Email" className="form-control"
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                 />
             </div>
             <div className="mb-1">
                        <label htmlFor="profilepic">Profile Pic.</label>
                        <input type="file" className="form-control"
                            onChange={handleFileChange} // Handle file change
                        />
                    </div>
             <div className="mb-1">
                 <label htmlFor="adharnumber">AdharNumber</label>
                 <input type="number" placeholder="Enter Adhar Number" className="form-control"
                  value={adharNumber}
                  onChange={(e)=>setAdharNumber(e.target.value)}
                 />
             </div>
             <div className="mb-1">
                 <label htmlFor="password">Password</label>
                 <input type="password" placeholder="Enter Password" className="form-control"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                 />
             </div>
             <div className="d-grid">
                 <button className="btn btn-primary" onClick={save}>Sign Up</button>
             </div>
             <p className="text-end mt-2">
                 <a href='/'>Home</a>Already Registered <Link to={"/login"}className="ms-2">SignIn</Link>
             </p>
         </form>
         </div>
     </div>
    );
}

export default Registration;