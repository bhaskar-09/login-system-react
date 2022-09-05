import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../../Lib/Axios.js";

function LoginPage() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onInput" });

    const onFormSubmit = async (data) => {
        try {
            const response = await axios.post('/auth/login', data);
            if (response.data.success) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('isLogedin', response.data.success);
                navigate("/profile", { replace: true });
            }
        } catch (error) {
            console.error(error);
        }

    };

    return (
        <>
            <div id="titlebar" className="gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Log In</h2>

                            {/* Breadcrumbs */}
                            <nav id="breadcrumbs" className="dark">
                                <ul>
                                    <li>Log In</li>
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
                                <h3>We're glad to see you again!</h3>
                                <span>
                                    Don't have an account? <Link to="/register">Sign Up!</Link>
                                </span>
                            </div>

                            {/* Form */}
                            <form method="post" id="login-form" onSubmit={handleSubmit(onFormSubmit)}>
                                <div className="input-with-icon-left">
                                    <i className="icon-material-baseline-mail-outline"></i>
                                    <input type="text" className="input-text with-border" name="emailaddress" id="emailaddress" placeholder="Email Address"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                                message: 'Enter valid email' // JS only: <p>error message</p> TS only support string
                                            }
                                        })}
                                    />
                                    <p className="error-message">{errors.email?.message}</p>
                                </div>

                                <div className="input-with-icon-left">
                                    <i className="icon-material-outline-lock"></i>
                                    <input type="password" className="input-text with-border" name="password" id="password" placeholder="Password"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 8,
                                                message: "Password required minimum 8 charcter"
                                            }
                                        })}
                                    />
                                    <p className="error-message">{errors.password?.message}</p>
                                </div>

                                {/* Button */}
                                <button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" form="login-form">
                                    Log In <i className="icon-material-outline-arrow-right-alt"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
