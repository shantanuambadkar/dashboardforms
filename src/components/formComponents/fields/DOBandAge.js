import React, { useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import '../../../css/Common.css';
import '../../../css/Fields.css';
import UpCase from './UpCase';
import DateFormat from '../../actions/DateFormat';
import DOBValidations from '../../actions/DOBValidations';

function DOBandAge({ classToBeApplied, formData, formName }) {
  /* const formattedDate = (date) => {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-GB', options);
  }; */
  const [custAge, setCustAge] = useState('');
  const nationalityDefault = 'INDIAN';
  formData.nationality_fst_account_holder = UpCase(nationalityDefault);

  function handleDOBChange(e) {
    formData.dob_account_holder = UpCase(e.target.value);
    setCustAge(
      DOBValidations(formData.dob_account_holder, formName, 'sendAge')
    );
    formData.age_account_holder = DOBValidations(
      formData.dob_account_holder,
      formName,
      'sendAge'
    );
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <TextField
            required
            id="custDob"
            label="DOB"
            type="date"
            className={classToBeApplied}
            onChange={handleDOBChange}
            sx={{ width: 225 }}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              max: DateFormat(new Date()),
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Age (in Years)"
            className={classToBeApplied}
            value={custAge}
            inputProps={{
              id: 'custAge',
              name: 'custAge',
              readOnly: true,
            }}
          />
        </Grid>
        {formName === 'savings' ? (
          <Grid item xs={3}>
            <TextField
              required
              className={classToBeApplied}
              value={nationalityDefault}
              inputProps={{
                name: 'custNationality',
                id: 'custNationality',
                readOnly: true,
              }}
              label="Nationality"
            />
          </Grid>
        ) : (
          ''
        )}
      </Grid>
    </div>
  );
}

export default DOBandAge;
