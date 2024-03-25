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

function JntHolder1OccupationFields({ formData, classToBeApplied }) {
  const scndHolderOccupationDDValues = Dropdowns('occupation');
  const [othrOccupationJH1, setOthrOccupationJH1] = useState('');

  function handleChangeScndHolderOccupation(e) {
    formData.occupation_scnd_account_holder = UpCase(e.target.value);
    formData.other_occupation_scnd_account_holder = '';
    setOthrOccupationJH1('');
    if (e.target.value === 'OTHER') {
      document
        .getElementById('otherScndHolderOccupationDiv')
        .classList.remove('hide-me');
    } else {
      document
        .getElementById('otherScndHolderOccupationDiv')
        .classList.add('hide-me');
    }
  }

  function handleChangeScndHolderOccupationOth(e) {
    formData.other_occupation_scnd_account_holder = UpCase(e.target.value);
    setOthrOccupationJH1(UpCase(e.target.value));
  }

  return (
    <Grid container className="textFieldFormTop">
      <Grid item xs={3}>
        <InputLabel htmlFor="scndHolderOccupation">Occupation *</InputLabel>
        <Select
          className={classToBeApplied}
          onChange={handleChangeScndHolderOccupation}
          inputProps={{
            name: 'scndHolderOccupation',
            id: 'scndHolderOccupation',
          }}
        >
          {scndHolderOccupationDDValues.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item xs={3}>
        <div id="otherScndHolderOccupationDiv" className="hide-me">
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'scndHolderOtherOccupation',
              id: 'scndHolderOtherOccupation',
            }}
            label="Other Occupation"
            onChange={handleChangeScndHolderOccupationOth}
            value={othrOccupationJH1}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default JntHolder1OccupationFields;
