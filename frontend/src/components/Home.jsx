import React, { useState } from 'react';
import axios from 'axios';
import '../Home.css';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
  });

  const handleChange = (e) => {
    if (e.target.name === 'resume') {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('resume', formData.resume);

    try {
      await axios.post('http://localhost:5000/api/jobs', data);
      alert('Application submitted successfully!');
      setFormData({ name: '', email: '', resume: null });
    } catch (error) {
      console.error(error);
      alert('Error submitting application.');
    }
  };

  return (
    <div className="home-container">
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
        <input type="file" name="resume" accept="application/pdf" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
