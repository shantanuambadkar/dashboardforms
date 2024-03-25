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

function JntHolder2OccupationFields({ formData, classToBeApplied }) {
  const thrdHolderOccupationDDValues = Dropdowns('occupation');
  const [othrOccupationJH2, setOthrOccupationJH2] = useState('');

  function handleChangeThrdHolderOccupation(e) {
    formData.occupation_thrd_account_holder = UpCase(e.target.value);
    formData.other_occupation_thrd_account_holder = '';
    setOthrOccupationJH2('');
    if (e.target.value === 'OTHER') {
      document
        .getElementById('otherThrdHolderOccupationDiv')
        .classList.remove('hide-me');
    } else {
      document
        .getElementById('otherThrdHolderOccupationDiv')
        .classList.add('hide-me');
    }
  }

  function handleChangeThrdHolderOccupationOth(e) {
    formData.other_occupation_thrd_account_holder = UpCase(e.target.value);
    setOthrOccupationJH2(UpCase(e.target.value));
  }

  return (
    <Grid container className="textFieldFormTop">
      <Grid item xs={3}>
        <InputLabel htmlFor="thrdHolderOccupation">Occupation *</InputLabel>
        <Select
          className={classToBeApplied}
          onChange={handleChangeThrdHolderOccupation}
          inputProps={{
            name: 'thrdHolderOccupation',
            id: 'thrdHolderOccupation',
          }}
        >
          {thrdHolderOccupationDDValues.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item xs={3}>
        <div id="otherThrdHolderOccupationDiv" className="hide-me">
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'thrdHolderOtherOccupation',
              id: 'thrdHolderOtherOccupation',
            }}
            label="Other Occupation"
            onChange={handleChangeThrdHolderOccupationOth}
            value={othrOccupationJH2}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default JntHolder2OccupationFields;
