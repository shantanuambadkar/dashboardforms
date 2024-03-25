import React from 'react';
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

function JntHolder2CommunicationFields({ formData, classToBeApplied }) {
  const genderDDValues = Dropdowns('gender');

  function handleChangeThrdHolderMobile(e) {
    formData.mobile_thrd_account_holder = UpCase(e.target.value);
  }
  function handleChangeThrdHolderEmail(e) {
    formData.email_thrd_account_holder = UpCase(e.target.value);
  }
  function handleChangeThrdHolderGender(e) {
    formData.gender_thrd_account_holder = UpCase(e.target.value);
  }
  function handleChangeThrdHolderLandline(e) {
    formData.landline_thrd_account_holder = UpCase(e.target.value);
  }
  function handleChangeThrdHolderWhatsApp(e) {
    formData.whatsapp_thrd_account_holder = UpCase(e.target.value);
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
              name: 'thrdHolderMobile',
              id: 'thrdHolderMobile',
            }}
            label="Mobile No."
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 20);
            }}
            onChange={handleChangeThrdHolderMobile}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'thrdHolderEmail',
              id: 'thrdHolderEmail',
            }}
            label="Email"
            onChange={handleChangeThrdHolderEmail}
          />
        </Grid>
        <Grid item xs={3}>
          <InputLabel id="genderDropdown" htmlFor="thrdHolderGender">
            Gender *
          </InputLabel>
          <Select
            required
            className={classToBeApplied}
            inputProps={{
              name: 'thrdHolderGender',
              id: 'thrdHolderGender',
            }}
            onChange={handleChangeThrdHolderGender}
            /* value={thrdHolderTitle} */
          >
            {genderDDValues.map((value) => {
              return (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            type="number"
            inputProps={{
              name: 'thrdHolderLandline',
              id: 'thrdHolderLandline',
            }}
            label="Landline No."
            onChange={handleChangeThrdHolderLandline}
          />
        </Grid>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            type="number"
            inputProps={{
              name: 'thrdHolderWhatsapp',
              id: 'thrdHolderWhatsapp',
            }}
            label="WhatsApp No."
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 20);
            }}
            onChange={handleChangeThrdHolderWhatsApp}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder2CommunicationFields;
