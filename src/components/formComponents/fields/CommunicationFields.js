import React from 'react';
import {
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import '../../../css/Common.css';
import '../../../css/Fields.css';
import Dropdowns from '../reusableComponents/Dropdowns';
import UpCase from './UpCase';

function CommunicationFields({ classToBeApplied, formData, formName }) {
  const genderDDValues = Dropdowns('gender');

  function handleChangeCustMobile(e) {
    formData.mobile_account_holder = UpCase(e.target.value);
  }

  function handleChangeCustEmail(e) {
    formData.email_account_holder = UpCase(e.target.value);
  }

  function handleChangeCustGender(e) {
    formData.gender_account_holder = UpCase(e.target.value);
  }

  function handleChangeCustLandline(e) {
    formData.landline_account_holder = UpCase(e.target.value);
  }

  function handleChangeCustWhatsApp(e) {
    formData.whatsapp_account_holder = UpCase(e.target.value);
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
              name: 'fstHolderMobile',
              id: 'fstHolderMobile',
            }}
            label="Mobile No."
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 10);
            }}
            onChange={handleChangeCustMobile}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'fstHolderEmail',
              id: 'fstHolderEmail',
            }}
            label="Email"
            onChange={handleChangeCustEmail}
          />
        </Grid>
        <Grid item xs={3}>
          <InputLabel id="genderDropdown" htmlFor="fstHolderGender">
            Gender *
          </InputLabel>
          <Select
            required
            className={classToBeApplied}
            inputProps={{
              name: 'fstHolderGender',
              id: 'fstHolderGender',
            }}
            onChange={handleChangeCustGender}
            /* value={fstHolderTitle} */
          >
            {genderDDValues.map((value, index) => {
              return (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        {formName === 'pmsby' ||
        formName === 'pmjjby' ||
        formName === 'fastag' ? (
          ''
        ) : (
          <Grid item xs={3}>
            <TextField
              className={classToBeApplied}
              type="number"
              inputProps={{
                name: 'fstHolderLandline',
                id: 'fstHolderLandline',
              }}
              label="Landline No."
              onChange={handleChangeCustLandline}
            />
          </Grid>
        )}
      </Grid>

      {formName === 'pmsby' ||
      formName === 'pmjjby' ||
      formName === 'fastag' ? (
        ''
      ) : (
        <Grid container className="textFieldFormTop">
          <Grid item xs={3}>
            <TextField
              className={classToBeApplied}
              type="number"
              inputProps={{
                name: 'fstHolderWhatsapp',
                id: 'fstHolderWhatsapp',
              }}
              label="WhatsApp No."
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 10);
              }}
              onChange={handleChangeCustWhatsApp}
            />
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default CommunicationFields;
