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

function JntHolder3OccupationFields({ formData, classToBeApplied }) {
  const forthHolderOccupationDDValues = Dropdowns('occupation');
  const [othrOccupationJH3, setOthrOccupationJH3] = useState('');

  function handleChangeForthHolderOccupation(e) {
    formData.occupation_forth_account_holder = UpCase(e.target.value);
    formData.other_occupation_forth_account_holder = '';
    setOthrOccupationJH3('');
    if (e.target.value === 'OTHER') {
      document
        .getElementById('otherForthHolderOccupationDiv')
        .classList.remove('hide-me');
    } else {
      document
        .getElementById('otherForthHolderOccupationDiv')
        .classList.add('hide-me');
    }
  }

  function handleChangeForthHolderOccupationOth(e) {
    formData.other_occupation_forth_account_holder = UpCase(e.target.value);
    setOthrOccupationJH3(UpCase(e.target.value));
  }

  return (
    <Grid container className="textFieldFormTop">
      <Grid item xs={3}>
        <InputLabel htmlFor="forthHolderOccupation">Occupation *</InputLabel>
        <Select
          className={classToBeApplied}
          onChange={handleChangeForthHolderOccupation}
          inputProps={{
            name: 'forthHolderOccupation',
            id: 'forthHolderOccupation',
          }}
        >
          {forthHolderOccupationDDValues.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item xs={3}>
        <div id="otherForthHolderOccupationDiv" className="hide-me">
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'forthHolderOtherOccupation',
              id: 'forthHolderOtherOccupation',
            }}
            label="Other Occupation"
            onChange={handleChangeForthHolderOccupationOth}
            value={othrOccupationJH3}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default JntHolder3OccupationFields;
