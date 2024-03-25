import '../css/Common.css';
import '../css/Forms.css';
import Header from '../components/ui/Header';
import { useUser } from '../context/UserContext';

function Dashboard() {
  const { user } = useUser();
  console.log('user,', user);
  return (
    <div>
      <Header />
      <div id="formHeaderDiv" className="divMargin">
        <div className="flex-box-form-header">
          {/* <BackToDashboardButton /> */}
          <div className="blue-color-text">
            <h1>Dashboard</h1>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
