import React from 'react';
import Header from '../components/ui/Header';
import '../css/Common.css';
import '../css/Forms.css';
import UpCase from '../components/formComponents/fields/UpCase';
import BackToDashboardButton from '../components/ui/BackToDashboardButton';
import FormTag from '../components/formComponents/form/FormTag';
import Buttons from '../components/ui/Buttons';
import TnCStaticText from '../components/ui/TnCStaticText';
import FormValidations from '../components/actions/FormValidations';
import FailurePopup from './FailurePopup';
import SavingsJSON from '../components/formJSON/SavingsJSON';

function Savings() {
  const formName = 'savings';

  let failedFields = {};
  const formData = SavingsJSON();

  async function submitForm(event) {
    event.preventDefault();
    console.log('formData', formData, 'formName', formName);
    try {
      failedFields = await FormValidations(formName, formData);
      if (Object.keys(failedFields).length > 0) {
        console.log('Failed fields in Savings.js', failedFields);
        FailurePopup(UpCase(formName));
      } else {
        console.log('formData is ', formData);
        alert('Form Submitted successfully');
      }
    } catch (error) {
      FailurePopup(UpCase(formName), error);
      console.log('Error ', error);
    }
  }

  return (
    <div>
      <Header />
      <div id="formHeaderDiv" className="divMargin">
        <div className="flex-box-form-header">
          <BackToDashboardButton />
          <div className="blue-color-text header-like-index">
            <h1>Savings Account</h1>
          </div>
        </div>
        <div id="formDiv" className="divMargin">
          <FormTag
            formID={formName}
            autoComplete="off"
            classToBeApplied="full-width-div"
            formData={formData}
            formName={formName}
            showNomination="true"
            showIntroducer="true"
            showAccount="true"
            failedFields={failedFields}
          />
        </div>
        <Buttons
          btnLabel="Submit Form"
          btnColor="primary"
          btnVariant="contained"
          btnType="submit"
          classToBeApplied="submitFormBtn"
          onClick={submitForm}
        />
        <TnCStaticText />
      </div>
    </div>
  );
}

export default Savings;
