import React from 'react';

const Plans = () => {
    function planMessage(){
        alert("Subscription Successfully");
    }
    const plans = [
        { name: 'Monthly', price: 'Rs.700', description: 'Ideal for those who prefer flexibility with their fitness commitment.' },
        { name: '3-Month', price: 'Rs.1800', description: 'Great for those looking to commit to a short-term fitness goal.' },
        { name: 'Half-Yearly', price: 'Rs.3600', description: 'Recommended for those seeking a mid-range commitment with cost savings.' },
        { name: 'Annual', price: 'Rs.7200', description: 'Best value for long-term commitment with significant cost savings.' }
    ];

    return (
        <div className='plan'>
        <div className="container">
            <h2 className="cardheading mt-5 mb-4">Subscription Plans</h2>
            <div className="row">
                {plans.map((plan, index) => (
                    <div key={index} className="cardadjust col-md-3 mb-4">
                        <div className="card bg-transparent border-white">
                            <div className="card-header bg-primary text-white">
                                <h3 className="card-title">{plan.name}</h3>
                            </div>
                            <div className="card-body text-white">
                                <p className="card-text"><strong>Price:</strong> {plan.price}</p>
                                <p className="card-text"><strong>Description:</strong> {plan.description}</p>
                                <button className="btn btn-primary" onClick={planMessage}>Buy plan</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Plans;
