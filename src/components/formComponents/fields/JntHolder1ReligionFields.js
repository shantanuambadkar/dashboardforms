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

function JntHolder1ReligionFields({ formData, classToBeApplied }) {
  const scndHolderReligionDDValues = Dropdowns('religion');
  const [othrReligionJH1, setOthrReligionJH1] = useState('');

  function handleChangeScndHolderReligion(e) {
    formData.religion_scnd_account_holder = UpCase(e.target.value);
    formData.other_religion_scnd_account_holder = '';
    setOthrReligionJH1('');
    if (e.target.value === 'OTHER') {
      document
        .getElementById('otherScndHolderReligionDiv')
        .classList.remove('hide-me');
    } else {
      document
        .getElementById('otherScndHolderReligionDiv')
        .classList.add('hide-me');
    }
  }

  function handleChangeScndHolderReligionOth(e) {
    formData.other_religion_scnd_account_holder = UpCase(e.target.value);
    setOthrReligionJH1(UpCase(e.target.value));
  }

  return (
    <Grid container className="textFieldFormTop">
      <Grid item xs={3}>
        <InputLabel htmlFor="scndHolderReligion">Religion *</InputLabel>
        <Select
          className={classToBeApplied}
          onChange={handleChangeScndHolderReligion}
          inputProps={{
            name: 'scndHolderReligion',
            id: 'scndHolderReligion',
          }}
        >
          {scndHolderReligionDDValues.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item xs={3}>
        <div id="otherScndHolderReligionDiv" className="hide-me">
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'scndHolderOtherReligion',
              id: 'scndHolderOtherReligion',
            }}
            label="Other Religion"
            onChange={handleChangeScndHolderReligionOth}
            value={othrReligionJH1}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default JntHolder1ReligionFields;
