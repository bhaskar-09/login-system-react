import "./Assets/css/style.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

import { AxiosLoader } from "./Lib/Axios";

import { syncProfile } from "./Lib/Hooks";


import LoginPage from "./Component/Login/Login";
import RegisterPage from "./Component/Register/Register";

import DashboardLayout from "./Component/Dashboard/Dashboard";
import ProfilePage from "./Component/Profile/Profile";

import NotFoundComponent from "./Component/Error/NotFoundComponent";
import AddPostComponent from "./Component/Posts/AddPostComponent";
import ChatComponent from "./Component/Chat/ChatComponent";

import HeaderLayout from "./Component/Comon/Header";
import LoaderComponent from "./Component/Comon/Loader";
import { useEffect } from "react";

function App() {
    const showLoader = AxiosLoader();
    const isLogedin = useSelector((state) => state.auth.IsLogedin);
    const location = useLocation();
    const profileData = syncProfile();

    const nonAuthPath = [
        '/login', '/register'
    ]

    useEffect(() => {
        console.log(profileData);
        if (!nonAuthPath.includes(location.pathname)) {
            console.log("Check Auth");

            if (!isLogedin) {
                console.log("Not Login");
            } else {
                console.log("Loged in");
            }
        }
    }, [location])





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
