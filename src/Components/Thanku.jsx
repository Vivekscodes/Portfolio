import React from 'react';
import './Thanku.css';

const ThankYou = () => {
    return (
        <div className="thankyou-container">
            <div className="conten">
                <div className="success-icon">✓</div>
                <h1>Thank You!</h1>
                <p>Your message has been received.</p>
                <p className="sub-text">I'll get back to you soon.</p>
                <div className="happy-icon">😊</div>
            </div>
        </div>
    );
};

export default ThankYou