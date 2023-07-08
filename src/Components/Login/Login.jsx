import React from 'react';
import './Login.css';

function Login() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const handleSubmit = ()=> {
    alert(email+"  "+password)
    localStorage.setItem("isLogged", true)
    window.location.reload()
    setEmail("")
    setPassword("")
  }
  return (
    <div className="login-container">
      <form className="login-form" action='/login'>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
        </div>
        <button type="button" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}

export default Login;

