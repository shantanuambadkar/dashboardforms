import React from 'react';
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

function EducationFields({ formName, formData, classToBeApplied }) {
  const custEducationDDValue = Dropdowns('education');
  const custMarStatusDDValue = Dropdowns('maritalStatus');
  const custPoliticalExposureDDValue = Dropdowns('yesNo');

  function handleChangeCustEducation(e) {
    formData.qualification_fst_account_holder = UpCase(e.target.value);
  }
  function handleChangeCustAnnualIncome(e) {
    formData.annual_income_fst_account_holder = UpCase(e.target.value);
  }
  function handleChangeCustMarStatus(e) {
    formData.marital_status_fst_account_holder = UpCase(e.target.value);
  }
  function handleChangeCustPoliticalExposure(e) {
    formData.political_exposure_fst_account_holder = UpCase(e.target.value);
  }

  return (
    <Grid container className="textFieldFormTop">
      <Grid item xs={3}>
        <InputLabel htmlFor="custEducation">
          Educational Qualification
        </InputLabel>
        <Select
          className={classToBeApplied}
          onChange={handleChangeCustEducation}
          inputProps={{
            name: 'custEducation',
            id: 'custEducation',
          }}
        >
          {custEducationDDValue.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
      <Grid item xs={3}>
        <TextField
          className={classToBeApplied}
          inputProps={{
            name: 'custAnnualIncome',
            id: 'custAnnualIncome',
          }}
          label="Annual Income"
          onChange={handleChangeCustAnnualIncome}
        />
      </Grid>
      <Grid item xs={3}>
        <InputLabel htmlFor="custMarStatus">Marital Status</InputLabel>
        <Select
          className="field-width"
          onChange={handleChangeCustMarStatus}
          inputProps={{
            name: 'custMarStatus',
            id: 'custMarStatus',
          }}
        >
          {custMarStatusDDValue.map((value, index) => {
            return <MenuItem value={value}>{value}</MenuItem>;
          })}
        </Select>
      </Grid>
      <Grid item xs={3}>
        <InputLabel htmlFor="custPoliticalExposure">
          Political Exposure
        </InputLabel>
        <Select
          className="field-width"
          onChange={handleChangeCustPoliticalExposure}
          inputProps={{
            name: 'custPoliticalExposure',
            id: 'custPoliticalExposure',
          }}
        >
          {custPoliticalExposureDDValue.map((value) => {
            return (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
    </Grid>
  );
}

export default EducationFields;
