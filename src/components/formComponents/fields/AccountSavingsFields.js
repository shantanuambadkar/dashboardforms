import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import '../../../css/Common.css';
import '../../../css/Fields.css';
import '../../../css/Checkbox.css';
import Dropdowns from '../reusableComponents/Dropdowns';
import UpCase from './UpCase';
import ConvertAmtToWords from '../reusableComponents/ConvertAmtToWords';

function AccountSavingsFields({ classToBeApplied, formData, formName }) {
  const [wordsAmt, setWordsAmt] = useState('');
  const yesNoDDValues = Dropdowns('yesNo');
  const [SMSService, setSMSService] = useState('YES');
  const [emailService, setEmailService] = useState('YES');
  const [ATMService, setATMService] = useState('YES');
  const docsArray = Dropdowns('savingsDocuments');
  const [checkedDocValues, setCheckedDocValues] = useState([]);
  const [servicesReqdArr, setServicesReqdArr] = useState([
    'SMS',
    'EMAIL',
    'ATM',
  ]);
  //Setting it on load, so that, if there are no changes done, default values will be sent
  formData.services_required = servicesReqdArr;

  function handleDepositAmtChange(e) {
    formData.amt_no = e.target.value;
    var wordsAmtTemp = ConvertAmtToWords(e.target.value) + ' ONLY';
    /* console.log(wordsAmtTemp, 'amt'); */
    setWordsAmt(wordsAmtTemp);
    formData.amt_word = wordsAmtTemp;
  }

  function handleChangeAtmRequired(e) {
    setATMService(UpCase(e.target.value));
    if (servicesReqdArr.includes('ATM') && e.target.value === 'NO') {
      const updatedArray = servicesReqdArr.filter(
        (service) => service !== 'ATM'
      );
      setServicesReqdArr(updatedArray);
    }
    if (!servicesReqdArr.includes('ATM') && e.target.value === 'YES') {
      const updatedArray = [...servicesReqdArr, 'ATM'];
      setServicesReqdArr(updatedArray);
    }
    formData.services_required = servicesReqdArr;
    /* console.log('formData.services_required', formData.services_required); */
  }

  function handleChangeSmsAlerts(e) {
    setSMSService(UpCase(e.target.value));
    if (servicesReqdArr.includes('SMS') && e.target.value === 'NO') {
      const updatedArray = servicesReqdArr.filter(
        (service) => service !== 'SMS'
      );
      setServicesReqdArr(updatedArray);
    }
    if (!servicesReqdArr.includes('SMS') && e.target.value === 'YES') {
      const updatedArray = [...servicesReqdArr, 'SMS'];
      setServicesReqdArr(updatedArray);
    }
    formData.services_required = servicesReqdArr;
    /* console.log('formData.services_required', formData.services_required); */
  }

  function handleChangeEmailAlerts(e) {
    setEmailService(UpCase(e.target.value));
    if (servicesReqdArr.includes('EMAIL') && e.target.value === 'NO') {
      const updatedArray = servicesReqdArr.filter(
        (service) => service !== 'EMAIL'
      );
      setServicesReqdArr(updatedArray);
    }
    if (!servicesReqdArr.includes('EMAIL') && e.target.value === 'YES') {
      const updatedArray = [...servicesReqdArr, 'EMAIL'];
      setServicesReqdArr(updatedArray);
    }
    formData.services_required = servicesReqdArr;
    /* console.log('formData.services_required', formData.services_required); */
  }

  function handleDocumentsCheckBox(e) {
    if (e.target.checked) {
      if (e.target.value === 'OTHERS') {
        document.getElementById('otherDocsDiv').classList.remove('hide-me');
      }
      setCheckedDocValues([...checkedDocValues, e.target.value]);
    } else {
      if (e.target.value === 'OTHERS') {
        document.getElementById('otherDocsDiv').classList.add('hide-me');
      }
      setCheckedDocValues(
        checkedDocValues.filter((item) => item !== e.target.value)
      );
    }
    console.log(checkedDocValues, 'checkedDocValues');
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            type="number"
            inputProps={{
              name: 'depositAmt',
              id: 'depositAmt',
            }}
            label="Deposit Amount"
            onChange={handleDepositAmtChange}
          />
        </Grid>
        <Grid item xs={9}>
          <TextField
            required
            value={wordsAmt}
            className={classToBeApplied}
            inputProps={{
              name: 'depositAmtInWrds',
              id: 'depositAmtInWrds',
              readOnly: true,
            }}
            label="Deposit Amount (In Words)"
          />
        </Grid>
      </Grid>
      <Grid container className="textFieldFormTop">
        <h5>Services required</h5>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={4}>
          <InputLabel htmlFor="selectedAtmServiceRequired">
            ATM and Debit Card
          </InputLabel>
          <Select
            className={classToBeApplied}
            value={ATMService}
            onChange={handleChangeAtmRequired}
            inputProps={{
              name: 'selectedAtmServiceRequired',
              id: 'selectedAtmServiceRequired',
            }}
          >
            {yesNoDDValues.map((value, index) => {
              return (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid item xs={3}>
          <InputLabel htmlFor="selectedSmsAlerts">SMS Alerts</InputLabel>
          <Select
            className={classToBeApplied}
            value={SMSService}
            onChange={handleChangeSmsAlerts}
            inputProps={{
              name: 'selectedSmsAlerts',
              id: 'selectedSmsAlerts',
            }}
          >
            {yesNoDDValues.map((value, index) => {
              return (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid item xs={3}>
          <InputLabel htmlFor="selectedEmailStatement">Email Alerts</InputLabel>
          <Select
            className={classToBeApplied}
            value={emailService}
            onChange={handleChangeEmailAlerts}
            inputProps={{
              name: 'selectedEmailStatement',
              id: 'selectedEmailStatement',
            }}
          >
            {yesNoDDValues.map((value, index) => {
              return (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid container className="textFieldFormTop">
          <h5>Documents</h5>
        </Grid>
        <Grid container className="textFieldFromTop">
          <Grid>
            <div>
              {docsArray.map((value) => (
                <label className="checkbox-font" key={value}>
                  <input
                    type="checkbox"
                    id="documentChecklist"
                    className="checkbox-custom"
                    value={value}
                    checked={checkedDocValues.includes(value)}
                    onChange={handleDocumentsCheckBox}
                  />
                  {value}
                </label>
              ))}
            </div>
          </Grid>
        </Grid>
        <Grid container className="textFieldFromTop">
          <Grid item xs={6}>
            <div id="otherDocsDiv" className="hide-me">
              <TextField
                required
                className={classToBeApplied}
                inputProps={{
                  name: 'otherDocs',
                  id: 'otherDocs',
                }}
                label="Others"
                /* onChange={setOtherDocuments} */
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default AccountSavingsFields;
