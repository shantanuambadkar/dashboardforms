import '../css/Common.css';
import '../css/Forms.css';
import '../css/Dashboard.css';
import DashboardHeader from '../components/ui/DashboardHeader';
import { useUser } from '../context/UserContext';
import FormCountWidget from '../components/dashboard/FormCountWidget';
import DashboardPeriodDropdown from '../components/dashboard/DashboardPeriodDropdown';
import DashboardBranchDropdown from '../components/dashboard/DashboardBranchDropdown';
import FormButtons from '../components/dashboard/FormButtons';
/* import DashboardTable from '../components/dashboard/DashboardTable'; */

function Dashboard() {
  const { user, useCounts, DBList } = useUser();

  return (
    <div>
      {user && useCounts && DBList ? (
        <div>
          <DashboardHeader />
          <div id="formHeaderDiv" className="dashboardDivMargin">
            <div className="form-header-dashboard">
              <h3>Welcome {user.Name}</h3>
              <div className="flex-dashboard-count-widget-div">
                <div className="periodDDDiv">
                  <DashboardPeriodDropdown classToBeApplied="field-width" />
                  {user.Role === 'HO' ? (
                    <DashboardBranchDropdown classToBeApplied="field-width" />
                  ) : (
                    ''
                  )}
                </div>
                <div>
                  <FormCountWidget />
                </div>
              </div>
              <FormButtons />
              {/* <DashboardTable /> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-box-form-header">
          <span className="danger-text">
            <h3>
              There were issues getting the user data. Please try again or
              contact Admin. <a href="/">Click here</a> to go back.
            </h3>
          </span>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
