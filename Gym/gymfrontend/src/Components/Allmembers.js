import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; 


function Allmembers(props) {
    const[data,setData]=useState([]);
    const[searchResult,setSearchResult]=useState("");
    const[error,setError]=useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:8080/member/getall")
        .then(res=>setData(res.data))
        .catch(err=>console.log(err));
    },[])

    async function deleteById(id) {
        try {
            const confirmed = window.confirm("Are you sure you want to delete this member?");
            if (confirmed) {
                const response = await axios.delete(`http://localhost:8080/member/delete/${id}`);
                if (response.data === "Member Deleted Successfully") {
                    setSearchResult(response.data);
                    setError(null);
                    setData(data.filter(user => user.id !== id));
                } else {
                    setError('Error deleting member.');
                }
            }
        } catch (error) {
            console.error('Error deleting member:', error);
            setError('Error deleting member. Please try again later.');
        }
    }
    
     function editById(id){
        navigate(`/edit/${id}`);
    }
    return (
        <div className="container">
        <div className="mt-3">
            <h3>All Members Data</h3>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>profilePic</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>AdharNumber</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user,index)=>{
                            return<tr key={index}>
                                <td>{user.id}</td>
                                <td><img src={`data:image/jpeg;base64,${user.profilePic}`}  style={{ maxWidth: '60px' }} /></td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.contact}</td>
                                <td>{user.email}</td>
                                <td>{user.adharNumber}</td>
                                <td><button type="button" class="btn btn-danger" onClick={() => deleteById(user.id)}>Delete</button></td>
                                <td><button type="button" class="btn btn-warning" onClick={() => editById(user.id)}>Edit</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
        <p className="text-end mt-2">
 Back to <Link to={"/memberhome"} className="ms-2">Home</Link>
</p>
    </div>
    );
}

export default Allmembers;