import React from 'react';
import '../css/Common.css';
import Header from '../components/ui/Header';

function FormSubmitted({ formName }) {
  return (
    <div>
      <Header />
      <span className="divMargin">
        {formName} <br />
        Your Form is submitted successfully.
      </span>
    </div>
  );
}

export default FormSubmitted;
