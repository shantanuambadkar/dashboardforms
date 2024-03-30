import '../css/Common.css';
import '../css/Forms.css';
import '../css/Dashboard.css';
import DashboardHeader from '../components/ui/DashboardHeader';
import { useUser } from '../context/UserContext';
import FormCountWidget from '../components/dashboard/FormCountWidget';
import DashboardPeriodDropdown from '../components/dashboard/DashboardPeriodDropdown';
import FormButtons from '../components/dashboard/FormButtons';
import DashboardTable from '../components/dashboard/DashboardTable';
import { useState } from 'react';

function Dashboard() {
  const { user, useCounts } = useUser();
  const [selectedPeriod, setSelectedPeriod] = useState('THIS MONTH');
  const [formName, setFormName] = useState('savings');
  const [selectedCountButton, setSelectedCountButton] = useState('open');

  function handlePeriodChange(e) {
    setSelectedPeriod(e);
  }

  function handleFormCountButtonClick(e) {
    setSelectedCountButton(e);
  }

  function handleFormNameButtonClick(e) {
    setFormName(e);
  }

  return (
    <div>
      {user ? (
        <div>
          <DashboardHeader />
          <div id="formHeaderDiv" className="dashboardDivMargin">
            <div className="form-header-dashboard">
              <h3>Welcome {user.Name}</h3>
              <div className="flex-dashboard-count-widget-div">
                <div className="periodDDDiv">
                  {user.Role === 'HO' ? (
                    <DashboardPeriodDropdown
                      classToBeApplied="field-width"
                      setDate={handlePeriodChange}
                    />
                  ) : (
                    ''
                  )}
                </div>
                <div>
                  <FormCountWidget
                    subdomain={user.BankShortName}
                    formName={formName}
                    userBranch={user.Branch}
                    userEmail={user.Email}
                    userRole={user.Role}
                    currCountButtonVal={handleFormCountButtonClick}
                    dateVal={selectedPeriod}
                    countVal={useCounts}
                  />
                </div>
              </div>
              <FormButtons
                subdomain={user.BankShortName}
                formName={formName}
                userRole={user.Role}
                userBranch={user.Branch}
                userEmail={user.Email}
                isDate={selectedPeriod}
                formButtonClicked={handleFormNameButtonClick}
              />
              <DashboardTable />
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
