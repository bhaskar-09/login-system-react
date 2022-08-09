function NotFoundComponent() {
	return (
		<>
			<div id="titlebar" className="gradient">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h2>404 Not Found</h2>

							{/* <!-- Breadcrumbs --> */}
							<nav id="breadcrumbs" className="dark">
								<ul>
									<li>
										<a href="/">Home</a>
									</li>
									<li>404 Not Found</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Page Content --> */}
			{/* <!-- Container --> */}
			<div className="container">
				<div className="row">
					<div className="col-xl-12">
						<section id="not-found" className="center margin-top-50 margin-bottom-25">
							<h2>
								404 <i className="icon-line-awesome-question-circle"></i>
							</h2>
							<p>We're sorry, but the page you were looking for doesn't exist</p>
						</section>

						<div className="row">
							<div className="col-xl-8 offset-xl-2">
								<div className="intro-banner-search-form not-found-search margin-bottom-50">
									{/* <!-- Search Field --> */}
									<div className="intro-search-field ">
										<input id="intro-keywords" type="text" placeholder="What Are You Looking For?" />
									</div>

									{/* <!-- Button --> */}
									<div className="intro-search-button">
										<button className="button ripple-effect">Search</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Container / End --> */}
		</>
	);
}
export default NotFoundComponent;
