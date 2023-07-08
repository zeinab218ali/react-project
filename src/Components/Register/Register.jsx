import './Register.css';
import React, { useState } from 'react';

function RegisterForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [college, setCollege] = useState('');
  const [universityId, setUniversityId] = useState('');
  const [province, setProvince] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', {
      name,
      password,
      college,
      universityId,
      province,
    });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCollegeChange = (e) => {
    setCollege(e.target.value);
  };

  const handleUniversityIdChange = (e) => {
    setUniversityId(e.target.value);
  };

  const handleProvinceChange = (e) => {
    setProvince(e.target.value);
  };

  const handleSubmit = ()=>{
    alert("Student added successfully!")
    setCollege("")
    setName('')
    setPassword("")
    setUniversityId("")
    setProvince("")
  }
  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleFormSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="college">College</label>
          <input
            type="text"
            id="college"
            placeholder="Enter your college"
            value={college}
            onChange={handleCollegeChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="universityId">University ID</label>
          <input
            type="text"
            id="universityId"
            placeholder="Enter your university ID"
            value={universityId}
            onChange={handleUniversityIdChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="province">Province</label>
          <select
            id="province"
            value={province}
            onChange={handleProvinceChange}
            required
          >
            <option value="">Select your province</option>
            <option value="Aleppo">Aleppo</option>
            <option value="Damascus">Damascus</option>
            <option value="Homs">Homs</option>
            {/* Add more provinces as needed */}
          </select>
        </div>
        <button type="button" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;

