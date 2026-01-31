import React, { useState } from 'react';

const initialBookings = [
  { name: "Customer1", phone: "1234567890", service: "Gel Polish", date: "2026-02-01", time: "12:00", paymentMethod: "Cash", status: "Pending" },
  { name: "Customer2", phone: "9876543210", service: "Acrylic Extension", date: "2026-02-02", time: "14:00", paymentMethod: "UPI", status: "Pending" },
];

const AdminBookings = () => {
  const [bookings, setBookings] = useState(initialBookings);

  const approveBooking = (index) => {
    const updated = [...bookings];
    updated[index].status = "Approved";
    setBookings(updated);
    alert("Booking approved! WhatsApp/SMS notification can be sent here.");
  };

  const cancelBooking = (index) => {
    const updated = [...bookings];
    updated[index].status = "Cancelled";
    setBookings(updated);
    alert("Booking cancelled!");
  };

  return (
    <div style={{ padding: '20px', color: '#D4AF37', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Manage Bookings</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {bookings.map((b, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', border: '1px solid #D4AF37', borderRadius: '8px', backgroundColor: '#000' }}>
            <div>
              <p><strong>{b.name}</strong> ({b.service})</p>
              <p>{b.date} {b.time} | {b.paymentMethod} | Status: {b.status}</p>
            </div>
            <div style={{ display: 'flex', gap: '5px' }}>
              {b.status === "Pending" && <button onClick={()=>approveBooking(i)} style={{ padding: '5px 10px', borderRadius: '5px', border: 'none', backgroundColor: '#D4AF37', color: '#000' }}>Approve</button>}
              {b.status !== "Cancelled" && <button onClick={()=>cancelBooking(i)} style={{ padding: '5px 10px', borderRadius: '5px', border: 'none', backgroundColor: '#D4AF37', color: '#000' }}>Cancel</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBookings;
