import { Grid, TextField } from '@material-ui/core';
import '../../../css/Common.css';
import '../../../css/Fields.css';
import UpCase from './UpCase';

function JntHolder1CorrospondenceAddress({ classToBeApplied, formData }) {
  const scndHolderCorrCountry = 'INDIA';
  formData.country_scnd_account_holder = scndHolderCorrCountry;

  function handleChangeScndHolderAddress(e) {
    formData.address_scnd_account_holder = UpCase(e.target.value);
  }

  function handleChangeScndHolderCity(e) {
    formData.city_scnd_account_holder = UpCase(e.target.value);
  }

  function handleChangeScndHolderDist(e) {
    formData.district_scnd_account_holder = UpCase(e.target.value);
  }

  function handleChangeScndHolderPin(e) {
    formData.pin_scnd_account_holder = UpCase(e.target.value);
  }

  function handleChangeScndHolderState(e) {
    formData.state_scnd_scnd_account_holder = UpCase(e.target.value);
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
              name: 'scndHolderCorrAddress',
              id: 'scndHolderCorrAddress',
            }}
            label="Address"
            onChange={handleChangeScndHolderAddress}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'scndHolderCorrCity',
              id: 'scndHolderCorrCity',
            }}
            label="City"
            onChange={handleChangeScndHolderCity}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'scndHolderCorrDist',
              id: 'scndHolderCorrDist',
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
              name: 'scndHolderCorrPin',
              id: 'scndHolderCorrPin',
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
              name: 'scndHolderCorrState',
              id: 'scndHolderCorrState',
            }}
            label="State"
            onChange={handleChangeScndHolderState}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            value={scndHolderCorrCountry}
            inputProps={{
              name: 'scndHolderCorrCountry',
              id: 'scndHolderCorrCountry',
              readOnly: true,
            }}
            label="Country"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder1CorrospondenceAddress;
