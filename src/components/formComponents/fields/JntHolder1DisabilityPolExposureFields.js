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

function JntHolder1DisabilityPolExposureFields({ formData, classToBeApplied }) {
  const [disabilityType, setDisabilityType] = useState('');
  const yesNoDDValues = Dropdowns('yesNo');

  function handleChangeScndHolderDisability(e) {
    formData.disability_scnd_account_holder = UpCase(e.target.value);
    formData.disability_details_scnd_account_holder = '';
    setDisabilityType('');
    if (e.target.value === 'YES') {
      document
        .getElementById('disabilityTypeDivJH1')
        .classList.remove('hide-me');
    } else {
      document.getElementById('disabilityTypeDivJH1').classList.add('hide-me');
    }
  }

  function handleChangeScndHolderDisabilityType(e) {
    setDisabilityType(UpCase(e.target.value));
    formData.disability_details_scnd_account_holder = UpCase(e.target.value);
  }

  function handleChangeScndHolderPoliticalExposure(e) {
    formData.political_exposure_scnd_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="scndHolderPoliticalExposure">
            Political Exposure
          </InputLabel>
          <Select
            className="field-width"
            onChange={handleChangeScndHolderPoliticalExposure}
            inputProps={{
              name: 'scndHolderPoliticalExposure',
              id: 'scndHolderPoliticalExposure',
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
          <InputLabel htmlFor="scndHolderDisability">Disability *</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeScndHolderDisability}
            inputProps={{
              name: 'scndHolderDisability',
              id: 'scndHolderDisability',
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
          <div id="disabilityTypeDivJH1" className="hide-me">
            <TextField
              required
              className={classToBeApplied}
              inputProps={{
                name: 'scndHolderDisabilityType',
                id: 'scndHolderDisabilityType',
              }}
              label="Disability Type"
              onChange={handleChangeScndHolderDisabilityType}
              value={disabilityType}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder1DisabilityPolExposureFields;
