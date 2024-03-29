// import './Register.css';
// import React, { useState } from 'react';

// function RegisterForm() {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [college, setCollege] = useState('');
//   const [universityId, setUniversityId] = useState('');
//   const [province, setProvince] = useState('');

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', {
//       name,
//       password,
//       college,
//       universityId,
//       province,
//     });
//   };

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleCollegeChange = (e) => {
//     setCollege(e.target.value);
//   };

//   const handleUniversityIdChange = (e) => {
//     setUniversityId(e.target.value);
//   };

//   const handleProvinceChange = (e) => {
//     setProvince(e.target.value);
//   };

//   const handleSubmit = ()=>{
//     alert("Student added successfully!")
//     setCollege("")
//     setName('')
//     setPassword("")
//     setUniversityId("")
//     setProvince("")
//   }
//   return (
//     <div className="register-container">
//       <form className="register-form" onSubmit={handleFormSubmit}>
//         <h2>Register</h2>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             placeholder="Enter your name"
//             value={name}
//             onChange={handleNameChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="college">College</label>
//           <input
//             type="text"
//             id="college"
//             placeholder="Enter your college"
//             value={college}
//             onChange={handleCollegeChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="universityId">University ID</label>
//           <input
//             type="text"
//             id="universityId"
//             placeholder="Enter your university ID"
//             value={universityId}
//             onChange={handleUniversityIdChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="province">Province</label>
//           <select
//             id="province"
//             value={province}
//             onChange={handleProvinceChange}
//             required
//           >
//             <option value="">Select your province</option>
//             <option value="Aleppo">Aleppo</option>
//             <option value="Damascus">Damascus</option>
//             <option value="Homs">Homs</option>
//             <option value="Homs">Hama</option>
//             <option value="Homs">Tartus</option>
//             <option value="Homs">Latakia</option>
//             <option value="Homs">Deir ez-Zor</option>
//             <option value="Homs">Raqqa</option>
//             <option value="Homs">Idlib</option>
//             <option value="Homs">AL-Suwaydaa</option>
//             <option value="Homs">Quneitra</option>
//             <option value="Homs">Al-Hasakah</option>
//             <option value="Homs">Rif Dimashq</option>
//             <option value="Homs">Daraa</option>
//             {/* Add more provinces as needed */}
//           </select>
//         </div>
//         <button type="button" onClick={handleSubmit}>Register</button>
//       </form>
//     </div>
//   );
// }

// export default RegisterForm;
import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

function RegisterForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [college, setCollege] = useState('');
  const [universityId, setUniversityId] = useState('');
  const [province, setProvince] = useState('');
  const [email, setEmail] = useState('');


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.1.111:4000/api/insert-apply', {
        name,
        password,
        faculty: college,
        faculty_id: universityId,
        state: province,
        email: email
      });
      // console.log('Registration request submitted:', response.data);
      // Reset form fields after successful submission
      setCollege('');
      setName('');
      setEmail('')
      setPassword('');
      setUniversityId('');
      setProvince('');
      // Show a success message to the user
      alert('Student added successfully!');
    } catch (error) {
      console.log('Error submitting registration request:', error);
      // Show an error message to the user
      alert('Error submitting registration request. Please try again.');
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
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
            <option value="Hama">Hama</option>
            <option value="Homs">Tartus</option>
            <option value="Homs">Latakia</option>
            <option value="Homs">Deir ez-Zor</option>
            <option value="Homs">Raqqa</option>
            <option value="Homs">Idlib</option>
            <option value="Homs">AL-Suwaydaa</option>
            <option value="Homs">Quneitra</option>
            <option value="Homs">Al-Hasakah</option>
            <option value="Homs">Rif Dimashq</option>
            <option value="Homs">Daraa</option>
            {/* Add more provinces as needed */}
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;

