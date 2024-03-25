import { Grid } from '@material-ui/core';
import '../../css/LoginPage.css';
import InBankLogo from '../icons/inbank_blue.png';
import SmartFormsLogo from '../icons/smartforms_blue.png';

function LoginPageBankName() {
  return (
    <Grid container className="bank-name-text">
      <Grid item xs={3}>
        <img className="inbankLogo" src={InBankLogo} alt="InBank Blue Logo" />
      </Grid>
      <Grid item xs={6}>
        <h1>The ABC Co-Operative Bank</h1>
      </Grid>
      <Grid item xs={3}>
        <img
          className="inbankLogo"
          src={SmartFormsLogo}
          alt="InBank Blue Logo"
        />
      </Grid>
    </Grid>
  );
}

export default LoginPageBankName;
