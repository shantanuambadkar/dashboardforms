import { Grid } from '@material-ui/core';
import '../../css/DBFormCount.css';
import '../../css/Common.css';
import Pending from '../../components/icons/icons8-sand-watch-64.png';
import Approved from '../../components/icons/icons8-done-64.png';
import Rejected from '../../components/icons/icons8-rejected-64.png';
import { useState } from 'react';
import CallCountAPI from '../actions/dashboardCallAllAPIs/CallCountAPI';
import { useUser } from '../../context/UserContext';
import CallGridAPI from '../../apiAction/dashboardAPIs/CallGridAPI';
import FailurePopup from '../../pages/FailurePopup';

function FormCountWidget() {
  //console.log('dateVal', dateVal);
  const {
    user,
    useCounts,
    setCounts,
    setDBList,
    formName,
    DBPeriod,
    setDBCountWidgetButton,
    DBPageNo,
    DBBranchVal,
  } = useUser();

  const [activeCountButton, setActiveCountButton] = useState('open');

  let countObjToBePassed = {
    subdomain: user.BankShortName,
    formName: formName,
    userRole: user.Role,
    userBranch: DBBranchVal,
    userEmail: user.Email,
    fromDate: DBPeriod,
    pageNo: DBPageNo,
  };

  async function handleCountButtonClick(value) {
    setActiveCountButton(value);
    setDBCountWidgetButton(value);
    try {
      await Promise.all([
        CallCountAPI(countObjToBePassed, setCounts),
        CallGridAPI(countObjToBePassed, setDBList),
      ]);
    } catch (e) {
      FailurePopup(
        'Dashboard Count Widget',
        'Error in calling Count & Grid API wrappers on Dashboard Count Widget'
      );
      console.log(
        'Error in calling Count & Grid API wrappers from FormCountWidget',
        e
      );
    }
  }

  return (
    <div>
      <Grid container>
        <Grid
          className={
            activeCountButton === 'open'
              ? 'transparent-button-with-blue-hover cursor-pointer transparent-button-active'
              : 'transparent-button-with-blue-hover cursor-pointer'
          }
        >
          <div onClick={() => handleCountButtonClick('open')}>
            <div>Open</div>
            <div>
              <span>{useCounts.openCnt}</span>
            </div>
            <div>
              <img
                className="formCountIcons"
                src={Pending}
                alt="Outlined Sand Watch"
              />
            </div>
          </div>
        </Grid>
        <Grid
          className={
            activeCountButton === 'accepted'
              ? 'transparent-button-with-blue-hover accepted-font cursor-pointer transparent-button-active'
              : 'transparent-button-with-blue-hover accepted-font cursor-pointer'
          }
        >
          <div onClick={() => handleCountButtonClick('accepted')}>
            <div>Accepted</div>
            <div>
              <span>{useCounts.approvedCnt}</span>
            </div>
            <div>
              <img className="formCountIcons" src={Approved} alt="Green Tick" />
            </div>
          </div>
        </Grid>
        <Grid
          className={
            activeCountButton === 'rejected'
              ? 'transparent-button-with-blue-hover rejected-font cursor-pointer transparent-button-active'
              : 'transparent-button-with-blue-hover rejected-font cursor-pointer'
          }
        >
          <div onClick={() => handleCountButtonClick('rejected')}>
            <div>Rejected</div>
            <div>
              <span>{useCounts.rejectedCnt}</span>
            </div>
            <div>
              <img className="formCountIcons" src={Rejected} alt="Cross" />
            </div>
          </div>
        </Grid>
        <Grid
          className={
            activeCountButton === 'total'
              ? 'transparent-button-with-blue-hover cursor-pointer transparent-button-active'
              : 'transparent-button-with-blue-hover cursor-pointer'
          }
        >
          <div onClick={() => handleCountButtonClick('total')}>
            <div>Total</div>
            <div>
              <span>{useCounts.totalCnt}</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default FormCountWidget;
