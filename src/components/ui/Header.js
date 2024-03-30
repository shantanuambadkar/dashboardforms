import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Common.css';
import '../../css/Header.css';
import LogoutIcon from '../icons/icons8-login-100.png';

function Header() {
  const navigate = useNavigate();
  const goToDashboard = () => {
    navigate('/dashboard');
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="App-header">
      <span
        className="header-white-font cursor-pointer"
        onClick={goToDashboard}
      >
        InBank
      </span>
      <div className="logout-div">
        <span className="logout-font cursor-pointer" onClick={handleLogout}>
          Logout
        </span>
        <img
          className="logout-icon cursor-pointer"
          src={LogoutIcon}
          alt="Logout Door"
          onClick={handleLogout}
        />
      </div>
    </div>
  );
}
export default Header;
