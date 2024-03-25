import React from 'react';
import '../../css/Common.css';
import '../../css/HomePage.css';
import { Link } from 'react-router-dom';

function HomePageButton({ buttonURL, buttonLabel }) {
  return (
    <div>
      <Link to={buttonURL}>
        <button className="silver-button-with-blue-hover">
          {buttonLabel ? buttonLabel : ''}
        </button>
      </Link>
    </div>
  );
}

export default HomePageButton;
