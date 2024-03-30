import { Grid } from '@material-ui/core';
import '../../css/DBFormCount.css';
import '../../css/Common.css';
import Pending from '../../components/icons/icons8-sand-watch-64.png';
import Approved from '../../components/icons/icons8-done-64.png';
import Rejected from '../../components/icons/icons8-rejected-64.png';
import { useState } from 'react';
import CountAPI from '../../apiAction/dashboardAPIs/CountAPI';
import GetDateFromPeriod from '../formComponents/reusableComponents/GetDateFromPeriod';

function FormCountWidget({
  subdomain,
  formName,
  userRole,
  userBranch,
  userEmail,
  currCountButtonVal,
  dateVal,
  countVal,
}) {
  /* console.log('countVal', countVal); */
  const [openFormCount, setOpenFormCount] = useState(countVal.openCnt);
  const [approvedFormCount, setApprovedFormCount] = useState(
    countVal.approvedCnt
  );
  const [rejectedFormCount, setRejectedFormCount] = useState(
    countVal.rejectedCnt
  );
  const [totalFormCount, setTotalFormCount] = useState(countVal.totalCnt);

  const [activeCountButton, setActiveCountButton] = useState('open');

  let getCurrentDate;

  if (dateVal) {
    getCurrentDate = GetDateFromPeriod(dateVal);
  }

  async function handleCountButtonClick(value) {
    setActiveCountButton(value);
    currCountButtonVal(value);
    setTotalFormCount(
      await CountAPI(
        subdomain,
        formName,
        userRole,
        userBranch,
        userEmail,
        getCurrentDate,
        'all'
      )
    );
    setOpenFormCount(
      await CountAPI(
        subdomain,
        formName,
        userRole,
        userBranch,
        userEmail,
        getCurrentDate,
        'open'
      )
    );
    setApprovedFormCount(
      await CountAPI(
        subdomain,
        formName,
        userRole,
        userBranch,
        userEmail,
        getCurrentDate,
        'accepted'
      )
    );
    setRejectedFormCount(
      await CountAPI(
        subdomain,
        formName,
        userRole,
        userBranch,
        userEmail,
        getCurrentDate,
        'rejected'
      )
    );
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
              <span>{openFormCount}</span>
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
              <span>{approvedFormCount}</span>
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
              <span>{rejectedFormCount}</span>
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
              <span>{totalFormCount}</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default FormCountWidget;
