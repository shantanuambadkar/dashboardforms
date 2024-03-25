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

function JntHolder3ReligionFields({ formData, classToBeApplied }) {
  const forthHolderReligionDDValues = Dropdowns('religion');
  const [othrReligionJH3, setOthrReligionJH3] = useState('');

  function handleChangeForthHolderReligion(e) {
    formData.religion_forth_account_holder = UpCase(e.target.value);
    formData.other_religion_forth_account_holder = '';
    setOthrReligionJH3('');
    if (e.target.value === 'OTHER') {
      document
        .getElementById('otherForthHolderReligionDiv')
        .classList.remove('hide-me');
    } else {
      document
        .getElementById('otherForthHolderReligionDiv')
        .classList.add('hide-me');
    }
  }

  function handleChangeForthHolderReligionOth(e) {
    formData.other_religion_forth_account_holder = UpCase(e.target.value);
    setOthrReligionJH3(UpCase(e.target.value));
  }

  return (
    <Grid container className="textFieldFormTop">
      <Grid item xs={3}>
        <InputLabel htmlFor="forthHolderReligion">Religion *</InputLabel>
        <Select
          className={classToBeApplied}
          onChange={handleChangeForthHolderReligion}
          inputProps={{
            name: 'forthHolderReligion',
            id: 'forthHolderReligion',
          }}
        >
          {forthHolderReligionDDValues.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item xs={3}>
        <div id="otherForthHolderReligionDiv" className="hide-me">
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'forthHolderOtherReligion',
              id: 'forthHolderOtherReligion',
            }}
            label="Other Religion"
            onChange={handleChangeForthHolderReligionOth}
            value={othrReligionJH3}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default JntHolder3ReligionFields;
