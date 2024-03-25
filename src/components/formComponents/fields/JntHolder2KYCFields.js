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

function JntHolder2KYCFields({ formData, classToBeApplied }) {
  const yesNoDDValues = Dropdowns('yesNo');
  const thrdHolderFormSelectorDDValue = Dropdowns('form6061');
  const [PANCardSelector, setPANCardSelector] = useState('YES');
  const nationalityDefault = 'INDIAN';

  formData.nationality_thrd_account_holder = UpCase(nationalityDefault);

  function handleChangeThrdHolderPANSelector(e) {
    setPANCardSelector(e.target.value);
    if (e.target.value === 'YES') {
      formData.form60_thrd_account_holder = false;
      formData.form61_thrd_account_holder = false;
      formData.form60_name_thrd_account_holder = '';
      formData.form61_name_thrd_account_holder = '';
      formData.form60_address_thrd_account_holder = '';
      formData.form61_address_thrd_account_holder = '';
    } else {
      formData.pan_thrd_account_holder = '';
    }
  }

  function handleThrdHolderPANChange(e) {
    formData.pan_thrd_account_holder = UpCase(e.target.value);
  }
  function handleChangeThrdHolderFormSelector(e) {
    if (e.target.value === 'FORM 60') {
      formData.pan_thrd_account_holder = UpCase(e.target.value);
      formData.form60_thrd_account_holder = true;
      // removing values of form 61
      formData.form61_thrd_account_holder = false;
      formData.form61_name_thrd_account_holder = '';
      formData.form61_address_thrd_account_holder = '';
    }
    if (e.target.value === 'FORM 61') {
      formData.pan_thrd_account_holder = UpCase(e.target.value);
      formData.form61_thrd_account_holder = true;
      // removing values of form 60
      formData.form60_thrd_account_holder = false;
      formData.form60_name_thrd_account_holder = '';
      formData.form60_address_thrd_account_holder = '';
    }
  }

  function handleAadharChange(e) {
    formData.aadhar_thrd_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="thrdHolderPANSelector">
            Do you have a PAN Card?
          </InputLabel>
          <Select
            required
            className={classToBeApplied}
            onChange={handleChangeThrdHolderPANSelector}
            inputProps={{
              name: 'thrdHolderPANSelector',
              id: 'thrdHolderPANSelector',
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
                  name: 'thrdHolderPAN',
                  id: 'thrdHolderPAN',
                  maxLength: 20,
                }}
                onChange={handleThrdHolderPANChange}
                label="PAN"
              />
            </div>
          ) : (
            <div>
              <InputLabel htmlFor="thrdHolderFormSelector">
                I have below Form
              </InputLabel>
              <Select
                className={classToBeApplied}
                onChange={handleChangeThrdHolderFormSelector}
                inputProps={{
                  name: 'thrdHolderFormSelector',
                  id: 'thrdHolderFormSelector',
                }}
              >
                {thrdHolderFormSelectorDDValue.map((value) => {
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
              name: 'thrdHolderAadhar',
              id: 'thrdHolderAadhar',
              maxLength: 26,
            }}
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 26);
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
              name: 'thrdHolderNationality',
              id: 'thrdHolderNationality',
              readOnly: true,
            }}
            label="Nationality"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder2KYCFields;
