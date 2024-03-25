import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Common.css';
import '../../css/Header.css';
import LogoutIcon from '../icons/icons8-login-100.png';
import { useUser } from '../../context/UserContext';

function DashboardHeader() {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const goToDashboard = () => {
    navigate('/dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <div>
      <div className="DB-App-header">
        <span
          className="header-white-font cursor-pointer"
          onClick={goToDashboard}
        >
          The ABC Co-Operative Bank
        </span>
        <div className="logout-div">
          <span className="cursor-pointer" onClick={handleLogout}>
            <h3>Logout</h3>
          </span>
          <img
            className="logout-icon cursor-pointer"
            src={LogoutIcon}
            alt="Logout Door"
            onClick={handleLogout}
          />
        </div>
      </div>
      {/* <div>
        <img src={DBHeaderPatch} alt="InBank Header Patch" />
      </div> */}
    </div>
  );
}
export default DashboardHeader;
