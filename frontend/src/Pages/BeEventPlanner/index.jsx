import React, { useState } from 'react';
import './styles.css';

const EventPlannerSignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    profilePicture: '',
    companyName: '',
    jobTitle: '',
    yearsOfExperience: '',
    specialties: '',
    servicesOffered: '',
    certifications: ''
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/eventPlanners', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (response.ok) {
        console.log('Signup successful:', data);
        window.location.href = 'http://localhost:3000/EventPlanner/event-planner';
      } else {
        console.error('Error signing up:', data.error);
        setError(data.error);
      }
    } catch (error) {
      console.error('Error signing up:', error.message);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className='event-planner-signup-container'>
      <form onSubmit={handleSubmit} className="planner-signup-form">
        <h2>Become An Event Planner</h2>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
        <input type="text" name="profilePicture" value={formData.profilePicture} onChange={handleChange} placeholder="Profile Picture URL" />
        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" required />
        <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Job Title" required />
        <input type="number" name="yearsOfExperience" value={formData.yearsOfExperience} onChange={handleChange} placeholder="Years of Experience" required />
        <input type="text" name="specialties" value={formData.specialties} onChange={handleChange} placeholder="Event Planning Specialties" />
        <input type="text" name="servicesOffered" value={formData.servicesOffered} onChange={handleChange} placeholder="Types of Services Offered" />
        <input type="text" name="certifications" value={formData.certifications} onChange={handleChange} placeholder="Certifications or Training" />
        {error && <div className="error-message">{error}</div>}
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default EventPlannerSignUp;
