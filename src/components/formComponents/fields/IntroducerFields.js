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

function IntroducerFields({ classToBeApplied, formName, formData }) {
  const salutationDDValues = Dropdowns('title');
  const branchDDValues = Dropdowns('branch');
  const accTypeDDValues = Dropdowns('accountType');
  const introCountry = 'INDIA';

  function handleChangeIntroSalutation(e) {
    formData.title_introducer = UpCase(e.target.value);
  }
  function setIntroducerFirstName(e) {
    formData.fname_introducer = UpCase(e.target.value);
  }
  function setIntroducerMiddleName(e) {
    formData.mname_introducer = UpCase(e.target.value);
  }
  function setIntroducerLastName(e) {
    formData.lname_introducer = UpCase(e.target.value);
  }
  function setIntroducerMobile(e) {
    formData.mobile_introducer = e.target.value;
  }
  function handleChangeIntroKnownDate(e) {
    formData.month_year_introducer = e.target.value;
  }
  function handleChangeIntroAddress(e) {
    formData.address_introducer = UpCase(e.target.value);
  }
  function handleChangeIntroCity(e) {
    formData.city_introducer = UpCase(e.target.value);
  }
  function handleChangeIntroDistrict(e) {
    formData.district_introducer = UpCase(e.target.value);
  }
  function handleChangeIntroPin(e) {
    formData.pin_introducer = UpCase(e.target.value);
  }
  function handleChangeIntroState(e) {
    formData.state_introducer = UpCase(e.target.value);
  }
  function handleChangeIntroAccType(e) {
    formData.account_type_introducer = UpCase(e.target.value);
  }
  function handleChangeIntroBranch(e) {
    formData.branch_introducer = UpCase(e.target.value);
  }
  function handleChangeIntroAccNo(e) {
    formData.sb_account_introducer = UpCase(e.target.value);
  }

  function formatMonthYear(date) {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    return `${year}-${month}`;
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="introSalutation">Title</InputLabel>
          <Select
            className={classToBeApplied}
            onChange={handleChangeIntroSalutation}
            inputProps={{
              name: 'introSalutation',
              id: 'introSalutation',
            }}
          >
            {salutationDDValues.map((value) => {
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
              name: 'introFirstName',
              id: 'introFirstName',
              maxLength: 30,
            }}
            label="First Name"
            onChange={setIntroducerFirstName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'introMiddleName',
              id: 'introMiddleName',
              maxLength: 30,
            }}
            label="Middle Name"
            onChange={setIntroducerMiddleName}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'introLastName',
              id: 'introLastName',
              maxLength: 30,
            }}
            label="Last Name"
            onChange={setIntroducerLastName}
          />
        </Grid>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            type="number"
            inputProps={{
              name: 'introMobile',
              id: 'introMobile',
              maxLength: 10,
            }}
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 10);
            }}
            label="Mobile"
            onChange={setIntroducerMobile}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            className={classToBeApplied}
            id="introKnownDate"
            label="Known Month and Year"
            type="month"
            onChange={handleChangeIntroKnownDate}
            sx={{ width: 225 }}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              max: formatMonthYear(new Date()),
            }}
          />
        </Grid>
      </Grid>
      <Grid container className="textFieldFormTop">
        <h5>Introducer Address</h5>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={6}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'introAddr',
              id: 'introAddr',
            }}
            label="Address"
            onChange={handleChangeIntroAddress}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'introCity',
              id: 'introCity',
            }}
            label="City"
            onChange={handleChangeIntroCity}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'introDist',
              id: 'introDist',
            }}
            label="District"
            onChange={handleChangeIntroDistrict}
          />
        </Grid>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            type="number"
            inputProps={{
              name: 'introPin',
              id: 'introPin',
              maxLength: 6,
            }}
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 6);
            }}
            label="Pin Code"
            onChange={handleChangeIntroPin}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'introState',
              id: 'introState',
            }}
            label="State"
            onChange={handleChangeIntroState}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            value={introCountry}
            inputProps={{
              name: 'introCountry',
              id: 'introCountry',
              readOnly: true,
            }}
            label="Country"
          />
        </Grid>
      </Grid>
      <Grid container className="textFieldFormTop">
        <h5>Introducer Account Details</h5>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={3}>
          <InputLabel htmlFor="introSalutation">Account Type</InputLabel>
          <Select
            required
            className={classToBeApplied}
            onChange={handleChangeIntroAccType}
            inputProps={{
              name: 'introAccTypeDD',
              id: 'introAccTypeDD',
            }}
          >
            {accTypeDDValues.map((value, index) => {
              return (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid item xs={3}>
          <InputLabel htmlFor="introBranchDD">Branch</InputLabel>
          <Select
            required
            className={classToBeApplied}
            onChange={handleChangeIntroBranch}
            inputProps={{
              name: 'introBranchDD',
              id: 'introBranchDD',
            }}
          >
            {branchDDValues.map((value, index) => {
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
            type="number"
            inputProps={{
              name: 'introAccNumber',
              id: 'introAccNumber',
            }}
            label="Account Number"
            onChange={handleChangeIntroAccNo}
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default IntroducerFields;
