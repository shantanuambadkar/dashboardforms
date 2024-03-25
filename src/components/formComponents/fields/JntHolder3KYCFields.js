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

function JntHolder3KYCFields({ formData, classToBeApplied }) {
  const yesNoDDValues = Dropdowns('yesNo');
  const forthHolderFormSelectorDDValue = Dropdowns('form6061');
  const [PANCardSelector, setPANCardSelector] = useState('YES');
  const nationalityDefault = 'INDIAN';

  formData.nationality_forth_account_holder = UpCase(nationalityDefault);

  function handleChangeForthHolderPANSelector(e) {
    setPANCardSelector(e.target.value);
    if (e.target.value === 'YES') {
      formData.form60_forth_account_holder = false;
      formData.form61_forth_account_holder = false;
      formData.form60_name_forth_account_holder = '';
      formData.form61_name_forth_account_holder = '';
      formData.form60_address_forth_account_holder = '';
      formData.form61_address_forth_account_holder = '';
    } else {
      formData.pan_forth_account_holder = '';
    }
  }

  function handleForthHolderPANChange(e) {
    formData.pan_forth_account_holder = UpCase(e.target.value);
  }
  function handleChangeForthHolderFormSelector(e) {
    if (e.target.value === 'FORM 60') {
      formData.pan_forth_account_holder = UpCase(e.target.value);
      formData.form60_forth_account_holder = true;
      // removing values of form 61
      formData.form61_forth_account_holder = false;
      formData.form61_name_forth_account_holder = '';
      formData.form61_address_forth_account_holder = '';
    }
    if (e.target.value === 'FORM 61') {
      formData.pan_forth_account_holder = UpCase(e.target.value);
      formData.form61_forth_account_holder = true;
      // removing values of form 60
      formData.form60_forth_account_holder = false;
      formData.form60_name_forth_account_holder = '';
      formData.form60_address_forth_account_holder = '';
    }
  }

  function handleAadharChange(e) {
    formData.aadhar_forth_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="forthHolderPANSelector">
            Do you have a PAN Card?
          </InputLabel>
          <Select
            required
            className={classToBeApplied}
            onChange={handleChangeForthHolderPANSelector}
            inputProps={{
              name: 'forthHolderPANSelector',
              id: 'forthHolderPANSelector',
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
                  name: 'forthHolderPAN',
                  id: 'forthHolderPAN',
                  maxLength: 30,
                }}
                onChange={handleForthHolderPANChange}
                label="PAN"
              />
            </div>
          ) : (
            <div>
              <InputLabel htmlFor="forthHolderFormSelector">
                I have below Form
              </InputLabel>
              <Select
                className={classToBeApplied}
                onChange={handleChangeForthHolderFormSelector}
                inputProps={{
                  name: 'forthHolderFormSelector',
                  id: 'forthHolderFormSelector',
                }}
              >
                {forthHolderFormSelectorDDValue.map((value) => {
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
              name: 'forthHolderAadhar',
              id: 'forthHolderAadhar',
              maxLength: 36,
            }}
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 36);
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
              name: 'forthHolderNationality',
              id: 'forthHolderNationality',
              readOnly: true,
            }}
            label="Nationality"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder3KYCFields;
