import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple hardcoded admin login (replace with Firebase Auth later)
    if(username === 'admin' && password === '1234'){
      onLogin(true);
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '50px auto', color: '#D4AF37' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Admin Login</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} 
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #D4AF37', backgroundColor: '#000', color: '#D4AF37' }} />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} 
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #D4AF37', backgroundColor: '#000', color: '#D4AF37' }} />
        <button type="submit" style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#D4AF37', color: '#000', fontWeight: 'bold' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
