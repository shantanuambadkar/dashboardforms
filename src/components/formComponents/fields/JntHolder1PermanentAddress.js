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

function JntHolder1PermanentAddress({ classToBeApplied, formData }) {
  const scndHolderPermCountry = 'INDIA';
  const yesNoDDValues = Dropdowns('yesNo');
  formData.perm_country_scnd_account_holder = scndHolderPermCountry;

  function handleChangeScndHolderAddress(e) {
    formData.perm_address_scnd_account_holder = UpCase(e.target.value);
  }

  function handleChangeScndHolderCity(e) {
    formData.perm_city_scnd_account_holder = UpCase(e.target.value);
  }

  function handleChangeScndHolderDist(e) {
    formData.perm_district_scnd_account_holder = UpCase(e.target.value);
  }

  function handleChangeScndHolderPin(e) {
    formData.perm_pin_scnd_account_holder = UpCase(e.target.value);
  }

  function handleChangeScndHolderState(e) {
    formData.perm_state_scnd_account_holder = UpCase(e.target.value);
  }

  function handleChangePermCorrAddress(e) {
    formData.perm_address_same_as_corr_address_scnd_account_holder = UpCase(
      e.target.value
    );
    if (e.target.value === 'NO') {
      document
        .getElementById('scndHolderpermanentAddrDiv')
        .classList.remove('hide-me');
    } else {
      document
        .getElementById('scndHolderpermanentAddrDiv')
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
      <div id="scndHolderpermanentAddrDiv" className="hide-me">
        <Grid container className="textFieldFormTop">
          <h5> Permanent Address</h5>
        </Grid>
        <Grid container className="textFieldFormTop">
          <Grid item xs={6}>
            <TextField
              required
              className={classToBeApplied}
              inputProps={{
                name: 'scndHolderPermAddress',
                id: 'scndHolderPermAddress',
              }}
              label="Address"
              onChange={handleChangeScndHolderAddress}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              className={classToBeApplied}
              inputProps={{
                name: 'scndHolderPermCity',
                id: 'scndHolderPermCity',
              }}
              label="City"
              onChange={handleChangeScndHolderCity}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              className={classToBeApplied}
              inputProps={{
                name: 'scndHolderPermDist',
                id: 'scndHolderPermDist',
              }}
              label="District"
              onChange={handleChangeScndHolderDist}
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
                name: 'scndHolderPermPin',
                id: 'scndHolderPermPin',
                maxLength: 6,
              }}
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 6);
              }}
              label="Pin Code"
              onChange={handleChangeScndHolderPin}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              className={classToBeApplied}
              inputProps={{
                name: 'scndHolderPermState',
                id: 'scndHolderPermState',
              }}
              label="State"
              onChange={handleChangeScndHolderState}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              className={classToBeApplied}
              value={scndHolderPermCountry}
              inputProps={{
                name: 'scndHolderPermCountry',
                id: 'scndHolderPermCountry',
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

export default JntHolder1PermanentAddress;
