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

function JntHolder1CategoryFields({ formData, classToBeApplied }) {
  const scndHolderCategoryDDValues = Dropdowns('category');
  const [othrCategoryJH1, setOthrCategoryJH1] = useState('');

  function handleChangeScndHolderCategory(e) {
    formData.category_scnd_account_holder = UpCase(e.target.value);
    formData.other_category_scnd_account_holder = '';
    setOthrCategoryJH1('');
    if (e.target.value === 'OTHER') {
      document
        .getElementById('otherScndHolderCategoryDiv')
        .classList.remove('hide-me');
    } else {
      document
        .getElementById('otherScndHolderCategoryDiv')
        .classList.add('hide-me');
    }
  }

  function handleChangeScndHolderCategoryOth(e) {
    formData.other_category_scnd_account_holder = UpCase(e.target.value);
    setOthrCategoryJH1(UpCase(e.target.value));
  }

  return (
    <Grid container className="textFieldFormTop">
      <Grid item xs={3}>
        <InputLabel htmlFor="scndHolderCategory">Category *</InputLabel>
        <Select
          className={classToBeApplied}
          onChange={handleChangeScndHolderCategory}
          inputProps={{
            name: 'scndHolderCategory',
            id: 'scndHolderCategory',
          }}
        >
          {scndHolderCategoryDDValues.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item xs={3}>
        <div id="otherScndHolderCategoryDiv" className="hide-me">
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'scndHolderOtherCategory',
              id: 'scndHolderOtherCategory',
            }}
            label="Other Category"
            onChange={handleChangeScndHolderCategoryOth}
            value={othrCategoryJH1}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default JntHolder1CategoryFields;
