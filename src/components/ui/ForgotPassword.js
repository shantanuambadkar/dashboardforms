import ForgotPwd from '../icons/icons8-forgot-password-96.png';
import '../../css/Common.css';
import '../../css/LoginPage.css';

function ForgotPassword({ handleForgotPassword }) {
  return (
    <div>
      <span className="cursor-pointer" onClick={handleForgotPassword}>
        Forgot Password
      </span>
      <img
        className="forgot-pwd-img"
        src={ForgotPwd}
        alt="Lock with question mark"
      />
    </div>
  );
}

export default ForgotPassword;
