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

function JntHolder2DisabilityPolExposureFields({ formData, classToBeApplied }) {
  const [disabilityType, setDisabilityType] = useState('');
  const yesNoDDValues = Dropdowns('yesNo');

  function handleChangeThrdHolderDisability(e) {
    formData.disability_thrd_account_holder = UpCase(e.target.value);
    formData.disability_details_thrd_account_holder = '';
    setDisabilityType('');
    if (e.target.value === 'YES') {
      document
        .getElementById('disabilityTypeDivJH2')
        .classList.remove('hide-me');
    } else {
      document.getElementById('disabilityTypeDivJH2').classList.add('hide-me');
    }
  }

  function handleChangeThrdHolderDisabilityType(e) {
    setDisabilityType(UpCase(e.target.value));
    formData.disability_details_thrd_account_holder = UpCase(e.target.value);
  }

  function handleChangeThrdHolderPoliticalExposure(e) {
    formData.political_exposure_thrd_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="thrdHolderPoliticalExposure">
            Political Exposure
          </InputLabel>
          <Select
            className="field-width"
            onChange={handleChangeThrdHolderPoliticalExposure}
            inputProps={{
              name: 'thrdHolderPoliticalExposure',
              id: 'thrdHolderPoliticalExposure',
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
          <InputLabel htmlFor="thrdHolderDisability">Disability *</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeThrdHolderDisability}
            inputProps={{
              name: 'thrdHolderDisability',
              id: 'thrdHolderDisability',
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
          <div id="disabilityTypeDivJH2" className="hide-me">
            <TextField
              required
              className={classToBeApplied}
              inputProps={{
                name: 'thrdHolderDisabilityType',
                id: 'thrdHolderDisabilityType',
              }}
              label="Disability Type"
              onChange={handleChangeThrdHolderDisabilityType}
              value={disabilityType}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder2DisabilityPolExposureFields;
