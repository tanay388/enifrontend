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
import PrivateRoute from "./Components/PrivateRoute";
import WorkReport from './Pages/WorkReport';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';
import AdminManager from './Pages/AdminManager';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route
            path="/dashboard"
            name="DashBoard"
             element={<PrivateRoute>
              <DashBoard />
              </PrivateRoute>}
            />
          <Route path="/employeeslist" name="Employees List" element={<PrivateRoute><EmployeesList /></PrivateRoute>} />
          <Route path="/addemploy" name="Add New Employ" element={<PrivateRoute><AddEmploy /></PrivateRoute>} />
          <Route path="/manage-schedules" name="Manage Schedules" element={<PrivateRoute><ManageSchedues /></PrivateRoute>} />
          <Route path="/view-schedules" name="View Schedules" element={<PrivateRoute><IndividualSchedules /></PrivateRoute>} />
          <Route path="/attendence" name="Daily Attendence" element={<PrivateRoute><WorkReport /></PrivateRoute>} />
          <Route path="/manage-admin" name="Admin Manager" element={<PrivateRoute><AdminManager /></PrivateRoute>} />
          <Route path="/login" name="Login" element={<Login />} />
          <Route path="*" name="NotFound" element={<NotFoundPage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
