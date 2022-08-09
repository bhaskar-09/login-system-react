import { Link } from "react-router-dom";


function RegisterPage(params) {
    return (
        <>
            <div id="titlebar" className="gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                            <h2>Register</h2>

                            {/* Breadcrumbs */}
                            <nav id="breadcrumbs" className="dark">
                                <ul>
                                    <li>Register</li>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 offset-xl-3">

                        <div className="login-register-page">
                            {/* Welcome Text */}
                            <div className="welcome-text">
                                <h3 style={{ fontSize: '26px' }}>Let's create your account!</h3>
                                <span>Already have an account? <Link to='/login'>Log In!</Link></span>
                            </div>

                            {/* Form */}
                            <form method="post" id="register-account-form">
                                <div className="input-with-icon-left">
                                    <i className="icon-material-baseline-mail-outline"></i>
                                    <input type="text" className="input-text with-border" name="emailaddress-register"
                                        id="emailaddress-register" placeholder="Email Address" required />
                                </div>

                                <div className="input-with-icon-left" title="Should be at least 8 characters long"
                                    data-tippy-placement="bottom">
                                    <i className="icon-material-outline-lock"></i>
                                    <input type="password" className="input-text with-border" name="password-register"
                                        id="password-register" placeholder="Password" required />
                                </div>

                                <div className="input-with-icon-left">
                                    <i className="icon-material-outline-lock"></i>
                                    <input type="password" className="input-text with-border" name="password-repeat-register"
                                        id="password-repeat-register" placeholder="Repeat Password" required />
                                </div>

                                {/* Button */}
                                <button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit"
                                    form="login-form">Register <i className="icon-material-outline-arrow-right-alt"></i></button>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;