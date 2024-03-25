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

function PermanentAddress({ classToBeApplied, formData, formName }) {
  const custPermCountry = 'INDIA';
  const yesNoDDValues = Dropdowns('yesNo');
  formData.perm_country_fst_account_holder = custPermCountry;

  function handleChangeCustAddress(e) {
    formData.perm_address_fst_account_holder = UpCase(e.target.value);
  }

  function handleChangeCustCity(e) {
    formData.perm_city_fst_account_holder = UpCase(e.target.value);
  }

  function handleChangeCustDist(e) {
    formData.perm_district_fst_account_holder = UpCase(e.target.value);
  }

  function handleChangeCustPin(e) {
    formData.perm_pin_fst_account_holder = UpCase(e.target.value);
  }

  function handleChangeCustState(e) {
    formData.perm_state_fst_account_holder = UpCase(e.target.value);
  }

  function handleChangePermCorrAddress(e) {
    formData.perm_address_same_as_corr_address_fst_account_holder = UpCase(
      e.target.value
    );
    if (e.target.value === 'NO') {
      document.getElementById('permanentAddrDiv').classList.remove('hide-me');
      formData.perm_address_fst_account_holder = '';
      formData.perm_city_fst_account_holder = '';
      formData.perm_district_fst_account_holder = '';
      formData.perm_pin_fst_account_holder = '';
      formData.perm_state_fst_account_holder = '';
      formData.perm_country_fst_account_holder = custPermCountry;
    } else {
      document.getElementById('permanentAddrDiv').classList.add('hide-me');
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
      <div id="permanentAddrDiv" className="hide-me">
        <Grid container className="textFieldFormTop">
          <h5> Permanent Address</h5>
        </Grid>
        <Grid container className="textFieldFormTop">
          <Grid item xs={6}>
            <TextField
              required
              className={classToBeApplied}
              inputProps={{
                name: 'custPermAddress',
                id: 'custPermAddress',
              }}
              label="Address"
              onChange={handleChangeCustAddress}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              className={classToBeApplied}
              inputProps={{
                name: 'custPermCity',
                id: 'custPermCity',
              }}
              label="City"
              onChange={handleChangeCustCity}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              className={classToBeApplied}
              inputProps={{
                name: 'custPermDist',
                id: 'custPermDist',
              }}
              label="District"
              onChange={handleChangeCustDist}
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
                name: 'custPermPin',
                id: 'custPermPin',
                maxLength: 6,
              }}
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 6);
              }}
              label="Pin Code"
              onChange={handleChangeCustPin}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              className={classToBeApplied}
              inputProps={{
                name: 'custPermState',
                id: 'custPermState',
              }}
              label="State"
              onChange={handleChangeCustState}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              className={classToBeApplied}
              value={custPermCountry}
              inputProps={{
                name: 'custPermCountry',
                id: 'custPermCountry',
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

export default PermanentAddress;
