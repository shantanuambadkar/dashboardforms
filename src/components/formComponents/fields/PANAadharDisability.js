import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import UpCase from './UpCase';
import '../../../css/Common.css';
import '../../../css/Fields.css';
import Dropdowns from '../reusableComponents/Dropdowns';

function PANAadharDisability({ classToBeApplied, formData, formName }) {
  const yesNoDDValues = Dropdowns('yesNo');
  const custFormSelectorDDValue = Dropdowns('form6061');
  const [disabilityType, setDisabilityType] = useState('');
  const [PANCardSelector, setPANCardSelector] = useState('YES');

  function handleChangeCustPANSelector(e) {
    setPANCardSelector(e.target.value);
    if (e.target.value === 'YES') {
      formData.form60_fst_account_holder = false;
      formData.form61_fst_account_holder = false;
      formData.form60_name_fst_account_holder = '';
      formData.form61_name_fst_account_holder = '';
      formData.form60_address_fst_account_holder = '';
      formData.form61_address_fst_account_holder = '';
    } else {
      formData.pan_account_holder = '';
    }
  }

  function handleCustPANChange(e) {
    formData.pan_account_holder = UpCase(e.target.value);
  }

  function handleAadharChange(e) {
    formData.aadhar_account_holder = UpCase(e.target.value);
  }

  function handleChangeCustDisability(e) {
    formData.disability_account_holder = UpCase(e.target.value);
    if (e.target.value === 'YES') {
      document.getElementById('disabilityTypeDiv').classList.remove('hide-me');
      setDisabilityType('');
      formData.disability_details_account_holder = '';
    } else {
      document.getElementById('disabilityTypeDiv').classList.add('hide-me');
      formData.disability_details_account_holder = '';
    }
  }

  function handleChangeCustDisabilityType(e) {
    setDisabilityType(UpCase(e.target.value));
    formData.disability_details_account_holder = UpCase(e.target.value);
  }

  function handleChangeCustFormSelector(e) {
    if (e.target.value === 'FORM 60') {
      formData.pan_account_holder = UpCase(e.target.value);
      formData.form60_fst_account_holder = true;
      // removing values of form 61
      formData.form61_fst_account_holder = false;
      formData.form61_name_fst_account_holder = '';
      formData.form61_address_fst_account_holder = '';
    }
    if (e.target.value === 'FORM 61') {
      formData.pan_account_holder = UpCase(e.target.value);
      formData.form61_fst_account_holder = true;
      // removing values of form 60
      formData.form60_fst_account_holder = false;
      formData.form60_name_fst_account_holder = '';
      formData.form60_address_fst_account_holder = '';
    }
  }

  return (
    <div>
      {formName === 'savings' ? (
        <Grid container className="textFieldFormTop">
          <Grid item xs={3}>
            <InputLabel htmlFor="custPANSelector">
              Do you have a PAN Card?
            </InputLabel>
            <Select
              required
              className={classToBeApplied}
              onChange={handleChangeCustPANSelector}
              inputProps={{
                name: 'custPANSelector',
                id: 'custPANSelector',
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
        </Grid>
      ) : (
        ''
      )}
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          {formName === 'pmsby' ||
          formName === 'pmsjjy' ||
          formName === 'fastag' ? (
            <div id="panDiv">
              <TextField
                required
                className={classToBeApplied}
                inputProps={{
                  name: 'custPAN',
                  id: 'custPAN',
                  maxLength: 10,
                }}
                onChange={handleCustPANChange}
                label="PAN"
              />
            </div>
          ) : PANCardSelector === 'YES' ? (
            <div id="panDiv">
              <TextField
                required
                className={classToBeApplied}
                inputProps={{
                  name: 'custPAN',
                  id: 'custPAN',
                  maxLength: 10,
                }}
                onChange={handleCustPANChange}
                label="PAN"
              />
            </div>
          ) : (
            <div>
              <InputLabel htmlFor="custFormSelector">
                I have below Form
              </InputLabel>
              <Select
                className={classToBeApplied}
                onChange={handleChangeCustFormSelector}
                inputProps={{
                  name: 'custFormSelector',
                  id: 'custFormSelector',
                }}
              >
                {custFormSelectorDDValue.map((value) => {
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
              name: 'custAadhar',
              id: 'custAadhar',
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
          <InputLabel htmlFor="custDisability">Disability *</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeCustDisability}
            inputProps={{
              name: 'custDisability',
              id: 'custDisability',
            }}
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
          <div id="disabilityTypeDiv" className="hide-me">
            <TextField
              required
              className={classToBeApplied}
              inputProps={{
                name: 'custDisabilityType',
                id: 'custDisabilityType',
              }}
              label="Disability Type"
              onChange={handleChangeCustDisabilityType}
              value={disabilityType}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default PANAadharDisability;
