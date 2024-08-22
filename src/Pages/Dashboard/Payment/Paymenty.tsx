
import style from './Payment.module.css';

const paymentData = [
  { billNo: 124, patient: 'Sofia Smitt', doctor: 'Jessica Patterson', date: '8 Feb 2019', charges: 100, tax: 10, discount: 5, total: 110 },
  { billNo: 128, patient: 'Sonali Malik', doctor: 'Lori Perkins', date: '15 Feb 2019', charges: 120, tax: 10, discount: 5, total: 124 },
  { billNo: 128, patient: 'Sonali Malik', doctor: 'Lori Perkins', date: '15 Feb 2019', charges: 120, tax: 10, discount: 5, total: 124 },
  { billNo: 128, patient: 'Sonali Malik', doctor: 'Lori Perkins', date: '15 Feb 2019', charges: 120, tax: 10, discount: 5, total: 124 },
  { billNo: 128, patient: 'Sonali Malik', doctor: 'Lori Perkins', date: '15 Feb 2019', charges: 120, tax: 10, discount: 5, total: 124 },
  { billNo: 128, patient: 'Sonali Malik', doctor: 'Lori Perkins', date: '15 Feb 2019', charges: 120, tax: 10, discount: 5, total: 124 },
  { billNo: 128, patient: 'Sonali Malik', doctor: 'Lori Perkins', date: '15 Feb 2019', charges: 120, tax: 10, discount: 5, total: 124 },
  { billNo: 128, patient: 'Sonali Malik', doctor: 'Lori Perkins', date: '15 Feb 2019', charges: 120, tax: 10, discount: 5, total: 124 },
  { billNo: 128, patient: 'Sonali Malik', doctor: 'Lori Perkins', date: '15 Feb 2019', charges: 120, tax: 10, discount: 5, total: 124 },
  { billNo: 128, patient: 'Sonali Malik', doctor: 'Lori Perkins', date: '15 Feb 2019', charges: 120, tax: 10, discount: 5, total: 124 },
  // ... (add other payment records here)
];

export function Paymenty() {
  return (
    <div>
      <h2>Payments</h2>
      <div className={style.paymentTable}>
        <div className={style.paymentRow}>
          <span>Bill NO</span>
          <span>Patient</span>
          <span>Doctor</span>
          <span>Date</span>
          <span>Charges</span>
          <span>Tax</span>
          <span>Discount</span>
          <span>Total</span>
        </div>
        {paymentData.map((payment) => (
          <div className={style.paymentRow} key={payment.billNo}>
            <span>{payment.billNo}</span>
            <span>{payment.patient}</span>
            <span>{payment.doctor}</span>
            <span>{payment.date}</span>
            <span>{payment.charges}$</span>
            <span>{payment.tax}%</span>
            <span>{payment.discount}$</span>
            <span>{payment.total}$</span>
          </div>
        ))}
      </div>
    </div>
  );
}
