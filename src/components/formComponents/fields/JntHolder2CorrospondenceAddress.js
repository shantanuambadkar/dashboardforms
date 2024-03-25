import { Grid, TextField } from '@material-ui/core';
import '../../../css/Common.css';
import '../../../css/Fields.css';
import UpCase from './UpCase';

function JntHolder2CorrospondenceAddress({ classToBeApplied, formData }) {
  const thrdHolderCorrCountry = 'INDIA';
  formData.country_thrd_account_holder = thrdHolderCorrCountry;

  function handleChangeThrdHolderAddress(e) {
    formData.address_thrd_account_holder = UpCase(e.target.value);
  }

  function handleChangeThrdHolderCity(e) {
    formData.city_thrd_account_holder = UpCase(e.target.value);
  }

  function handleChangeThrdHolderDist(e) {
    formData.district_thrd_account_holder = UpCase(e.target.value);
  }

  function handleChangeThrdHolderPin(e) {
    formData.pin_thrd_account_holder = UpCase(e.target.value);
  }

  function handleChangeThrdHolderState(e) {
    formData.state_thrd_thrd_account_holder = UpCase(e.target.value);
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
              name: 'thrdHolderCorrAddress',
              id: 'thrdHolderCorrAddress',
            }}
            label="Address"
            onChange={handleChangeThrdHolderAddress}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'thrdHolderCorrCity',
              id: 'thrdHolderCorrCity',
            }}
            label="City"
            onChange={handleChangeThrdHolderCity}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            className={classToBeApplied}
            inputProps={{
              name: 'thrdHolderCorrDist',
              id: 'thrdHolderCorrDist',
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
              name: 'thrdHolderCorrPin',
              id: 'thrdHolderCorrPin',
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
              name: 'thrdHolderCorrState',
              id: 'thrdHolderCorrState',
            }}
            label="State"
            onChange={handleChangeThrdHolderState}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            className={classToBeApplied}
            value={thrdHolderCorrCountry}
            inputProps={{
              name: 'thrdHolderCorrCountry',
              id: 'thrdHolderCorrCountry',
              readOnly: true,
            }}
            label="Country"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default JntHolder2CorrospondenceAddress;
