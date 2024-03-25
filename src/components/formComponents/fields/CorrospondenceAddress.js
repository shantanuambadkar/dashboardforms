import { Grid, TextField } from '@material-ui/core';
import '../../../css/Common.css';
import '../../../css/Fields.css';
import UpCase from './UpCase';

function CorrospondenceAddress({ classToBeApplied, formData, formName }) {
  const custCorrCountry = 'INDIA';
  formData.country_fst_account_holder = custCorrCountry;

  function handleChangeCustAddress(e) {
    formData.address_fst_account_holder = UpCase(e.target.value);
  }

  function handleChangeCustCity(e) {
    formData.city_fst_account_holder = UpCase(e.target.value);
  }

  function handleChangeCustDist(e) {
    formData.district_fst_account_holder = UpCase(e.target.value);
  }

  function handleChangeCustPin(e) {
    formData.pin_fst_account_holder = UpCase(e.target.value);
  }

  function handleChangeCustState(e) {
    formData.state_fst_account_holder = UpCase(e.target.value);
  }

  return (
    <div>
      <Grid container className="textFieldFormTop">
        <h5> Corrospondence Address</h5>
      </Grid>
      <Grid container className="textFieldFormTop">
        <Grid item xs={6}>
          <TextField
            required
            className={classToBeApplied}
            inputProps={{
              name: 'custCorrAddress',
              id: 'custCorrAddress',
            }}
            label="Address"
            onChange={handleChangeCustAddress}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'custCorrCity',
              id: 'custCorrCity',
            }}
            label="City"
            onChange={handleChangeCustCity}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'custCorrDist',
              id: 'custCorrDist',
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
              name: 'custCorrPin',
              id: 'custCorrPin',
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
              name: 'custCorrState',
              id: 'custCorrState',
            }}
            label="State"
            onChange={handleChangeCustState}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            value={custCorrCountry}
            inputProps={{
              name: 'custCorrCountry',
              id: 'custCorrCountry',
              readOnly: true,
            }}
            label="Country"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default CorrospondenceAddress;
