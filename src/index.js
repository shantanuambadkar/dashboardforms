import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/Common.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Savings from './pages/Savings';
import Current from './pages/Current';
import FD from './pages/FD';
import PMJJBY from './pages/PMJJBY';
import PMSBY from './pages/PMSBY';
import Fastag from './pages/Fastag';
import FormSubmitted from './pages/FormSubmitted';
import Dashboard from './pages/Dashboard';
import { UserProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/current" element={<Current />} />
          <Route path="/fd" element={<FD />} />
          <Route path="/pmjjby" element={<PMJJBY />} />
          <Route path="/pmsby" element={<PMSBY />} />
          <Route path="/fastag" element={<Fastag />} />
          <Route path="/formsubmitted" element={<FormSubmitted />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
