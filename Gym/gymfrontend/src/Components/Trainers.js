import React, { useState, useEffect } from 'react';

function Trainers() {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/trainer/getall')
            .then(response => response.json())
            .then(data => setTrainers(data))
            .catch(error => console.error('Error fetching trainers:', error));
    }, []);

    return (
        <div className='trainerlist' >
        <div className='trainer-container'>
            <br/>
            <h2 className="text-center">Trainers List</h2>
            <br/>
            <table className="table table-striped">
                <thead className='table-dark'>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Experience</th>
                    </tr>
                </thead>
                <tbody>
                    {trainers.map(trainer => (
                        <tr key={trainer.id}>
                            <td>{trainer.id}</td>
                            <td>{trainer.name}</td>
                            <td>{trainer.experience}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default Trainers;
