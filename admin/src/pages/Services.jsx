import React, { useState } from 'react';

const AdminServices = () => {
  const [services, setServices] = useState([
    { name: "Acrylic Extension", price: 1399 },
    { name: "Gel Extension", price: 1099 },
    { name: "Temporary Extension", price: 799 },
    { name: "Gel Polish", price: 500 },
    { name: "Feet Gel Polish", price: 300 },
    { name: "Overlays", price: 600 },
    { name: "Extension Removal", price: 300 },
    { name: "Nail Art (per finger)", price: 50 },
  ]);

  const [newService, setNewService] = useState({ name: '', price: '' });

  const addService = () => {
    if(newService.name && newService.price){
      setServices([...services, { ...newService, price: parseInt(newService.price) }]);
      setNewService({ name: '', price: '' });
    }
  };

  const deleteService = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const updatePrice = (index, price) => {
    const updated = [...services];
    updated[index].price = parseInt(price);
    setServices(updated);
  };

  return (
    <div style={{ padding: '20px', color: '#D4AF37', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Manage Services</h1>

      {/* Add new service */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input type="text" placeholder="Service Name" value={newService.name} onChange={(e)=>setNewService({...newService, name: e.target.value})}
          style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #D4AF37', backgroundColor: '#000', color: '#D4AF37' }} />
        <input type="number" placeholder="Price" value={newService.price} onChange={(e)=>setNewService({...newService, price: e.target.value})}
          style={{ width: '100px', padding: '10px', borderRadius: '5px', border: '1px solid #D4AF37', backgroundColor: '#000', color: '#D4AF37' }} />
        <button onClick={addService} style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#D4AF37', color: '#000' }}>Add</button>
      </div>

      {/* Existing services */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {services.map((s, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', border: '1px solid #D4AF37', borderRadius: '8px', backgroundColor: '#000' }}>
            <span>{s.name}</span>
            <input type="number" value={s.price} onChange={(e)=>updatePrice(i, e.target.value)}
              style={{ width: '80px', padding: '5px', borderRadius: '5px', border: '1px solid #D4AF37', backgroundColor: '#000', color: '#D4AF37' }} />
            <button onClick={()=>deleteService(i)} style={{ padding: '5px 10px', borderRadius: '5px', border: 'none', backgroundColor: '#D4AF37', color: '#000' }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminServices;
