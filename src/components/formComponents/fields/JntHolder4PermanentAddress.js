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

function JntHolder4PermanentAddress({ classToBeApplied, formData }) {
  const fifthHolderPermCountry = 'INDIA';
  const yesNoDDValues = Dropdowns('yesNo');
  formData.perm_country_fifth_account_holder = fifthHolderPermCountry;

  function handleChangeFifthHolderAddress(e) {
    formData.perm_address_fifth_account_holder = UpCase(e.target.value);
  }

  function handleChangeFifthHolderCity(e) {
    formData.perm_city_fifth_account_holder = UpCase(e.target.value);
  }

  function handleChangeFifthHolderDist(e) {
    formData.perm_district_fifth_account_holder = UpCase(e.target.value);
  }

  function handleChangeFifthHolderPin(e) {
    formData.perm_pin_fifth_account_holder = UpCase(e.target.value);
  }

  function handleChangeFifthHolderState(e) {
    formData.perm_state_fifth_account_holder = UpCase(e.target.value);
  }

  function handleChangePermCorrAddress(e) {
    formData.perm_address_same_as_corr_address_fifth_account_holder = UpCase(
      e.target.value
    );
    if (e.target.value === 'NO') {
      document
        .getElementById('fifthHolderpermanentAddrDiv')
        .classList.remove('hide-me');
    } else {
      document
        .getElementById('fifthHolderpermanentAddrDiv')
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
      <div id="fifthHolderpermanentAddrDiv" className="hide-me">
        <Grid container className="textFieldFormTop">
          <h5> Permanent Address</h5>
        </Grid>
        <Grid container className="textFieldFormTop">
          <Grid item xs={6}>
            <TextField
              required
              className={classToBeApplied}
              inputProps={{
                name: 'fifthHolderPermAddress',
                id: 'fifthHolderPermAddress',
              }}
              label="Address"
              onChange={handleChangeFifthHolderAddress}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              className={classToBeApplied}
              inputProps={{
                name: 'fifthHolderPermCity',
                id: 'fifthHolderPermCity',
              }}
              label="City"
              onChange={handleChangeFifthHolderCity}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              className={classToBeApplied}
              inputProps={{
                name: 'fifthHolderPermDist',
                id: 'fifthHolderPermDist',
              }}
              label="District"
              onChange={handleChangeFifthHolderDist}
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
                name: 'fifthHolderPermPin',
                id: 'fifthHolderPermPin',
                maxLength: 6,
              }}
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 6);
              }}
              label="Pin Code"
              onChange={handleChangeFifthHolderPin}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              className={classToBeApplied}
              inputProps={{
                name: 'fifthHolderPermState',
                id: 'fifthHolderPermState',
              }}
              label="State"
              onChange={handleChangeFifthHolderState}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              className={classToBeApplied}
              value={fifthHolderPermCountry}
              inputProps={{
                name: 'fifthHolderPermCountry',
                id: 'fifthHolderPermCountry',
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

export default JntHolder4PermanentAddress;
