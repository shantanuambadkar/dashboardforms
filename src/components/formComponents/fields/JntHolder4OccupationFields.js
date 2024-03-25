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

function JntHolder4OccupationFields({ formData, classToBeApplied }) {
  const fifthHolderOccupationDDValues = Dropdowns('occupation');
  const [othrOccupationJH4, setOthrOccupationJH4] = useState('');

  function handleChangeFifthHolderOccupation(e) {
    formData.occupation_fifth_account_holder = UpCase(e.target.value);
    formData.other_occupation_fifth_account_holder = '';
    setOthrOccupationJH4('');
    if (e.target.value === 'OTHER') {
      document
        .getElementById('otherFifthHolderOccupationDiv')
        .classList.remove('hide-me');
    } else {
      document
        .getElementById('otherFifthHolderOccupationDiv')
        .classList.add('hide-me');
    }
  }

  function handleChangeFifthHolderOccupationOth(e) {
    formData.other_occupation_fifth_account_holder = UpCase(e.target.value);
    setOthrOccupationJH4(UpCase(e.target.value));
  }

  return (
    <Grid container className="textFieldFormTop">
      <Grid item xs={3}>
        <InputLabel htmlFor="fifthHolderOccupation">Occupation *</InputLabel>
        <Select
          className={classToBeApplied}
          onChange={handleChangeFifthHolderOccupation}
          inputProps={{
            name: 'fifthHolderOccupation',
            id: 'fifthHolderOccupation',
          }}
        >
          {fifthHolderOccupationDDValues.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item xs={3}>
        <div id="otherFifthHolderOccupationDiv" className="hide-me">
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'fifthHolderOtherOccupation',
              id: 'fifthHolderOtherOccupation',
            }}
            label="Other Occupation"
            onChange={handleChangeFifthHolderOccupationOth}
            value={othrOccupationJH4}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default JntHolder4OccupationFields;
