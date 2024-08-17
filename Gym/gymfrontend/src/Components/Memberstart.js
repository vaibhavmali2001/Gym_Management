import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Membernavbar from './Membernavbar';

function Memberstart(props) {
    return (
        <div className='start'>
            <Membernavbar/>
            <div className="jumbotron text-center" style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2016/12/04/22/15/fitness-1882721_1280.jpg')`, backgroundSize: 'cover' }}>
                <h1 className='title'>Welcome to FitnessClub</h1>
                <p>Your one-stop solution for managing your gym effectively!</p>
            </div>
            <div className='start1'>
                <div className="container cardss ">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-3 ">
                                <img src="https://cdn.pixabay.com/photo/2013/02/26/02/14/exercise-86200_1280.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-dark">
                                    <h5 className="card-title">Personal Training</h5>
                                    <p className="card-text">Tailored workouts designed to help you achieve your fitness goals.</p>
                                    <Link to={'/trainers'} className="btn btn-primary">Trainers List</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-3">
                                <img src="https://cdn.pixabay.com/photo/2019/03/12/12/47/people-4050698_1280.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-dark">
                                    <h5 className="card-title">All Members</h5>
                                    <p className="card-text">Experience personalized fitness plans tailored to your goals and needs for optimal results.</p>
                                    <Link to={'/allmembers'} className="btn btn-primary">See Members</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-3">
                                <img src="https://cdn.pixabay.com/photo/2014/11/26/11/45/gym-546138_1280.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-dark">
                                    <h5 className="card-title">Subscription Plans</h5>
                                    <p className="card-text">Elevate your fitness journey with tailored subscription plans designed for your success.</p>
                                    <Link to={'/plans'} className="btn btn-primary">View Plans</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-dark text-white text-center py-2">
                <p>&copy; 2024 FitnessClub. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Memberstart;