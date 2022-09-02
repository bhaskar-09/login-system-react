import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../../Lib/Axios.js";

function RegisterPage() {
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm({ mode: "onInput" });
	const onFormSubmit = async (data) => {
		try {
			const response = await axios.post('/auth/register', data);
			console.log(response);
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
								<h3 style={{ fontSize: "26px" }}>Let's create your account!</h3>
								<span>
									Already have an account? <Link to="/login">Log In!</Link>
								</span>
							</div>

							{/* Form */}
							<form method="post" id="register-account-form" onSubmit={handleSubmit(onFormSubmit)}>
								<div className="input-with-icon-left">
									<i className="icon-material-outline-account-circle"></i>
									<input type="text" className="input-text with-border" placeholder="Name"
										{...register("name", {
											required: "Name is required"
										})}
									/>
									<p className="error-message">{errors.name?.message}</p>
								</div>
								<div className="input-with-icon-left">
									<i className="icon-material-baseline-mail-outline"></i>
									<input type="text" className="input-text with-border" placeholder="Email Address"
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
								<div className="input-with-icon-left" title="Should be at least 8 characters long" data-tippy-placement="bottom">
									<i className="icon-material-outline-lock"></i>
									<input type="password" className="input-text with-border" placeholder="Password"
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
								<div className="input-with-icon-left">
									<i className="icon-material-outline-lock"></i>
									<input type="password" className="input-text with-border" placeholder="Repeat Password"
										{...register("password_confirmation", {
											required: "Password is required",
											validate: value => value === getValues("password") || 'Password Dosent Matched',
										})}
									/>
									<p className="error-message">{errors.password_confirmation?.message}</p>
								</div>
								{/* Button */}
								<button className="button full-width button-sliding-icon ripple-effect margin-top-10" type="submit" form="register-account-form">
									Register <i className="icon-material-outline-arrow-right-alt"></i>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default RegisterPage;
