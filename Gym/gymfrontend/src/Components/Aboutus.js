import React from 'react';

function Aboutus(props) {
    return (
        <div className="about-us">
            <div className="jumbotron jumbotron-fluid text-white text-center" style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2017/09/27/18/49/sport-2792995_1280.jpg')`, backgroundSize: 'cover',height:'100vh'}}>
                <div className="container">
                    <h1 className="display-4">About Us</h1>
                    <p className="lead">Empowering lives through fitness, one workout at a time.</p>
                </div>
            </div>
            <div className="info container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Our Mission</h2>
                        <p className="text-justify">We are dedicated to helping individuals achieve their fitness goals by providing personalized training programs, expert guidance, and a supportive community environment.</p>
                    </div>
                    <div className="col-md-6">
                        <h2>Our Vision</h2>
                        <p className="text-justify">We envision a healthier and happier society where fitness is not just a trend but a way of life. Through our services, we aim to inspire and empower individuals to lead active and fulfilling lives.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Aboutus;
