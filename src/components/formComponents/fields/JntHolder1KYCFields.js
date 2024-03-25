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

function JntHolder1KYCFields({ formData, classToBeApplied }) {
  const yesNoDDValues = Dropdowns('yesNo');
  const scndHolderFormSelectorDDValue = Dropdowns('form6061');
  const [PANCardSelector, setPANCardSelector] = useState('YES');
  const nationalityDefault = 'INDIAN';

  formData.nationality_scnd_account_holder = UpCase(nationalityDefault);

  function handleChangeScndHolderPANSelector(e) {
    setPANCardSelector(e.target.value);
    if (e.target.value === 'YES') {
      formData.form60_scnd_account_holder = false;
      formData.form61_scnd_account_holder = false;
      formData.form60_name_scnd_account_holder = '';
      formData.form61_name_scnd_account_holder = '';
      formData.form60_address_scnd_account_holder = '';
      formData.form61_address_scnd_account_holder = '';
    } else {
      formData.pan_scnd_account_holder = '';
    }
  }

  function handleScndHolderPANChange(e) {
    formData.pan_scnd_account_holder = UpCase(e.target.value);
  }
  function handleChangeScndHolderFormSelector(e) {
    if (e.target.value === 'FORM 60') {
      formData.pan_scnd_account_holder = UpCase(e.target.value);
      formData.form60_scnd_account_holder = true;
      // removing values of form 61
      formData.form61_scnd_account_holder = false;
      formData.form61_name_scnd_account_holder = '';
      formData.form61_address_scnd_account_holder = '';
    }
    if (e.target.value === 'FORM 61') {
      formData.pan_scnd_account_holder = UpCase(e.target.value);
      formData.form61_scnd_account_holder = true;
      // removing values of form 60
      formData.form60_scnd_account_holder = false;
      formData.form60_name_scnd_account_holder = '';
      formData.form60_address_scnd_account_holder = '';
    }
  }

  function handleAadharChange(e) {
    formData.aadhar_scnd_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="scndHolderPANSelector">
            Do you have a PAN Card?
          </InputLabel>
          <Select
            required
            className={classToBeApplied}
            onChange={handleChangeScndHolderPANSelector}
            inputProps={{
              name: 'scndHolderPANSelector',
              id: 'scndHolderPANSelector',
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
                  name: 'scndHolderPAN',
                  id: 'scndHolderPAN',
                  maxLength: 10,
                }}
                onChange={handleScndHolderPANChange}
                label="PAN"
              />
            </div>
          ) : (
            <div>
              <InputLabel htmlFor="scndHolderFormSelector">
                I have below Form
              </InputLabel>
              <Select
                className={classToBeApplied}
                onChange={handleChangeScndHolderFormSelector}
                inputProps={{
                  name: 'scndHolderFormSelector',
                  id: 'scndHolderFormSelector',
                }}
              >
                {scndHolderFormSelectorDDValue.map((value) => {
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
              name: 'scndHolderAadhar',
              id: 'scndHolderAadhar',
              maxLength: 16,
            }}
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 16);
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
              name: 'scndHolderNationality',
              id: 'scndHolderNationality',
              readOnly: true,
            }}
            label="Nationality"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder1KYCFields;
