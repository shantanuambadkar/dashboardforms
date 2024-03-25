import {
  Grid,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import '../../../css/Common.css';
import '../../../css/Fields.css';
import UpCase from './UpCase';
import Dropdowns from '../reusableComponents/Dropdowns';

function JntHolder2PermanentAddress({ classToBeApplied, formData }) {
  const thrdHolderPermCountry = 'INDIA';
  const yesNoDDValues = Dropdowns('yesNo');
  formData.perm_country_thrd_account_holder = thrdHolderPermCountry;

  function handleChangeThrdHolderAddress(e) {
    formData.perm_address_thrd_account_holder = UpCase(e.target.value);
  }

  function handleChangeThrdHolderCity(e) {
    formData.perm_city_thrd_account_holder = UpCase(e.target.value);
  }

  function handleChangeThrdHolderDist(e) {
    formData.perm_district_thrd_account_holder = UpCase(e.target.value);
  }

  function handleChangeThrdHolderPin(e) {
    formData.perm_pin_thrd_account_holder = UpCase(e.target.value);
  }

  function handleChangeThrdHolderState(e) {
    formData.perm_state_thrd_account_holder = UpCase(e.target.value);
  }

  function handleChangePermCorrAddress(e) {
    formData.perm_address_same_as_corr_address_thrd_account_holder = UpCase(
      e.target.value
    );
    if (e.target.value === 'NO') {
      document
        .getElementById('thrdHolderpermanentAddrDiv')
        .classList.remove('hide-me');
    } else {
      document
        .getElementById('thrdHolderpermanentAddrDiv')
        .classList.add('hide-me');
    }
  }

  return (
    <div className="textFieldFormTop">
      <Grid container className="textFieldFormTop">
        <Grid item xs={4}>
          <InputLabel htmlFor="permCorrAddress">
            Is Corrospondence Address same as Permanent Address? *
          </InputLabel>
          <Select
            onChange={handleChangePermCorrAddress}
            inputProps={{
              name: 'permCorrAddress',
              id: 'permCorrAddress',
            }}
            className={classToBeApplied}
          >
            {yesNoDDValues.map((value, index) => {
              return (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
      </Grid>
      <div id="thrdHolderpermanentAddrDiv" className="hide-me">
        <Grid container className="textFieldFormTop">
          <h5> Permanent Address</h5>
        </Grid>
        <Grid container className="textFieldFormTop">
          <Grid item xs={6}>
            <TextField
              required
              className={classToBeApplied}
              inputProps={{
                name: 'thrdHolderPermAddress',
                id: 'thrdHolderPermAddress',
              }}
              label="Address"
              onChange={handleChangeThrdHolderAddress}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              className={classToBeApplied}
              inputProps={{
                name: 'thrdHolderPermCity',
                id: 'thrdHolderPermCity',
              }}
              label="City"
              onChange={handleChangeThrdHolderCity}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              className={classToBeApplied}
              inputProps={{
                name: 'thrdHolderPermDist',
                id: 'thrdHolderPermDist',
              }}
              label="District"
              onChange={handleChangeThrdHolderDist}
            />
          </Grid>
        </Grid>
        <Grid container className="textFieldFormTop">
          <Grid item xs={3}>
            <TextField
              required
              className={classToBeApplied}
              type="number"
              inputProps={{
                name: 'thrdHolderPermPin',
                id: 'thrdHolderPermPin',
                maxLength: 6,
              }}
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 6);
              }}
              label="Pin Code"
              onChange={handleChangeThrdHolderPin}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              className={classToBeApplied}
              inputProps={{
                name: 'thrdHolderPermState',
                id: 'thrdHolderPermState',
              }}
              label="State"
              onChange={handleChangeThrdHolderState}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              className={classToBeApplied}
              value={thrdHolderPermCountry}
              inputProps={{
                name: 'thrdHolderPermCountry',
                id: 'thrdHolderPermCountry',
                readOnly: true,
              }}
              label="Country"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default JntHolder2PermanentAddress;
