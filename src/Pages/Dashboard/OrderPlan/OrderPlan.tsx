import React from 'react';
import style from './OrderPlan.module.css';

const appointmentData = [
  { name: 'Olivia', email: 'olivia@gmail.com', date: '13 Oct 2018', visitTime: '12:00 - 12:45', number: '0126598853', doctor: 'Dr. Noah', condition: 'depression' },
  { name: 'Ava', email: 'ava@gmail.com', date: '26 Dec 2018', visitTime: '14:15 - 14:30', number: '0126590443', doctor: 'Dr. Emma', condition: 'diarrhoea' },
  { name: 'Noah', email: 'noah@gmail.com', date: '15 Jun 2018', visitTime: '17:30 - 18:00', number: '0126598525', doctor: 'Dr. James', condition: 'dyslexia' },
  { name: 'Isabella', email: 'isabella@gmail.com', date: '2 Jul 2018', visitTime: '10:00 - 10:15', number: '0126599411', doctor: 'Dr. Noah', condition: 'flu' },
];

export function OrderPlan() {
  return (
    <div>
      <h2>Appointments</h2>
      <div className={style.appointmentTable}>
        <div className={style.appointmentRow}>
          <span>Photo</span>
          <span>Name</span>
          <span>Email</span>
          <span>Date</span>
          <span>Visit time</span>
          <span>Number</span>
          <span>Doctor</span>
          <span>Injury / Condition</span>
          <span>Actions</span>
        </div>
        {appointmentData.map((appointment, index) => (
          <div className={style.appointmentRow} key={index}>
            {/* Add your logic for photo rendering here */}
            <span>{appointment.name}</span>
            <span>{appointment.email}</span>
            <span>{appointment.date}</span>
            <span>{appointment.visitTime}</span>
            <span>{appointment.number}</span>
            <span>{appointment.doctor}</span>
            <span>{appointment.condition}</span>
            {/* Add your logic for actions here */}
          </div>
        ))}
      </div>
    </div>
  );
}

