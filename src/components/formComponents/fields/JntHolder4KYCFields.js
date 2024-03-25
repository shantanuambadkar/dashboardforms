import React, { useState } from 'react';
import Dropdowns from '../reusableComponents/Dropdowns';
import UpCase from './UpCase';
import '../../../css/Common.css';
import '../../../css/Fields.css';
import {
  Grid,
  TextField,
  MenuItem,
  Select,
  InputLabel,
} from '@material-ui/core';

function JntHolder4KYCFields({ formData, classToBeApplied }) {
  const yesNoDDValues = Dropdowns('yesNo');
  const fifthHolderFormSelectorDDValue = Dropdowns('form6061');
  const [PANCardSelector, setPANCardSelector] = useState('YES');
  const nationalityDefault = 'INDIAN';

  formData.nationality_fifth_account_holder = UpCase(nationalityDefault);

  function handleChangeFifthHolderPANSelector(e) {
    setPANCardSelector(e.target.value);
    if (e.target.value === 'YES') {
      formData.form60_fifth_account_holder = false;
      formData.form61_fifth_account_holder = false;
      formData.form60_name_fifth_account_holder = '';
      formData.form61_name_fifth_account_holder = '';
      formData.form60_address_fifth_account_holder = '';
      formData.form61_address_fifth_account_holder = '';
    } else {
      formData.pan_fifth_account_holder = '';
    }
  }

  function handleFifthHolderPANChange(e) {
    formData.pan_fifth_account_holder = UpCase(e.target.value);
  }
  function handleChangeFifthHolderFormSelector(e) {
    if (e.target.value === 'FORM 60') {
      formData.pan_fifth_account_holder = UpCase(e.target.value);
      formData.form60_fifth_account_holder = true;
      // removing values of form 61
      formData.form61_fifth_account_holder = false;
      formData.form61_name_fifth_account_holder = '';
      formData.form61_address_fifth_account_holder = '';
    }
    if (e.target.value === 'FORM 61') {
      formData.pan_fifth_account_holder = UpCase(e.target.value);
      formData.form61_fifth_account_holder = true;
      // removing values of form 60
      formData.form60_fifth_account_holder = false;
      formData.form60_name_fifth_account_holder = '';
      formData.form60_address_fifth_account_holder = '';
    }
  }

  function handleAadharChange(e) {
    formData.aadhar_fifth_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="fifthHolderPANSelector">
            Do you have a PAN Card?
          </InputLabel>
          <Select
            required
            className={classToBeApplied}
            onChange={handleChangeFifthHolderPANSelector}
            inputProps={{
              name: 'fifthHolderPANSelector',
              id: 'fifthHolderPANSelector',
            }}
            value={PANCardSelector}
          >
            {yesNoDDValues.map((value) => {
              return (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid item xs={3}>
          {PANCardSelector === 'YES' ? (
            <div id="panDiv">
              <TextField
                required
                className={classToBeApplied}
                inputProps={{
                  name: 'fifthHolderPAN',
                  id: 'fifthHolderPAN',
                  maxLength: 40,
                }}
                onChange={handleFifthHolderPANChange}
                label="PAN"
              />
            </div>
          ) : (
            <div>
              <InputLabel htmlFor="fifthHolderFormSelector">
                I have below Form
              </InputLabel>
              <Select
                className={classToBeApplied}
                onChange={handleChangeFifthHolderFormSelector}
                inputProps={{
                  name: 'fifthHolderFormSelector',
                  id: 'fifthHolderFormSelector',
                }}
              >
                {fifthHolderFormSelectorDDValue.map((value) => {
                  return (
                    <MenuItem key={value} value={value}>
                      {value}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
          )}
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            type="number"
            inputProps={{
              name: 'fifthHolderAadhar',
              id: 'fifthHolderAadhar',
              maxLength: 46,
            }}
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 46);
            }}
            label="Aadhar Number"
            onChange={handleAadharChange}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            value={nationalityDefault}
            inputProps={{
              name: 'fifthHolderNationality',
              id: 'fifthHolderNationality',
              readOnly: true,
            }}
            label="Nationality"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder4KYCFields;
