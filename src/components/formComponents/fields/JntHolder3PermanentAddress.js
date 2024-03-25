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

function JntHolder3PermanentAddress({ classToBeApplied, formData }) {
  const forthHolderPermCountry = 'INDIA';
  const yesNoDDValues = Dropdowns('yesNo');
  formData.perm_country_forth_account_holder = forthHolderPermCountry;

  function handleChangeForthHolderAddress(e) {
    formData.perm_address_forth_account_holder = UpCase(e.target.value);
  }

  function handleChangeForthHolderCity(e) {
    formData.perm_city_forth_account_holder = UpCase(e.target.value);
  }

  function handleChangeForthHolderDist(e) {
    formData.perm_district_forth_account_holder = UpCase(e.target.value);
  }

  function handleChangeForthHolderPin(e) {
    formData.perm_pin_forth_account_holder = UpCase(e.target.value);
  }

  function handleChangeForthHolderState(e) {
    formData.perm_state_forth_account_holder = UpCase(e.target.value);
  }

  function handleChangePermCorrAddress(e) {
    formData.perm_address_same_as_corr_address_forth_account_holder = UpCase(
      e.target.value
    );
    if (e.target.value === 'NO') {
      document
        .getElementById('forthHolderpermanentAddrDiv')
        .classList.remove('hide-me');
    } else {
      document
        .getElementById('forthHolderpermanentAddrDiv')
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
      <div id="forthHolderpermanentAddrDiv" className="hide-me">
        <Grid container className="textFieldFormTop">
          <h5> Permanent Address</h5>
        </Grid>
        <Grid container className="textFieldFormTop">
          <Grid item xs={6}>
            <TextField
              required
              className={classToBeApplied}
              inputProps={{
                name: 'forthHolderPermAddress',
                id: 'forthHolderPermAddress',
              }}
              label="Address"
              onChange={handleChangeForthHolderAddress}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              className={classToBeApplied}
              inputProps={{
                name: 'forthHolderPermCity',
                id: 'forthHolderPermCity',
              }}
              label="City"
              onChange={handleChangeForthHolderCity}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              className={classToBeApplied}
              inputProps={{
                name: 'forthHolderPermDist',
                id: 'forthHolderPermDist',
              }}
              label="District"
              onChange={handleChangeForthHolderDist}
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
                name: 'forthHolderPermPin',
                id: 'forthHolderPermPin',
                maxLength: 6,
              }}
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 6);
              }}
              label="Pin Code"
              onChange={handleChangeForthHolderPin}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              className={classToBeApplied}
              inputProps={{
                name: 'forthHolderPermState',
                id: 'forthHolderPermState',
              }}
              label="State"
              onChange={handleChangeForthHolderState}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              className={classToBeApplied}
              value={forthHolderPermCountry}
              inputProps={{
                name: 'forthHolderPermCountry',
                id: 'forthHolderPermCountry',
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

export default JntHolder3PermanentAddress;
