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

function ReligionFields({ formName, formData, classToBeApplied }) {
  const custReligionDDValues = Dropdowns('religion');
  const [othrReligion, setOthrReligion] = useState('');

  function handleChangeCustReligion(e) {
    formData.religion_fst_account_holder = UpCase(e.target.value);
    if (e.target.value === 'OTHER') {
      document
        .getElementById('othercustReligionDiv')
        .classList.remove('hide-me');
    } else {
      document.getElementById('othercustReligionDiv').classList.add('hide-me');
      formData.other_religion_fst_account_holder = '';
      setOthrReligion('');
    }
  }

  function handleChangeCustReligionOth(e) {
    formData.other_religion_fst_account_holder = UpCase(e.target.value);
    setOthrReligion(UpCase(e.target.value));
  }

  return (
    <Grid container className="textFieldFormTop">
      <Grid item xs={3}>
        <InputLabel htmlFor="custReligion">Religion *</InputLabel>
        <Select
          className={classToBeApplied}
          onChange={handleChangeCustReligion}
          inputProps={{
            name: 'custReligion',
            id: 'custReligion',
          }}
        >
          {custReligionDDValues.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item xs={3}>
        <div id="othercustReligionDiv" className="hide-me">
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'custOtherReligion',
              id: 'custOtherReligion',
            }}
            label="Other Religion"
            onChange={handleChangeCustReligionOth}
            value={othrReligion}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default ReligionFields;
