import '../css/Common.css';
import '../css/Forms.css';
import DashboardHeader from '../components/ui/DashboardHeader';
import { useUser } from '../context/UserContext';

function Dashboard() {
  const { user } = useUser();
  console.log('user,', user);
  return (
    <div>
      {user ? (
        <div>
          <DashboardHeader />
          <div id="formHeaderDiv" className="dashboardDivMargin">
            <div className="flex-box-form-header-dashboard">
              <span>Dashboard content</span>
              <div></div>
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
