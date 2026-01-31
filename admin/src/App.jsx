import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AdminServices from './pages/Services';
import AdminBookings from './pages/Bookings';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bookings, setBookings] = useState([]);

  if(!isLoggedIn){
    return <Login onLogin={setIsLoggedIn} />;
  }

  return (
    <Router>
      <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#D4AF37' }}>
        {/* Admin Navigation */}
        <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', borderBottom: '1px solid #D4AF37' }}>
          <Link to="/dashboard" style={{ color: '#D4AF37', textDecoration: 'none' }}>Dashboard</Link>
          <Link to="/services" style={{ color: '#D4AF37', textDecoration: 'none' }}>Services</Link>
          <Link to="/bookings" style={{ color: '#D4AF37', textDecoration: 'none' }}>Bookings</Link>
          <button onClick={()=>setIsLoggedIn(false)} style={{ backgroundColor:'#D4AF37', color:'#000', border:'none', borderRadius:'5px', padding:'5px 10px' }}>Logout</button>
        </nav>

        <Routes>
          <Route path="/dashboard" element={<Dashboard bookings={bookings} />} />
          <Route path="/services" element={<AdminServices />} />
          <Route path="/bookings" element={<AdminBookings />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
