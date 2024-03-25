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

function JntHolder3CategoryFields({ formData, classToBeApplied }) {
  const forthHolderCategoryDDValues = Dropdowns('category');
  const [othrCategoryJH3, setOthrCategoryJH3] = useState('');

  function handleChangeForthHolderCategory(e) {
    formData.category_forth_account_holder = UpCase(e.target.value);
    formData.other_category_forth_account_holder = '';
    setOthrCategoryJH3('');
    if (e.target.value === 'OTHER') {
      document
        .getElementById('otherForthHolderCategoryDiv')
        .classList.remove('hide-me');
    } else {
      document
        .getElementById('otherForthHolderCategoryDiv')
        .classList.add('hide-me');
    }
  }

  function handleChangeForthHolderCategoryOth(e) {
    formData.other_category_forth_account_holder = UpCase(e.target.value);
    setOthrCategoryJH3(UpCase(e.target.value));
  }

  return (
    <Grid container className="textFieldFormTop">
      <Grid item xs={3}>
        <InputLabel htmlFor="forthHolderCategory">Category *</InputLabel>
        <Select
          className={classToBeApplied}
          onChange={handleChangeForthHolderCategory}
          inputProps={{
            name: 'forthHolderCategory',
            id: 'forthHolderCategory',
          }}
        >
          {forthHolderCategoryDDValues.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item xs={3}>
        <div id="otherForthHolderCategoryDiv" className="hide-me">
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'forthHolderOtherCategory',
              id: 'forthHolderOtherCategory',
            }}
            label="Other Category"
            onChange={handleChangeForthHolderCategoryOth}
            value={othrCategoryJH3}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default JntHolder3CategoryFields;
