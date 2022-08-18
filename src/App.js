import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import DashBoard from './Pages/DashBoard';
import EmployeesList from './Pages/EmployeesList';
import AddEmploy from './Pages/AddEmploy';
import 'bootstrap/dist/css/bootstrap.min.css';
import ManageSchedues from './Pages/ManageSchedues';
import IndividualSchedules from './Pages/IndividualSchedules';
import WorkReport from './Pages/WorkReport';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<DashBoard />} />
          <Route
            path="/dashboard"
            name="DashBoard"
            element={<DashBoard />}
          />
          <Route path="/employeeslist" name="Employees List" element={<EmployeesList />} />
          <Route path="/addemploy" name="Add New Employ" element={<AddEmploy />} />
          <Route path="/manage-schedules" name="Manage Schedules" element={<ManageSchedues />} />
          <Route path="/view-schedules" name="View Schedules" element={<IndividualSchedules />} />
          <Route path="/attendence" name="Daily Attendence" element={<WorkReport />} />
          <Route path="/login" name="Login" element={<Login />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
