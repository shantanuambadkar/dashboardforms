import Swal from 'sweetalert2';
import '../css/Common.css';

function FailurePopup(formName, errorDesc, isForgotPwd) {
  if (isForgotPwd) {
    return Swal.fire({
      title: 'Forgot Password?',
      text: 'Kindly contact System Admin.',
    });
  } else {
    let commonError =
      'Some fields are empty or invalid. Kindly check the form before submitting. फॉर्ममध्ये काही त्रुटी आहेत. कृपया सबमिट करण्यापूर्वी फॉर्म तपासा.';
    return Swal.fire({
      title: formName + ' Form has some errors',
      text: errorDesc && errorDesc !== '' ? errorDesc : commonError,
    });
  }
}

export default FailurePopup;
