import { Link } from "react-router-dom";

function LoginPage() {
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
							<form method="post" id="login-form">
								<div className="input-with-icon-left">
									<i className="icon-material-baseline-mail-outline"></i>
									<input type="text" className="input-text with-border" name="emailaddress" id="emailaddress" placeholder="Email Address" required />
								</div>

								<div className="input-with-icon-left">
									<i className="icon-material-outline-lock"></i>
									<input type="password" className="input-text with-border" name="password" id="password" placeholder="Password" required />
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
