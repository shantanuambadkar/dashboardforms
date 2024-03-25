import { Grid, TextField } from '@material-ui/core';
import '../../../css/Common.css';
import '../../../css/Fields.css';
import UpCase from './UpCase';

function JntHolder4CorrospondenceAddress({ classToBeApplied, formData }) {
  const fifthHolderCorrCountry = 'INDIA';
  formData.country_fifth_account_holder = fifthHolderCorrCountry;

  function handleChangeFifthHolderAddress(e) {
    formData.address_fifth_account_holder = UpCase(e.target.value);
  }

  function handleChangeFifthHolderCity(e) {
    formData.city_fifth_account_holder = UpCase(e.target.value);
  }

  function handleChangeFifthHolderDist(e) {
    formData.district_fifth_account_holder = UpCase(e.target.value);
  }

  function handleChangeFifthHolderPin(e) {
    formData.pin_fifth_account_holder = UpCase(e.target.value);
  }

  function handleChangeFifthHolderState(e) {
    formData.state_fifth_fifth_account_holder = UpCase(e.target.value);
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
              name: 'fifthHolderCorrAddress',
              id: 'fifthHolderCorrAddress',
            }}
            label="Address"
            onChange={handleChangeFifthHolderAddress}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'fifthHolderCorrCity',
              id: 'fifthHolderCorrCity',
            }}
            label="City"
            onChange={handleChangeFifthHolderCity}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'fifthHolderCorrDist',
              id: 'fifthHolderCorrDist',
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
              name: 'fifthHolderCorrPin',
              id: 'fifthHolderCorrPin',
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
              name: 'fifthHolderCorrState',
              id: 'fifthHolderCorrState',
            }}
            label="State"
            onChange={handleChangeFifthHolderState}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            value={fifthHolderCorrCountry}
            inputProps={{
              name: 'fifthHolderCorrCountry',
              id: 'fifthHolderCorrCountry',
              readOnly: true,
            }}
            label="Country"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder4CorrospondenceAddress;
