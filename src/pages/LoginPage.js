import { Grid, TextField } from '@material-ui/core';
import '../css/LoginPage.css';
import '../css/Common.css';
import loginImage from '../components/icons/undraw_secure_login_pdn4.png';
import Buttons from '../components/ui/Buttons';
import ForgotPassword from '../components/ui/ForgotPassword';
import LoginPageBankName from '../components/ui/LoginPageBankName';
import LoginValidations from '../components/actions/loginValidations/LoginValidations';
import { useState } from 'react';
import LoginAPICall from '../apiAction/LoginAPICall';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/ui/Loading';
import FailurePopup from './FailurePopup';
import PoweredByFooter from '../components/ui/PoweredByFooter';
import CallCountAPI from '../components/actions/dashboardCallAllAPIs/CallCountAPI';
import GetDateFromPeriod from '../components/formComponents/reusableComponents/GetDateFromPeriod';
import CallGridAPI from '../apiAction/dashboardAPIs/CallGridAPI';

function LoginPage() {
  const { setUser, setCounts, setDBList, formName } = useUser();
  let formObject = {};

  let [isError, setIsError] = useState(false);
  let [isLoading, setIsLoading] = useState(false);
  const [loaderText, setLoaderText] = useState('');

  const pageNo = 0;
  let countObjToBePassed = {};

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
            setIsError(false);
            setLoaderText('Please wait. We are loading Dashboard...');
            countObjToBePassed = {
              ...countObjToBePassed,
              subdomain: loginResp.BankShortName,
              formName: formName,
              userRole: loginResp.Role,
              userBranch: loginResp.Branch,
              userEmail: loginResp.Email,
              fromDate: GetDateFromPeriod('THIS MONTH'),
              pageNo: pageNo,
            };
            try {
              await Promise.all([
                callCountAPI(countObjToBePassed),
                callDBGridAPI(countObjToBePassed),
              ]);

              //Navigate to Dashboard
              navigate('/dashboard');
            } catch (e) {
              setIsError(true);
              setIsLoading(false);
              FailurePopup(
                'Login',
                'Error while connecting to database on Login Page. Please contact admin.'
              );
              console.log(
                'Error in calling Count & Grid API wrappers on Login',
                e
              );
            }
          }
        } catch (error) {
          setIsError(true);
          setIsLoading(false);
          FailurePopup(
            'Login',
            'Error while logging in due to Login API failure. Please contact admin.'
          );
          console.error('Error in Login API call:', error);
        }
      } else {
        setIsError(true);
        setIsLoading(false);
        FailurePopup(
          'Login',
          'Error while logging in due to Login validations. Please contact admin.'
        );
      }
    }
  }

  async function callCountAPI(initObjectToCallCountAPI) {
    try {
      await CallCountAPI(initObjectToCallCountAPI, setCounts);
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
      FailurePopup(
        'Login',
        'Error in calling Count API on Login Page. Please contact admin.'
      );
      console.error('Error in calling Count API on Login Page:', e);
    }
  }

  async function callDBGridAPI(initObjectToCallGridAPI) {
    try {
      await CallGridAPI(initObjectToCallGridAPI, setDBList);
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
      FailurePopup(
        'Login',
        'Error in calling Grid API on Login Page. Please contact admin.'
      );
      console.error('Error in calling Grid API on Login Page:', e);
    }
  }

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
