import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Common.css';
import '../../css/Header.css';

function Header() {
  const navigate = useNavigate();
  const goToDashboard = () => {
    navigate('/');
  };
  return (
    <div className="App-header">
      <span
        className="header-white-font cursor-pointer"
        onClick={goToDashboard}
      >
        The ABC Co-Operative Bank
      </span>
    </div>
  );
}
export default Header;
