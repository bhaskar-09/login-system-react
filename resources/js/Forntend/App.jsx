import "./Assets/css/style.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./Component/Login/Login";
import RegisterPage from "./Component/Register/Register";

import DashboardLayout from "./Component/Dashboard/Dashboard";
import ProfilePage from "./Component/Profile/Profile";

import NotFoundComponent from "./Component/Error/NotFoundComponent";
import AddPostComponent from "./Component/Posts/AddPostComponent";
import ChatComponent from "./Component/Chat/ChatComponent";

import HeaderLayout from "./Component/Comon/Header";
import LoaderComponent from "./Component/Comon/Loader";

function App() {
	const showLoader = useSelector((state) => state.ui.IsLoader);
	return (
		<div className="wrapper">
			{showLoader && <LoaderComponent />}
			<HeaderLayout></HeaderLayout>
			<Routes>
				<Route path="login" element={<LoginPage />} />
				<Route path="register" element={<RegisterPage />} />

				<Route path="/" element={<DashboardLayout />}>
					<Route path="profile" element={<ProfilePage />} />

					<Route path="404" element={<NotFoundComponent />} />
					<Route path="add-posts" element={<AddPostComponent />} />
					<Route path="chat" element={<ChatComponent />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
