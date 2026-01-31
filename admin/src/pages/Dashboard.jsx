import React from 'react';

const Dashboard = ({ bookings }) => {
  const totalBookings = bookings.length;
  const todayBookings = bookings.filter(b => b.date === new Date().toISOString().slice(0,10)).length;

  return (
    <div style={{ padding: '20px', color: '#D4AF37' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Admin Dashboard</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <div style={{ border: '1px solid #D4AF37', padding: '15px', borderRadius: '8px', backgroundColor: '#000' }}>
          <h2>Today</h2>
          <p>{todayBookings} Bookings</p>
        </div>
        <div style={{ border: '1px solid #D4AF37', padding: '15px', borderRadius: '8px', backgroundColor: '#000' }}>
          <h2>Total</h2>
          <p>{totalBookings} Bookings</p>
        </div>
      </div>
      <h2>Recent Bookings</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '600px', margin: '0 auto' }}>
        {bookings.slice(-5).map((b, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', border: '1px solid #D4AF37', borderRadius: '8px', backgroundColor: '#000' }}>
            <span>{b.name} ({b.service})</span>
            <span>{b.date} {b.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
