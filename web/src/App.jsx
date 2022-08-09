import './Assets/css/style.css';
import { Routes, Route } from "react-router-dom";

import LoginPage from './Component/Login/Login';
import RegisterPage from './Component/Register/Register';

import DashboardLayout from './Component/Dashboard/Dashboard';
import ProfilePage from './Component/Profile/Profile';


function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        <Route path="/" element={<DashboardLayout />}>
          <Route path="profile" element={<ProfilePage />} />

        </Route>
      </Routes>

    </div>

  );
}

export default App;
