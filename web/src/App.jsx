import { Routes, Route } from "react-router-dom";
import Header from "./Components/Comon/Header";
import Clearfix from "./Components/Comon/Clearfix";
import NotFoundComponent from "./Components/Error/NotFoundComponent";
import DashboardComponent from "./Components/Dashboard/DashboardComponent";
import AddPostComponent from "./Components/Posts/AddPostComponent";
import ChatComponent from "./Components/Chat/ChatComponent";

function App() {
	return (
		<div className="wrapper">
			<Header></Header>

			<Clearfix />
			<Routes>
				<Route path="404" element={<NotFoundComponent />} />
				<Route path="/" element={<DashboardComponent />} />
				<Route path="add-posts" element={<AddPostComponent />} />
				<Route path="chat" element={<ChatComponent />} />
			</Routes>
		</div>
	);
}

export default App;
