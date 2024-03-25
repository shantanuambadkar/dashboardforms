import React from 'react';
import Header from '../components/ui/Header';
import '../css/Common.css';
import '../css/Forms.css';
import BackToDashboardButton from '../components/ui/BackToDashboardButton';
import TnCStaticText from '../components/ui/TnCStaticText';

function PMJJBY() {
  return (
    <div>
      <div id="headerDiv">
        <header>
          <Header />
        </header>
      </div>
      <div id="formHeaderDiv">
        <div className="flex-box-form-header">
          <BackToDashboardButton />
          <div className="blue-color-text">
            <h1>Pradhan Mantri Jivan Jyoti Bima Yojana (PMJJBY)</h1>
          </div>
        </div>
        <div id="consentDiv" className="center-align-text">
          <div>
            <u>
              <h3 className="no-margin-top-and-bottom">
                Consent-Cum-Declaration Form
              </h3>
            </u>
          </div>
          <div>
            Payment should be made by the members joining the scheme during the
            stipulated 'Registration Period'.
          </div>
          <div>
            This Scheme is available only for people in the age group of 18 to
            50 years.
          </div>
          <div>
            I, hereby give consent to become a member of 'Pradhan Mantri Jeevan
            Bima Yojna' of LIC of India which will be administered by your Bank
            under Master Policy No. 900100813 I here by authorize you to debit
            my Saving Bank Account with your branch with ₹330 /- (Rupees Three
            Thousend Thirty only) and GST if applicable toward premium of life
            cover under PMJJBY. I further authorize to deduct in future after 21
            May and not later than 31 May every year untill further
            instructions, an amount of ₹330 /- (Rupees Three Thousend Thirty
            only) and GST if applicable, or any amount as decided from time to
            time which may be intimated immediately if and when revised, toward
            renewal of coverage under the scheme. I have not authorized any
            other bank to debit premium in respect of this scheme. I am aware
            that my life cover shall be restricted to ₹2,00,000 /- only in the
            event of my death. I have read and understood the Scheme rule and I
            hereby give my consent to become a member of Scheme. I authorize the
            bank to convey my personal details, given as required regarding my
            admission into the group insurance scheme to LIC OF INDIA.
          </div>
          <div>
            <u>
              I am aware that the risk will not be covered during first 45 days
              from the date enrollment in to the scheme (lien period) and in
              case of death (other than due to accident) during lien period, no
              claim would be admissible.
            </u>
          </div>
          <div>Applicant Details, as per Bank / KYC records.</div>
        </div>
      </div>
      <div id="formDiv"></div>
      <div id="footerDiv">
        <TnCStaticText />
      </div>
    </div>
  );
}

export default PMJJBY;
