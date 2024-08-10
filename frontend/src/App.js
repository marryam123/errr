import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes,useLocation} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import  Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import CreateAtten from './components/CreateAtten';
import AllAtten from './components/AllAtten';
import AuthRoute from './components/AuthRoute';
import DashboardHeader from './components/headerdashbaordstudent';
import AdminSignup from './components/AdminSingup';
import AdminLogin from './components/Adminlogin';
import AdminDashboardHeader from './components/AdminDashboardHeader';
import Dashboardadmin from './components/Dashboardadmin';
import View from './components/viewallStudent';

function App() {
  const location = useLocation();
  const isDashboardRoute = ['/dashbord', '/addattendence', '/allatten'].includes(location.pathname);
  const adminDashboardRoute = ['/admindashbord', '/viewallusers',].includes(location.pathname);
  return (
    <div>
      {adminDashboardRoute ? <AdminDashboardHeader /> : (isDashboardRoute ? <DashboardHeader /> : <Header />)}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminSignup" element={<AdminSignup />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admindashbord" element={<Dashboardadmin />} />
          <Route path="/dashbord" element={<AuthRoute element={<Dashboard />} />} />
          <Route path="/addattendence" element={<AuthRoute element={<CreateAtten />} />} />
          <Route path="/allatten" element={<AuthRoute element={<AllAtten />} />} />
          <Route path="/viewallusers"  element={<View />} />
        </Routes>
      </div>
    </div>
  );
}

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
