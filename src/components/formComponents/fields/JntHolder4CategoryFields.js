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

function JntHolder4CategoryFields({ formData, classToBeApplied }) {
  const fifthHolderCategoryDDValues = Dropdowns('category');
  const [othrCategoryJH4, setOthrCategoryJH4] = useState('');

  function handleChangeFifthHolderCategory(e) {
    formData.category_fifth_account_holder = UpCase(e.target.value);
    formData.other_category_fifth_account_holder = '';
    setOthrCategoryJH4('');
    if (e.target.value === 'OTHER') {
      document
        .getElementById('otherFifthHolderCategoryDiv')
        .classList.remove('hide-me');
    } else {
      document
        .getElementById('otherFifthHolderCategoryDiv')
        .classList.add('hide-me');
    }
  }

  function handleChangeFifthHolderCategoryOth(e) {
    formData.other_category_fifth_account_holder = UpCase(e.target.value);
    setOthrCategoryJH4(UpCase(e.target.value));
  }

  return (
    <Grid container className="textFieldFormTop">
      <Grid item xs={3}>
        <InputLabel htmlFor="fifthHolderCategory">Category *</InputLabel>
        <Select
          className={classToBeApplied}
          onChange={handleChangeFifthHolderCategory}
          inputProps={{
            name: 'fifthHolderCategory',
            id: 'fifthHolderCategory',
          }}
        >
          {fifthHolderCategoryDDValues.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item xs={3}>
        <div id="otherFifthHolderCategoryDiv" className="hide-me">
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'fifthHolderOtherCategory',
              id: 'fifthHolderOtherCategory',
            }}
            label="Other Category"
            onChange={handleChangeFifthHolderCategoryOth}
            value={othrCategoryJH4}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default JntHolder4CategoryFields;
