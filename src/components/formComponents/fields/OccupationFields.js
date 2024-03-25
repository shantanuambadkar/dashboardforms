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

function OccupationFields({ formName, formData, classToBeApplied }) {
  const custOccupationDDValues = Dropdowns('occupation');
  const [othrOccupation, setOthrOccupation] = useState('');

  function handleChangeCustOccupation(e) {
    formData.occupation_fst_account_holder = UpCase(e.target.value);
    if (e.target.value === 'OTHER') {
      document
        .getElementById('othercustOccupationDiv')
        .classList.remove('hide-me');
    } else {
      document
        .getElementById('othercustOccupationDiv')
        .classList.add('hide-me');
      formData.other_occupation_fst_account_holder = '';
      setOthrOccupation('');
    }
  }

  function handleChangeCustOccupationOth(e) {
    formData.other_occupation_fst_account_holder = UpCase(e.target.value);
    setOthrOccupation(UpCase(e.target.value));
  }

  return (
    <Grid container className="textFieldFormTop">
      <Grid item xs={3}>
        <InputLabel htmlFor="custOccupation">Occupation *</InputLabel>
        <Select
          className={classToBeApplied}
          onChange={handleChangeCustOccupation}
          inputProps={{
            name: 'custOccupation',
            id: 'custOccupation',
          }}
        >
          {custOccupationDDValues.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item xs={3}>
        <div id="othercustOccupationDiv" className="hide-me">
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'custOtherOccupation',
              id: 'custOtherOccupation',
            }}
            label="Other Occupation"
            onChange={handleChangeCustOccupationOth}
            value={othrOccupation}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default OccupationFields;
