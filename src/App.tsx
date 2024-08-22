

import { Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { Main } from './layout/Main';
import { Home } from './Pages/Home/Home';
import { Procrastination } from './Pages/Procrastination/Procrastination';
import { Register } from './Pages/Copmponent/Register/Register';

import { AppFeatures } from './Pages/Copmponent/AppFeatures/AppFeatures';
import { About } from './Pages/Copmponent/About/About';
import { Blog } from './Pages/Copmponent/Blog/Blog';
import { Email } from './Pages/Email/Email';
import Checkout from './Pages/Checkout/Checkout';
import { Loginss } from './Pages/Copmponent/Loginss/Loginss';
import { Confirm } from './Pages/Confirm/Confirm';
import { Calculate } from './Pages/Calculate/Calculate';
import { Employers } from './Pages/Employears/Employers';
import { Dashboard } from './layout/Dashboard';
import { OrderPlan } from './Pages/Dashboard/OrderPlan/OrderPlan';
import { AddDoctors } from './Pages/Dashboard/AddDoctors/AddDoctors';
import { Doctors } from './Pages/Dashboard/Doctors/Doctors';
import { UserDashboard } from './Pages/Dashboard/UserDashboard/UserDashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import { Paymenty } from './Pages/Dashboard/Payment/Paymenty';
import { Users } from './Pages/Dashboard/Users/Users';
import { Patients } from './Pages/Dashboard/Patients/Patients';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/:categoryId" element={<Procrastination />} />
          <Route path="/register" element={<Register />} />
          <Route path="/:categoryId/quize/:cat" element={<Loginss />} />
          <Route path="/appfeatures" element={<AppFeatures />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/email" element={<Email />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/calculate" element={<Calculate />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/:payment" element={<Checkout />} />
        </Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<DashboardHome/>} />
          <Route path='/dashboard/userdashboard' element={<UserDashboard />}/>
          <Route path='/dashboard/orderplan' element={<OrderPlan/>} />
          <Route path='/dashboard/adddoctors' element={<AddDoctors/>}/>
          <Route path='/dashboard/doctors' element={<Doctors/>}/>
          <Route path='/dashboard/patients' element={<Patients/>}/>
          <Route path='/dashboard/payments' element={<Paymenty/>}/>
          <Route path='/dashboard/users' element={<Users/>}/>
        </Route>
      </Routes>
    </I18nextProvider>
  );
};

export default App;
