import React, { useState } from 'react';

const servicesList = [
  "Acrylic Extension",
  "Gel Extension",
  "Temporary Extension",
  "Gel Polish",
  "Feet Gel Polish",
  "Overlays",
  "Extension Removal",
  "Nail Art (per finger)",
];

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    paymentMethod: 'Cash',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking submitted! Admin will approve your appointment.`);
    // Future: Push to Firebase + WhatsApp/SMS notification
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', color: '#D4AF37' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Book an Appointment</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #D4AF37', backgroundColor: '#000', color: '#D4AF37' }} />
        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #D4AF37', backgroundColor: '#000', color: '#D4AF37' }} />
        <select name="service" value={formData.service} onChange={handleChange} required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #D4AF37', backgroundColor: '#000', color: '#D4AF37' }}>
          <option value="">Select Service</option>
          {servicesList.map((s, i) => (
            <option key={i} value={s}>{s}</option>
          ))}
        </select>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #D4AF37', backgroundColor: '#000', color: '#D4AF37' }} />
        <input type="time" name="time" value={formData.time} onChange={handleChange} required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #D4AF37', backgroundColor: '#000', color: '#D4AF37' }} />
        <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #D4AF37', backgroundColor: '#000', color: '#D4AF37' }}>
          <option value="Cash">Cash</option>
          <option value="UPI">UPI</option>
        </select>
        <button type="submit" style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#D4AF37', color: '#000', fontWeight: 'bold' }}>Submit</button>
      </form>
    </div>
  );
};

export default BookAppointment;
