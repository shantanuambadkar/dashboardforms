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

function JntHolder1CommunicationFields({ formData, classToBeApplied }) {
  const genderDDValues = Dropdowns('gender');

  function handleChangeScndHolderMobile(e) {
    formData.mobile_scnd_account_holder = UpCase(e.target.value);
  }
  function handleChangeScndHolderEmail(e) {
    formData.email_scnd_account_holder = UpCase(e.target.value);
  }
  function handleChangeScndHolderGender(e) {
    formData.gender_scnd_account_holder = UpCase(e.target.value);
  }
  function handleChangeScndHolderLandline(e) {
    formData.landline_scnd_account_holder = UpCase(e.target.value);
  }
  function handleChangeScndHolderWhatsApp(e) {
    formData.whatsapp_scnd_account_holder = UpCase(e.target.value);
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
              name: 'scndHolderMobile',
              id: 'scndHolderMobile',
            }}
            label="Mobile No."
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 10);
            }}
            onChange={handleChangeScndHolderMobile}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'scndHolderEmail',
              id: 'scndHolderEmail',
            }}
            label="Email"
            onChange={handleChangeScndHolderEmail}
          />
        </Grid>
        <Grid item xs={3}>
          <InputLabel id="genderDropdown" htmlFor="scndHolderGender">
            Gender *
          </InputLabel>
          <Select
            required
            className={classToBeApplied}
            inputProps={{
              name: 'scndHolderGender',
              id: 'scndHolderGender',
            }}
            onChange={handleChangeScndHolderGender}
            /* value={scndHolderTitle} */
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
              name: 'scndHolderLandline',
              id: 'scndHolderLandline',
            }}
            label="Landline No."
            onChange={handleChangeScndHolderLandline}
          />
        </Grid>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            type="number"
            inputProps={{
              name: 'scndHolderWhatsapp',
              id: 'scndHolderWhatsapp',
            }}
            label="WhatsApp No."
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 10);
            }}
            onChange={handleChangeScndHolderWhatsApp}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder1CommunicationFields;
