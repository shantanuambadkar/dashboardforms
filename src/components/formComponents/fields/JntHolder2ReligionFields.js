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

function JntHolder2ReligionFields({ formData, classToBeApplied }) {
  const thrdHolderReligionDDValues = Dropdowns('religion');
  const [othrReligionJH2, setOthrReligionJH2] = useState('');

  function handleChangeThrdHolderReligion(e) {
    formData.religion_thrd_account_holder = UpCase(e.target.value);
    formData.other_religion_thrd_account_holder = '';
    setOthrReligionJH2('');
    if (e.target.value === 'OTHER') {
      document
        .getElementById('otherThrdHolderReligionDiv')
        .classList.remove('hide-me');
    } else {
      document
        .getElementById('otherThrdHolderReligionDiv')
        .classList.add('hide-me');
    }
  }

  function handleChangeThrdHolderReligionOth(e) {
    formData.other_religion_thrd_account_holder = UpCase(e.target.value);
    setOthrReligionJH2(UpCase(e.target.value));
  }

  return (
    <Grid container className="textFieldFormTop">
      <Grid item xs={3}>
        <InputLabel htmlFor="thrdHolderReligion">Religion *</InputLabel>
        <Select
          className={classToBeApplied}
          onChange={handleChangeThrdHolderReligion}
          inputProps={{
            name: 'thrdHolderReligion',
            id: 'thrdHolderReligion',
          }}
        >
          {thrdHolderReligionDDValues.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item xs={3}>
        <div id="otherThrdHolderReligionDiv" className="hide-me">
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'thrdHolderOtherReligion',
              id: 'thrdHolderOtherReligion',
            }}
            label="Other Religion"
            onChange={handleChangeThrdHolderReligionOth}
            value={othrReligionJH2}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default JntHolder2ReligionFields;
