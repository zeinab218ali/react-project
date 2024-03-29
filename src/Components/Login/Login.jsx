// import React from 'react';
// import './Login.css';

// function Login() {

//   const [email, setEmail] = React.useState('')
//   const [password, setPassword] = React.useState('')
//   const handleSubmit = ()=> {
//     alert(email+"  "+password)
//     localStorage.setItem("isLogged", true)
//     window.location.reload()
//     setEmail("")
//     setPassword("")
//   }
//   return (
//     <div className="login-container">
//       <form className="login-form" action='/login'>
//         <h2>Login</h2>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
//         </div>
//         <button type="button" onClick={handleSubmit}>Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
import React from 'react';
import './Login.css';
import axios from 'axios';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://192.168.1.15:8000/api/auth/login?email='+email+'&password='+password);
      // const response = {
      //  data: { email: 'admin@admin.com'}, status: 200
      // }
      console.log('Login response:', response.data);
      // Check if login is successful (you may need to modify this condition based on your backend response)
      // if (response.data.success && response.data.isAdmin) {
      //   if (response.status === 200 && response.data.isAdmin) {
      // // Set admin login status in local storage
      //   localStorage.setItem('isAdmin', true);
      //   localStorage.setItem('userData', response.data)
      //   // Redirect to admin dashboard (replace "/admin-dashboard" with the actual admin dashboard URL)
      //   window.location.href = '/admin-dashboard';
      // } else {
      //   // Display an error message or take appropriate action for non-admin login
      //   alert('Invalid credentials. Please try again.');
      // }

      if(response.status === 200){
        // localStorage.setItem('isAdmin', response.isAdmin);
        // localStorage.setItem('userData', response.data)
        const adminEmail = localStorage.getItem("adminEmail")
        console.log(adminEmail , email, adminEmail === email)
        if(email === adminEmail){
          
          localStorage.setItem('isAdmin', true);
          localStorage.setItem('isLogged', true)
          localStorage.setItem('userData', response.data);
          window.location.href = '/adminDashboard';
        }
        else{
          localStorage.setItem('isAdmin', false);
          localStorage.setItem('isLogged', true)
          localStorage.setItem('userData', response.data)
          window.location.href = '/dashboard';
        }
      }
    } catch (error) {
      console.log('Error logging in:', error);
      // Display an error message or take appropriate action for login failure
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;


