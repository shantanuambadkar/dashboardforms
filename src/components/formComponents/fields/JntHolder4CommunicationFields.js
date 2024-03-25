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

function JntHolder4CommunicationFields({ formData, classToBeApplied }) {
  const genderDDValues = Dropdowns('gender');

  function handleChangeFifthHolderMobile(e) {
    formData.mobile_fifth_account_holder = UpCase(e.target.value);
  }
  function handleChangeFifthHolderEmail(e) {
    formData.email_fifth_account_holder = UpCase(e.target.value);
  }
  function handleChangeFifthHolderGender(e) {
    formData.gender_fifth_account_holder = UpCase(e.target.value);
  }
  function handleChangeFifthHolderLandline(e) {
    formData.landline_fifth_account_holder = UpCase(e.target.value);
  }
  function handleChangeFifthHolderWhatsApp(e) {
    formData.whatsapp_fifth_account_holder = UpCase(e.target.value);
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
              name: 'fifthHolderMobile',
              id: 'fifthHolderMobile',
            }}
            label="Mobile No."
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 40);
            }}
            onChange={handleChangeFifthHolderMobile}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'fifthHolderEmail',
              id: 'fifthHolderEmail',
            }}
            label="Email"
            onChange={handleChangeFifthHolderEmail}
          />
        </Grid>
        <Grid item xs={3}>
          <InputLabel id="genderDropdown" htmlFor="fifthHolderGender">
            Gender *
          </InputLabel>
          <Select
            required
            className={classToBeApplied}
            inputProps={{
              name: 'fifthHolderGender',
              id: 'fifthHolderGender',
            }}
            onChange={handleChangeFifthHolderGender}
            /* value={fifthHolderTitle} */
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
              name: 'fifthHolderLandline',
              id: 'fifthHolderLandline',
            }}
            label="Landline No."
            onChange={handleChangeFifthHolderLandline}
          />
        </Grid>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            type="number"
            inputProps={{
              name: 'fifthHolderWhatsapp',
              id: 'fifthHolderWhatsapp',
            }}
            label="WhatsApp No."
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 40);
            }}
            onChange={handleChangeFifthHolderWhatsApp}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder4CommunicationFields;
