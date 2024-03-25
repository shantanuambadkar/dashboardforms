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

function JntHolder4ReligionFields({ formData, classToBeApplied }) {
  const fifthHolderReligionDDValues = Dropdowns('religion');
  const [othrReligionJH4, setOthrReligionJH4] = useState('');

  function handleChangeFifthHolderReligion(e) {
    formData.religion_fifth_account_holder = UpCase(e.target.value);
    formData.other_religion_fifth_account_holder = '';
    setOthrReligionJH4('');
    if (e.target.value === 'OTHER') {
      document
        .getElementById('otherFifthHolderReligionDiv')
        .classList.remove('hide-me');
    } else {
      document
        .getElementById('otherFifthHolderReligionDiv')
        .classList.add('hide-me');
    }
  }

  function handleChangeFifthHolderReligionOth(e) {
    formData.other_religion_fifth_account_holder = UpCase(e.target.value);
    setOthrReligionJH4(UpCase(e.target.value));
  }

  return (
    <Grid container className="textFieldFormTop">
      <Grid item xs={3}>
        <InputLabel htmlFor="fifthHolderReligion">Religion *</InputLabel>
        <Select
          className={classToBeApplied}
          onChange={handleChangeFifthHolderReligion}
          inputProps={{
            name: 'fifthHolderReligion',
            id: 'fifthHolderReligion',
          }}
        >
          {fifthHolderReligionDDValues.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item xs={3}>
        <div id="otherFifthHolderReligionDiv" className="hide-me">
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'fifthHolderOtherReligion',
              id: 'fifthHolderOtherReligion',
            }}
            label="Other Religion"
            onChange={handleChangeFifthHolderReligionOth}
            value={othrReligionJH4}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default JntHolder4ReligionFields;
