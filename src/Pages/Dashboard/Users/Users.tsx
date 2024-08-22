import style from './Users.module.css'

const appointmentData = [
    { name: 'Olivia', email: 'olivia@gmail.com', date: '13 Oct 2018', number: '0126598853',  },
    { name: 'Ava', email: 'ava@gmail.com', date: '26 Dec 2018', number: '0126590443',  },
    { name: 'Noah', email: 'noah@gmail.com', date: '15 Jun 2018',  number: '0126598525',  },
    { name: 'Isabella', email: 'isabella@gmail.com', date: '2 Jul 2018',  number: '0126599411', },
  ];

export function Users  () {
    return (
        <div>
            <h2>Users</h2>
            <div className={style.appointmentRow}>
          <span>Name</span>
          <span>Email</span>
          <span>Date</span>  
          <span>Number</span>
       
        </div>

        {appointmentData.map((appointment, index) => (
          <div className={style.appointmentRow} key={index}>
            {/* Add your logic for photo rendering here */}
            <span>{appointment.name}</span>
            <span>{appointment.email}</span>
            <span>{appointment.date}</span>
            <span>{appointment.number}</span>
          
            {/* Add your logic for actions here */}
          </div>
        ))}
        </div>
    );
};

