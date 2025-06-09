import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css';
import ThankYou from './Thanku';
const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleValidation = (e) => {
        if (!formData.name || !formData.email || !formData.message) {

            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        if (!handleValidation(e)) {
            return;
        }
        e.preventDefault();

        // Replace these with your EmailJS credentials
        emailjs.send(
            'service_z0wxpk1',
            'template_oxdd5pi',
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: 'your-email@example.com',
            },
            '6eFagDrGVGSEwKeTf'
        )
            .then((response) => {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                alert('Failed to send message. Please try again.');
            });
    };
    if (isSubmitted) {
        return <ThankYou />;
    }

    return (
        <div className='ContactMe'>
            <h2 style={{ color: 'white', fontSize: '50px', fontFamily: 'arial' }}>Get in touch</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                    />
                </div>
                <button type="submit" onClick={handleSubmit}>Send Message</button>
            </form>
        </div>
    );
};

export default ContactMe;