import { Grid, TextField } from '@material-ui/core';
import '../../../css/Common.css';
import '../../../css/Fields.css';
import UpCase from './UpCase';

function JntHolder3CorrospondenceAddress({ classToBeApplied, formData }) {
  const forthHolderCorrCountry = 'INDIA';
  formData.country_forth_account_holder = forthHolderCorrCountry;

  function handleChangeForthHolderAddress(e) {
    formData.address_forth_account_holder = UpCase(e.target.value);
  }

  function handleChangeForthHolderCity(e) {
    formData.city_forth_account_holder = UpCase(e.target.value);
  }

  function handleChangeForthHolderDist(e) {
    formData.district_forth_account_holder = UpCase(e.target.value);
  }

  function handleChangeForthHolderPin(e) {
    formData.pin_forth_account_holder = UpCase(e.target.value);
  }

  function handleChangeForthHolderState(e) {
    formData.state_forth_forth_account_holder = UpCase(e.target.value);
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
              name: 'forthHolderCorrAddress',
              id: 'forthHolderCorrAddress',
            }}
            label="Address"
            onChange={handleChangeForthHolderAddress}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'forthHolderCorrCity',
              id: 'forthHolderCorrCity',
            }}
            label="City"
            onChange={handleChangeForthHolderCity}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'forthHolderCorrDist',
              id: 'forthHolderCorrDist',
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
              name: 'forthHolderCorrPin',
              id: 'forthHolderCorrPin',
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
              name: 'forthHolderCorrState',
              id: 'forthHolderCorrState',
            }}
            label="State"
            onChange={handleChangeForthHolderState}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            value={forthHolderCorrCountry}
            inputProps={{
              name: 'forthHolderCorrCountry',
              id: 'forthHolderCorrCountry',
              readOnly: true,
            }}
            label="Country"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder3CorrospondenceAddress;
