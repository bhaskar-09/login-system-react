import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../Lib/Axios.js";

import { syncProfile } from "../../Lib/Hooks";

import { authActions } from "../../Redux/slice/auth";

function ListNotification(props) {
    // Correct! There is no need to specify the key here:
    return (
        <li>
            <a href="dashboard-manage-candidates.html">
                <span className="notification-icon">
                    <i className="icon-material-outline-group"></i>
                </span>
                <span className="notification-text">
                    <strong>Peaple {props.value} </strong>
                    applied for a job
                    <span className="color">Full Stack Software Engineer</span>
                </span>
            </a>
        </li>
    );
}
function ListMessage(props) {
    // Correct! There is no need to specify the key here:
    return (
        <li className="notifications-not-read">
            <a href="dashboard-messages.html">
                <span className="notification-avatar status-online">
                    <img src="images/user-avatar-small-03.jpg" alt="img" />
                </span>
                <div className="notification-text">
                    <strong>Person {props.value} </strong>
                    <p className="notification-msg-text">
                        Thanks for reaching out.
                    </p>
                    <span className="color">{props.value} hours ago</span>
                </div>
            </a>
        </li>
    );
}
function HeaderLayout() {
    const numbers = [1, 2, 3];
    const ListOfNotification = numbers.map((number) => (
        <ListNotification key={number.toString()} value={number} />
    ));
    const ListOfMessage = numbers.map((number) => (
        <ListMessage key={number.toString()} value={number} />
    ));

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.auth.userProfile);

    const handleLogout = async () => {
        const response = await axios.get("/auth/logout");

        if (response.data.success) {
            localStorage.removeItem("token");
            localStorage.removeItem("isLogedin");
            dispatch(authActions.ToggleIsLogedin(false));
            dispatch(authActions.updateToken(""));
            dispatch(authActions.updateUserProfile({}));
            navigate("/login", { replace: true });
        }
    };

    return (
        <>
            <header
                id="header-container"
                className="fullwidth dashboard-header not-sticky"
            >
                {/* Header */}
                <div id="header">
                    <div className="container">
                        {/* Left Side Content */}
                        <div className="left-side">
                            {/* Logo */}
                            <div id="logo">
                                <a href="index.html">
                                    <img src="images/logo.png" alt="img" />
                                </a>
                            </div>

                            {/* Main Navigation */}
                            <nav id="navigation">
                                <ul id="responsive">
                                    <li>
                                        <a href="/">Example Menu</a>
                                        <ul className="dropdown-nav">
                                            <li>
                                                <a href="/">Sub Menu 1</a>
                                                <ul className="dropdown-nav">
                                                    <li>
                                                        <a href="/">
                                                            Sub Sub Menu 1
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="/">Sub Menu 2</a>
                                                <ul className="dropdown-nav">
                                                    <li>
                                                        <a href="/">
                                                            Sub Sub Menu 1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            Sub Sub Menu 2
                                                        </a>
                                                        <ul className="dropdown-nav">
                                                            <li>
                                                                <a href="/">
                                                                    Sub Sub Sub
                                                                    Menu 1
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="/">Sub Menu 2</a>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        <Link to="/"> Pages </Link>
                                        <ul className="dropdown-nav">
                                            <li>
                                                <Link to="/">Dashboard</Link>
                                            </li>
                                            <li>
                                                <Link to="/register">
                                                    Registration
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/login">Login</Link>
                                            </li>
                                            <li>
                                                <Link to="/profile">
                                                    Profile
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/404">404</Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                            <div className="clearfix"></div>
                            {/* Main Navigation / End */}
                        </div>
                        {/* Left Side Content / End */}

                        {/* Right Side Content / End */}
                        <div className="right-side">
                            {/*  User Notifications */}
                            <div className="header-widget hide-on-mobile">
                                {/* Notifications */}
                                <div className="header-notifications">
                                    {/* Trigger */}
                                    <div className="header-notifications-trigger">
                                        <a href="/">
                                            <i className="icon-feather-bell"></i>
                                            <span>4</span>
                                        </a>
                                    </div>

                                    {/* Dropdown */}
                                    <div className="header-notifications-dropdown">
                                        <div className="header-notifications-headline">
                                            <h4>Notifications</h4>
                                            <button
                                                className="mark-as-read ripple-effect-dark"
                                                title="Mark all as read"
                                                data-tippy-placement="left"
                                            >
                                                <i className="icon-feather-check-square"></i>
                                            </button>
                                        </div>

                                        <div className="header-notifications-content">
                                            <div
                                                className="header-notifications-scroll"
                                                data-simplebar
                                            >
                                                <ul>{ListOfNotification}</ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Messages */}
                                <div className="header-notifications">
                                    <div className="header-notifications-trigger">
                                        <a href="/">
                                            <i className="icon-feather-mail"></i>
                                            <span>3</span>
                                        </a>
                                    </div>

                                    {/* Dropdown */}
                                    <div className="header-notifications-dropdown">
                                        <div className="header-notifications-headline">
                                            <h4>Messages</h4>
                                            <button
                                                className="mark-as-read ripple-effect-dark"
                                                title="Mark all as read"
                                                data-tippy-placement="left"
                                            >
                                                <i className="icon-feather-check-square"></i>
                                            </button>
                                        </div>

                                        <div className="header-notifications-content">
                                            <div
                                                className="header-notifications-scroll"
                                                data-simplebar
                                            >
                                                <ul>{ListOfMessage}</ul>
                                            </div>
                                        </div>

                                        <a
                                            href="dashboard-messages.html"
                                            className="header-notifications-button ripple-effect button-sliding-icon"
                                        >
                                            View All Messages
                                            <i className="icon-material-outline-arrow-right-alt"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/*  User Notifications / End */}

                            {/* User Menu */}
                            <div className="header-widget">
                                {/* Messages */}
                                <div className="header-notifications user-menu">
                                    <div className="header-notifications-trigger">
                                        <div className="user-avatar status-online">
                                            <img
                                                src="images/user-avatar-small-01.jpg"
                                                alt="img"
                                            />
                                        </div>
                                    </div>

                                    {/* Dropdown */}
                                    <div className="header-notifications-dropdown">
                                        {/* User Status */}
                                        <div className="user-status">
                                            {/* User Name / Avatar */}
                                            <div className="user-details">
                                                <div className="user-avatar status-online">
                                                    <img
                                                        src="images/user-avatar-small-01.jpg"
                                                        alt="img"
                                                    />
                                                </div>
                                                <div className="user-name">
                                                    {userProfile.name}
                                                    <span>Developer</span>
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="user-menu-small-nav">
                                            <li>
                                                <a onClick={handleLogout}>
                                                    <i className="icon-material-outline-power-settings-new"></i>
                                                    Logout
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* User Menu / End */}

                            {/* Mobile Navigation Button */}
                            <span className="mmenu-trigger">
                                <button
                                    className="hamburger hamburger--collapse"
                                    type="button"
                                >
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </button>
                            </span>
                        </div>
                        {/* Right Side Content / End */}
                    </div>
                </div>
                {/* Header / End */}
            </header>
        </>
    );
}

export default HeaderLayout;
