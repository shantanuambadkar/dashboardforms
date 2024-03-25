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

function JntHolder3CommunicationFields({ formData, classToBeApplied }) {
  const genderDDValues = Dropdowns('gender');

  function handleChangeForthHolderMobile(e) {
    formData.mobile_forth_account_holder = UpCase(e.target.value);
  }
  function handleChangeForthHolderEmail(e) {
    formData.email_forth_account_holder = UpCase(e.target.value);
  }
  function handleChangeForthHolderGender(e) {
    formData.gender_forth_account_holder = UpCase(e.target.value);
  }
  function handleChangeForthHolderLandline(e) {
    formData.landline_forth_account_holder = UpCase(e.target.value);
  }
  function handleChangeForthHolderWhatsApp(e) {
    formData.whatsapp_forth_account_holder = UpCase(e.target.value);
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
              name: 'forthHolderMobile',
              id: 'forthHolderMobile',
            }}
            label="Mobile No."
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 30);
            }}
            onChange={handleChangeForthHolderMobile}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'forthHolderEmail',
              id: 'forthHolderEmail',
            }}
            label="Email"
            onChange={handleChangeForthHolderEmail}
          />
        </Grid>
        <Grid item xs={3}>
          <InputLabel id="genderDropdown" htmlFor="forthHolderGender">
            Gender *
          </InputLabel>
          <Select
            required
            className={classToBeApplied}
            inputProps={{
              name: 'forthHolderGender',
              id: 'forthHolderGender',
            }}
            onChange={handleChangeForthHolderGender}
            /* value={forthHolderTitle} */
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
              name: 'forthHolderLandline',
              id: 'forthHolderLandline',
            }}
            label="Landline No."
            onChange={handleChangeForthHolderLandline}
          />
        </Grid>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            type="number"
            inputProps={{
              name: 'forthHolderWhatsapp',
              id: 'forthHolderWhatsapp',
            }}
            label="WhatsApp No."
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 30);
            }}
            onChange={handleChangeForthHolderWhatsApp}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder3CommunicationFields;
