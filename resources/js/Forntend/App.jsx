import "./Assets/css/style.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { AxiosLoader } from "./Lib/Axios";

import { syncProfile } from "./Lib/Hooks";

import LoginPage from "./Component/Login/Login";
import RegisterPage from "./Component/Register/Register";

import DashboardLayout from "./Component/Dashboard/Dashboard";
import ProfilePage from "./Component/Profile/Profile";

import NotFoundComponent from "./Component/Error/NotFoundComponent";

import HeaderLayout from "./Component/Comon/Header";
import LoaderComponent from "./Component/Comon/Loader";
import { useEffect } from "react";

function App() {
    const showLoader = AxiosLoader();
    const isLogedin = useSelector((state) => state.auth.IsLogedin);
    const location = useLocation();
    const profileData = syncProfile();
    const navigate = useNavigate();

    const nonAuthPath = ["/login", "/register"];

    useEffect(() => {
        if (!isLogedin) {
            if (!nonAuthPath.includes(location.pathname)) {
                navigate("/login", { replace: true });
            }
        } else {
            if (nonAuthPath.includes(location.pathname)) {
                navigate("/", { replace: true });
            }
        }
    }, [location]);

    return (
        <div className="wrapper">
            {showLoader && <LoaderComponent />}
            <HeaderLayout></HeaderLayout>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />

                <Route path="/" element={<DashboardLayout />}>
                    <Route
                        path=""
                        element={
                            <h1
                                style={{
                                    textAlign: "center",
                                    fontSize: "xx-large",
                                    margin: "100px",
                                    fontWeight: "bold",
                                }}
                            >
                                Dashboard
                            </h1>
                        }
                    />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="404" element={<NotFoundComponent />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
