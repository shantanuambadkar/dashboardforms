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

function JntHolder4DisabilityPolExposureFields({ formData, classToBeApplied }) {
  const [disabilityType, setDisabilityType] = useState('');
  const yesNoDDValues = Dropdowns('yesNo');

  function handleChangeFifthHolderDisability(e) {
    formData.disability_fifth_account_holder = UpCase(e.target.value);
    formData.disability_details_fifth_account_holder = '';
    setDisabilityType('');
    if (e.target.value === 'YES') {
      document
        .getElementById('disabilityTypeDivJH4')
        .classList.remove('hide-me');
    } else {
      document.getElementById('disabilityTypeDivJH4').classList.add('hide-me');
    }
  }

  function handleChangeFifthHolderDisabilityType(e) {
    setDisabilityType(UpCase(e.target.value));
    formData.disability_details_fifth_account_holder = UpCase(e.target.value);
  }

  function handleChangeFifthHolderPoliticalExposure(e) {
    formData.political_exposure_fifth_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="fifthHolderPoliticalExposure">
            Political Exposure
          </InputLabel>
          <Select
            className="field-width"
            onChange={handleChangeFifthHolderPoliticalExposure}
            inputProps={{
              name: 'fifthHolderPoliticalExposure',
              id: 'fifthHolderPoliticalExposure',
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
          <InputLabel htmlFor="fifthHolderDisability">Disability *</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeFifthHolderDisability}
            inputProps={{
              name: 'fifthHolderDisability',
              id: 'fifthHolderDisability',
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
          <div id="disabilityTypeDivJH4" className="hide-me">
            <TextField
              required
              className={classToBeApplied}
              inputProps={{
                name: 'fifthHolderDisabilityType',
                id: 'fifthHolderDisabilityType',
              }}
              label="Disability Type"
              onChange={handleChangeFifthHolderDisabilityType}
              value={disabilityType}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder4DisabilityPolExposureFields;
