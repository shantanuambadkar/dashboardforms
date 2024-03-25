import React from 'react';
import Header from '../components/ui/Header';
import '../css/Common.css';
import '../css/Forms.css';
import BackToDashboardButton from '../components/ui/BackToDashboardButton';

function FD() {
  return (
    <div>
      <div>
        <header>
          <Header />
        </header>
      </div>
      <div>
        <div className="flex-box-form-header">
          <BackToDashboardButton />
          <div className="blue-color-text">
            <h1>Fixed Deposit Enteries / मुदत ठेव नोंद</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FD;
