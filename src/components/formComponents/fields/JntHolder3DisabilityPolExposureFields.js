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

function JntHolder3DisabilityPolExposureFields({ formData, classToBeApplied }) {
  const [disabilityType, setDisabilityType] = useState('');
  const yesNoDDValues = Dropdowns('yesNo');

  function handleChangeForthHolderDisability(e) {
    formData.disability_forth_account_holder = UpCase(e.target.value);
    formData.disability_details_forth_account_holder = '';
    setDisabilityType('');
    if (e.target.value === 'YES') {
      document
        .getElementById('disabilityTypeDivJH3')
        .classList.remove('hide-me');
    } else {
      document.getElementById('disabilityTypeDivJH3').classList.add('hide-me');
    }
  }

  function handleChangeForthHolderDisabilityType(e) {
    setDisabilityType(UpCase(e.target.value));
    formData.disability_details_forth_account_holder = UpCase(e.target.value);
  }

  function handleChangeForthHolderPoliticalExposure(e) {
    formData.political_exposure_forth_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="forthHolderPoliticalExposure">
            Political Exposure
          </InputLabel>
          <Select
            className="field-width"
            onChange={handleChangeForthHolderPoliticalExposure}
            inputProps={{
              name: 'forthHolderPoliticalExposure',
              id: 'forthHolderPoliticalExposure',
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
          <InputLabel htmlFor="forthHolderDisability">Disability *</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeForthHolderDisability}
            inputProps={{
              name: 'forthHolderDisability',
              id: 'forthHolderDisability',
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
          <div id="disabilityTypeDivJH3" className="hide-me">
            <TextField
              required
              className={classToBeApplied}
              inputProps={{
                name: 'forthHolderDisabilityType',
                id: 'forthHolderDisabilityType',
              }}
              label="Disability Type"
              onChange={handleChangeForthHolderDisabilityType}
              value={disabilityType}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder3DisabilityPolExposureFields;
