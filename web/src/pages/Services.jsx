import React from 'react';

const servicesList = [
  { name: "Acrylic Extension", price: 1399 },
  { name: "Gel Extension", price: 1099 },
  { name: "Temporary Extension", price: 799 },
  { name: "Gel Polish", price: 500 },
  { name: "Feet Gel Polish", price: 300 },
  { name: "Overlays", price: 600 },
  { name: "Extension Removal", price: 300 },
  { name: "Nail Art (per finger)", price: 50 },
];

const Services = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', color: '#D4AF37' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Our Services</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {servicesList.map((service, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', border: '1px solid #D4AF37', borderRadius: '8px', backgroundColor: '#000' }}>
            <span>{service.name}</span>
            <span>₹{service.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
