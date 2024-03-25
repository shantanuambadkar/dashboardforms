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

function JntHolder2CategoryFields({ formData, classToBeApplied }) {
  const thrdHolderCategoryDDValues = Dropdowns('category');
  const [othrCategoryJH2, setOthrCategoryJH2] = useState('');

  function handleChangeThrdHolderCategory(e) {
    formData.category_thrd_account_holder = UpCase(e.target.value);
    formData.other_category_thrd_account_holder = '';
    setOthrCategoryJH2('');
    if (e.target.value === 'OTHER') {
      document
        .getElementById('otherThrdHolderCategoryDiv')
        .classList.remove('hide-me');
    } else {
      document
        .getElementById('otherThrdHolderCategoryDiv')
        .classList.add('hide-me');
    }
  }

  function handleChangeThrdHolderCategoryOth(e) {
    formData.other_category_thrd_account_holder = UpCase(e.target.value);
    setOthrCategoryJH2(UpCase(e.target.value));
  }

  return (
    <Grid container className="textFieldFormTop">
      <Grid item xs={3}>
        <InputLabel htmlFor="thrdHolderCategory">Category *</InputLabel>
        <Select
          className={classToBeApplied}
          onChange={handleChangeThrdHolderCategory}
          inputProps={{
            name: 'thrdHolderCategory',
            id: 'thrdHolderCategory',
          }}
        >
          {thrdHolderCategoryDDValues.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item xs={3}>
        <div id="otherThrdHolderCategoryDiv" className="hide-me">
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'thrdHolderOtherCategory',
              id: 'thrdHolderOtherCategory',
            }}
            label="Other Category"
            onChange={handleChangeThrdHolderCategoryOth}
            value={othrCategoryJH2}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default JntHolder2CategoryFields;
