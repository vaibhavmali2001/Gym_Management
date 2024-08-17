import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
    const { id } = useParams(); 
    const navigate = useNavigate();
    
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [contact, setContact] = useState(0);
    const [email, setEmail] = useState("");
    const [profilePic, setProfilePic] = useState(null); 
    const [adharNumber, setAdharNumber] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/member/${id}`)
            .then(res => {
                const { name, age, contact, email,profilePic, adharNumber } = res.data;
                setName(name);
                setAge(age);
                setContact(contact);
                setEmail(email);
                setProfilePic(profilePic);
                setAdharNumber(adharNumber);
            })
            .catch(err => {
                console.log(err);
                setError("Error fetching student details.");
            });
    }, [id]);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validateMobile = (contact) => {
        const regex = /^\d{10}$/;
        return regex.test(contact);
    };

    const update = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Invalid email address");
            return;
        }

        if (!validateMobile(contact)) {
            setError("Invalid mobile number");
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
            

            await axios.put(`http://localhost:8080/member/edit/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            alert("Updated Successfully");
            navigate("/memberhome");
        } catch (error) {
            console.error('Error updating student:', error);
            setError('Error updating member. Please try again later.');
        }
    };

    return (
        <div className="signup template d-flex justify-content-center align-items-center vh-100">
            <div className="form_container p-5 rounded bg-transparent">
                <form>
                    <h3 className="text-center">Edit Profile</h3>
                    <div className="mb-1">
                        <label htmlFor="fname">Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="age">Age</label>
                        <input type="number" placeholder="Enter Age" className="form-control"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="mobile">Contact No.</label>
                        <input type="tel" placeholder="Enter Mobile No." className="form-control"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="profilepic">Profile Pic.</label>
                        <input type="file" accept="image/*" className="form-control"
                            onChange={(e) => setProfilePic(e.target.files[0])}
                        />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="adharnumber">AdharNumber</label>
                        <input type="number" placeholder="Enter Adhar Number" className="form-control"
                            value={adharNumber}
                            onChange={(e) => setAdharNumber(e.target.value)}
                        />
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary" onClick={update}>Update</button>
                    </div>
                    {error && <p className="text-danger mt-2">{error}</p>}
                    <p className="text-end mt-2">
                        <a href='/memberhome'>Home</a>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Edit;
