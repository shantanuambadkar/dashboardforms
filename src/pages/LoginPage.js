import { Grid, TextField } from '@material-ui/core';
import '../css/LoginPage.css';
import '../css/Common.css';
import loginImage from '../components/icons/undraw_secure_login_pdn4.png';
import Buttons from '../components/ui/Buttons';
import ForgotPassword from '../components/ui/ForgotPassword';
import LoginPageBankName from '../components/ui/LoginPageBankName';
import LoginValidations from '../components/actions/loginValidations/LoginValidations';
import { useState, useEffect } from 'react';
import LoginAPICall from '../apiAction/LoginAPICall';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/ui/Loading';
import FailurePopup from './FailurePopup';
import PoweredByFooter from '../components/ui/PoweredByFooter';
import CallCountAPI from '../components/actions/dashboardCallAllAPIs/CallCountAPI';
import GetDateFromPeriod from '../components/formComponents/reusableComponents/GetDateFromPeriod';

function LoginPage() {
  let formObject = {};
  let [isError, setIsError] = useState(false);
  let [isLoading, setIsLoading] = useState(false);
  const [loaderText, setLoaderText] = useState('');
  let [initObjectToCallCountAPI, setInitObjectToCallCountAPI] = useState({});

  const { setUser, setCounts } = useUser();

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    formObject = Object.fromEntries(new FormData(e.target));

    if (Object.keys(formObject).length > 0) {
      let loginVal = LoginValidations(formObject);
      if (loginVal) {
        setLoaderText('Authentication in Progress...');
        setIsLoading(true);
        try {
          let loginResp = await LoginAPICall(formObject, setUser);
          if (Object.keys(loginResp).length > 0) {
            /* console.log('loginResp', loginResp); */
            setIsError(false);
            setLoaderText('Please wait...');
            setInitObjectToCallCountAPI({
              subdomain: loginResp.BankShortName,
              formName: 'savings',
              userRole: loginResp.Role,
              userBranch: loginResp.Branch,
              userEmail: loginResp.Email,
              formattedDate: GetDateFromPeriod('THIS MONTH'),
            });
          }
        } catch (error) {
          setIsError(true);
          setIsLoading(false);
          console.error('Error in API call:', error);
        }
      } else {
        setIsError(true);
        setIsLoading(false);
      }
    }
  }

  // CallCountAPI is called here directly
  useEffect(() => {
    async function callCountAPI(initObjectToCallCountAPI) {
      try {
        let respfromCountAPI = await CallCountAPI(initObjectToCallCountAPI);
        setCounts(respfromCountAPI);
        //console.log('respfromCountAPI', respfromCountAPI);
        navigate('/dashboard');
      } catch (e) {
        setIsError(true);
        setIsLoading(false);
        console.error('Error in Count API call:', e);
      }
    }

    if (Object.keys(initObjectToCallCountAPI).length > 0) {
      callCountAPI(initObjectToCallCountAPI);
    }
  }, [initObjectToCallCountAPI, navigate, setCounts]);

  function handleForgotPassword() {
    FailurePopup('', '', true);
  }

  return (
    <Grid container>
      <Grid container>
        <LoginPageBankName />
      </Grid>
      {isLoading ? (
        <Loading loaderText={loaderText} />
      ) : (
        <form id="inbankLogin" onSubmit={handleLogin}>
          <Grid container className="grid-container-display">
            <Grid item xs={5} className="login-image-container">
              <img
                className="login-image"
                src={loginImage}
                alt="Lady with laptop and a lock"
              />
            </Grid>
            <Grid item xs={4}>
              <Grid container>
                <Grid item xs={9}>
                  <TextField
                    required
                    inputProps={{ id: 'subdomain', name: 'subdomain' }}
                    label="Subdomain"
                  />
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    required
                    inputProps={{ id: 'email', name: 'email' }}
                    label="User / Email ID"
                  />
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    required
                    inputProps={{ id: 'password', name: 'password' }}
                    type="password"
                    label="Password"
                  />
                </Grid>
                {isError && (
                  <Grid item xs={9} className="danger-text">
                    Please recheck your values or contact admin.
                  </Grid>
                )}
              </Grid>
              <Grid container>
                <Grid item xs={4} className="forgot-pwd-margin">
                  <ForgotPassword handleForgotPassword={handleForgotPassword} />
                </Grid>
                <Grid item xs={5}>
                  <Buttons
                    btnLabel="Login"
                    btnColor="primary"
                    btnVariant="contained"
                    btnType="Submit"
                    classToBeApplied="submitFormBtn"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      )}
      <Grid container>
        <PoweredByFooter />
      </Grid>
    </Grid>
  );
}

export default LoginPage;
