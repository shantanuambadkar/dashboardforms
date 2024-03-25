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

function CategoryFields({ formName, formData, classToBeApplied }) {
  const custCategoryDDValues = Dropdowns('category');
  const [othrCategory, setOthrCategory] = useState('');

  function handleChangeCustCategory(e) {
    formData.category_fst_account_holder = UpCase(e.target.value);
    if (e.target.value === 'OTHER') {
      document
        .getElementById('othercustCategoryDiv')
        .classList.remove('hide-me');
    } else {
      document.getElementById('othercustCategoryDiv').classList.add('hide-me');
      formData.other_category_fst_account_holder = '';
      setOthrCategory('');
    }
  }

  function handleChangeCustCategoryOth(e) {
    formData.other_category_fst_account_holder = UpCase(e.target.value);
    setOthrCategory(UpCase(e.target.value));
  }

  return (
    <Grid container className="textFieldFormTop">
      <Grid item xs={3}>
        <InputLabel htmlFor="custCategory">Category *</InputLabel>
        <Select
          className={classToBeApplied}
          onChange={handleChangeCustCategory}
          inputProps={{
            name: 'custCategory',
            id: 'custCategory',
          }}
        >
          {custCategoryDDValues.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item xs={3}>
        <div id="othercustCategoryDiv" className="hide-me">
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'custOtherCategory',
              id: 'custOtherCategory',
            }}
            label="Other Category"
            onChange={handleChangeCustCategoryOth}
            value={othrCategory}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default CategoryFields;
