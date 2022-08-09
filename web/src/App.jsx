import './Assets/css/style.css';
import { Routes, Route } from "react-router-dom";

import LoginPage from './Component/Login/Login';
import RegisterPage from './Component/Register/Register';

import DashboardLayout from './Component/Dashboard/Dashboard';
import ProfilePage from './Component/Profile/Profile';



import NotFoundComponent from "./Components/Error/NotFoundComponent";
import DashboardComponent from "./Components/Dashboard/DashboardComponent";
import AddPostComponent from "./Components/Posts/AddPostComponent";
import ChatComponent from "./Components/Chat/ChatComponent";


function App() {
	return (
		<div className="wrapper">
			<Routes>
				<Route path="login" element={<LoginPage />} />
				<Route path="register" element={<RegisterPage />} />

				<Route path="/" element={<DashboardLayout />}>
					<Route path="profile" element={<ProfilePage />} />


					<Route path="404" element={<NotFoundComponent />} />
					<Route path="/" element={<DashboardComponent />} />
					<Route path="add-posts" element={<AddPostComponent />} />
					<Route path="chat" element={<ChatComponent />} />

				</Route>
			</Routes>

		</div>

	);
}

export default App;
