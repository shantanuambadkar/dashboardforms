import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/ui/Header';
import '../css/Common.css';
import '../css/Forms.css';
import BackToDashboardButton from '../components/ui/BackToDashboardButton';
import Buttons from '../components/ui/Buttons';
import TnCStaticText from '../components/ui/TnCStaticText';
import FormTag from '../components/formComponents/form/FormTag';
import FormValidations from '../components/actions/FormValidations';
import FailurePopup from './FailurePopup';
import UpCase from '../components/formComponents/fields/UpCase';
import PMSBYJSON from '../components/formJSON/PMSBYJSON';

function PMSBY() {
  const formName = 'pmsby';
  const showcheckboxOnForm = true;
  const navigate = useNavigate();

  let failedFields = {};

  let formData = PMSBYJSON();
  /* console.log(formData); */

  function copyCommonFields(e) {
    if (formData.nominee_addr_same_as_acc_holder === 'NO') {
      formData.address_nominee = formData.address_account_holder;
      formData.city_nominee = formData.city_account_holder;
      formData.district_nominee = formData.district_account_holder;
      formData.pin_nominee = formData.pin_account_holder;
      formData.state_nominee = formData.state_account_holder;
      formData.country_nominee = formData.country_account_holder;
    }
    submitForm(e);
  }

  async function submitForm(event) {
    event.preventDefault();
    /* console.log('formData', formData, 'formName', formName); */
    try {
      failedFields = await FormValidations(formName, formData);
      if (failedFields && Object.keys(failedFields).length > 0) {
        console.log('Failed fields in PMSBY.js', failedFields);
        FailurePopup(UpCase(formName));
      } else {
        console.log('formData is ', formData);
        navigate('/formsubmitted');
      }
    } catch (error) {
      console.log('Error ', error);
      FailurePopup(UpCase(formName), error);
    }
  }

  return (
    <div>
      <Header />
      <div id="formHeaderDiv" className="divMargin">
        <div className="flex-box-form-header">
          <BackToDashboardButton />
          <div className="blue-color-text">
            <h1>Prime Minister Security Insurance Plan (PMSBY)</h1>
          </div>
        </div>
        <div id="consentDiv" className="center-align-text">
          <u>
            <h3 className="no-margin-top-and-bottom">
              Consent-Cum-Declaration Form
            </h3>
          </u>
          <span>
            Payment should be made by the members joining the scheme during the
            stipulated 'Registration Period'.
            <br />
            This Scheme is available only for people in the age group of 18 to
            70 years.
            <br />
            Applicant Details, as per Bank / KYC records.
            <br />
          </span>
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
          showIntroducer="false"
          showAccount="false"
          failedFields={failedFields}
        />
      </div>
      <div id="formNotesBeforeSubmit" className="divMargin formNotesBelow">
        <span>
          The above bank will act as the master policy holder for Prime Minister
          security scheme. I agree to participate in this scheme.
          <br />I am nominating my heir as mentioned above to get all the
          benefits of my death plan. If at the time of my death the nominated
          heir is below 18 years of age, his legal guardian should get the above
          benefits.
          <br />I declare that I have not participated in Prime Minister
          security scheme through any other bank account,if it is found that
          then my premium should be forfeited and I should not benefit from the
          scheme. <br />I agree that I will receive insurance cover from the
          date of the next month of the day from when I joined the scheme.
          <br />
          Although I joined the scheme after the Master Policy started, I am
          accepting the full year annual installment.
          <br />I agree that I will continue to participate in this scheme as
          long as I pay the insurance premiums and complete seventy years at the
          time of renewal.
          <br />I agree that I will abide by all the rules and regulations of
          the scheme. I agree to disclose my personal details to ICICI Lombard
          GIC as required to participate in the Prime Minister's Scheme.
          <br />I declare that all the above statements are true in all
          respects. The above information is the basis for my participation in
          this scheme. I agree that my participation in this scheme will be
          terminated if the above information is found to be incorrect.
          <br />
        </span>
      </div>
      <div className="divMargin"></div>
      <Buttons
        btnLabel="Submit Form"
        btnColor="primary"
        btnVariant="contained"
        btnType="submit"
        classToBeApplied="submitFormBtn"
        onClick={copyCommonFields}
        showCheckbox={showcheckboxOnForm}
        checkboxLabel="I accept these terms and conditions"
      />
      <TnCStaticText />
    </div>
  );
}

export default PMSBY;
