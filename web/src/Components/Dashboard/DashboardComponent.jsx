function DashboardComponent() {
	return (
		<div className="dashboard-container">
			<div className="dashboard-content-container" data-simplebar>
				<div className="dashboard-content-inner">
					{/* <!-- Dashboard Headline --> */}
					<div className="dashboard-headline">
						<h3>Howdy, Tom!</h3>
						<span>We are glad to see you again!</span>

						{/* <!-- Breadcrumbs --> */}
						<nav id="breadcrumbs" className="dark">
							<ul>
								<li>
									<a href="/">Home</a>
								</li>
								<li>Dashboard</li>
							</ul>
						</nav>
					</div>

					{/* <!-- Fun Facts Container --> */}
					<div className="fun-facts-container">
						<div className="fun-fact" data-fun-fact-color="#36bd78">
							<div className="fun-fact-text">
								<span>Task Bids Won</span>
								<h4>22</h4>
							</div>
							<div className="fun-fact-icon">
								<i className="icon-material-outline-gavel"></i>
							</div>
						</div>
						<div className="fun-fact" data-fun-fact-color="#b81b7f">
							<div className="fun-fact-text">
								<span>Jobs Applied</span>
								<h4>4</h4>
							</div>
							<div className="fun-fact-icon">
								<i className="icon-material-outline-business-center"></i>
							</div>
						</div>
						<div className="fun-fact" data-fun-fact-color="#efa80f">
							<div className="fun-fact-text">
								<span>Reviews</span>
								<h4>28</h4>
							</div>
							<div className="fun-fact-icon">
								<i className="icon-material-outline-rate-review"></i>
							</div>
						</div>

						{/* <!-- Last one has to be hidden below 1600px, sorry :( --> */}
						<div className="fun-fact" data-fun-fact-color="#2a41e6">
							<div className="fun-fact-text">
								<span>This Month Views</span>
								<h4>987</h4>
							</div>
							<div className="fun-fact-icon">
								<i className="icon-feather-trending-up"></i>
							</div>
						</div>
					</div>

					{/* <!-- Row --> */}
					<div className="row">
						<div className="col-xl-8">
							{/* <!-- Dashboard Box --> */}
							<div className="dashboard-box main-box-in-row">
								<div className="headline">
									<h3>
										<i className="icon-feather-bar-chart-2"></i> Your Profile Views
									</h3>
									<div className="sort-by">
										<select className="selectpicker hide-tick">
											<option>Last 6 Months</option>
											<option>This Year</option>
											<option>This Month</option>
										</select>
									</div>
								</div>
								<div className="content">
									{/* <!-- Chart --> */}
									<div className="chart">
										<canvas id="chart" width="100" height="45"></canvas>
									</div>
								</div>
							</div>
							{/* <!-- Dashboard Box / End --> */}
						</div>
						<div className="col-xl-4">
							{/* <!-- Dashboard Box --> */}
							{/* <!-- If you want adjust height of two boxes 
						 add to the lower box 'main-box-in-row' 
						 and 'child-box-in-row' to the higher box --> */}
							<div className="dashboard-box child-box-in-row">
								<div className="headline">
									<h3>
										<i className="icon-material-outline-note-add"></i> Notes
									</h3>
								</div>

								<div className="content with-padding">
									{/* <!-- Note --> */}
									<div className="dashboard-note">
										<p>Meeting with candidate at 3pm who applied for Bilingual Event Support Specialist</p>
										<div className="note-footer">
											<span className="note-priority high">High Priority</span>
											<div className="note-buttons">
												<a href="/" title="Edit" data-tippy-placement="top">
													<i className="icon-feather-edit"></i>
												</a>
												<a href="/" title="Remove" data-tippy-placement="top">
													<i className="icon-feather-trash-2"></i>
												</a>
											</div>
										</div>
									</div>
									{/* <!-- Note --> */}
									<div className="dashboard-note">
										<p>Extend premium plan for next month</p>
										<div className="note-footer">
											<span className="note-priority low">Low Priority</span>
											<div className="note-buttons">
												<a href="/" title="Edit" data-tippy-placement="top">
													<i className="icon-feather-edit"></i>
												</a>
												<a href="/" title="Remove" data-tippy-placement="top">
													<i className="icon-feather-trash-2"></i>
												</a>
											</div>
										</div>
									</div>
									{/* <!-- Note --> */}
									<div className="dashboard-note">
										<p>Send payment to David Peterson</p>
										<div className="note-footer">
											<span className="note-priority medium">Medium Priority</span>
											<div className="note-buttons">
												<a href="/" title="Edit" data-tippy-placement="top">
													<i className="icon-feather-edit"></i>
												</a>
												<a href="/" title="Remove" data-tippy-placement="top">
													<i className="icon-feather-trash-2"></i>
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="add-note-button">
									<a href="#small-dialog" className="popup-with-zoom-anim button full-width button-sliding-icon">
										Add Note <i className="icon-material-outline-arrow-right-alt"></i>
									</a>
								</div>
							</div>
							{/* <!-- Dashboard Box / End --> */}
						</div>
					</div>
					{/* <!-- Row / End --> */}

					{/* <!-- Row --> */}
					<div className="row">
						{/* <!-- Dashboard Box --> */}
						<div className="col-xl-6">
							<div className="dashboard-box">
								<div className="headline">
									<h3>
										<i className="icon-material-baseline-notifications-none"></i> Notifications
									</h3>
									<button className="mark-as-read ripple-effect-dark" data-tippy-placement="left" title="Mark all as read">
										<i className="icon-feather-check-square"></i>
									</button>
								</div>
								<div className="content">
									<ul className="dashboard-box-list">
										<li>
											<span className="notification-icon">
												<i className="icon-material-outline-group"></i>
											</span>
											<span className="notification-text">
												<strong>Michael Shannah</strong> applied for a job <a href="/">Full Stack Software Engineer</a>
											</span>
											{/* <!-- Buttons --> */}
											<div className="buttons-to-right">
												<a href="/" className="button ripple-effect ico" title="Mark as read" data-tippy-placement="left">
													<i className="icon-feather-check-square"></i>
												</a>
											</div>
										</li>
										<li>
											<span className="notification-icon">
												<i className=" icon-material-outline-gavel"></i>
											</span>
											<span className="notification-text">
												<strong>Gilber Allanis</strong> placed a bid on your <a href="/">iOS App Development</a> project
											</span>
											{/* <!-- Buttons --> */}
											<div className="buttons-to-right">
												<a href="/" className="button ripple-effect ico" title="Mark as read" data-tippy-placement="left">
													<i className="icon-feather-check-square"></i>
												</a>
											</div>
										</li>
										<li>
											<span className="notification-icon">
												<i className="icon-material-outline-autorenew"></i>
											</span>
											<span className="notification-text">
												Your job listing <a href="/">Full Stack Software Engineer</a> is expiring
											</span>
											{/* <!-- Buttons --> */}
											<div className="buttons-to-right">
												<a href="/" className="button ripple-effect ico" title="Mark as read" data-tippy-placement="left">
													<i className="icon-feather-check-square"></i>
												</a>
											</div>
										</li>
										<li>
											<span className="notification-icon">
												<i className="icon-material-outline-group"></i>
											</span>
											<span className="notification-text">
												<strong>Sindy Forrest</strong> applied for a job <a href="/">Full Stack Software Engineer</a>
											</span>
											{/* <!-- Buttons --> */}
											<div className="buttons-to-right">
												<a href="/" className="button ripple-effect ico" title="Mark as read" data-tippy-placement="left">
													<i className="icon-feather-check-square"></i>
												</a>
											</div>
										</li>
										<li>
											<span className="notification-icon">
												<i className="icon-material-outline-rate-review"></i>
											</span>
											<span className="notification-text">
												<strong>David Peterson</strong> left you a <span className="star-rating no-stars" data-rating="5.0"></span> rating after finishing <a href="/">Logo Design</a> task
											</span>
											{/* <!-- Buttons --> */}
											<div className="buttons-to-right">
												<a href="/" className="button ripple-effect ico" title="Mark as read" data-tippy-placement="left">
													<i className="icon-feather-check-square"></i>
												</a>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>

						{/* <!-- Dashboard Box --> */}
						<div className="col-xl-6">
							<div className="dashboard-box">
								<div className="headline">
									<h3>
										<i className="icon-material-outline-assignment"></i> Orders
									</h3>
								</div>
								<div className="content">
									<ul className="dashboard-box-list">
										<li>
											<div className="invoice-list-item">
												<strong>Professional Plan</strong>
												<ul>
													<li>
														<span className="unpaid">Unpaid</span>
													</li>
													<li>Order: #326</li>
													<li>Date: 12/08/2019</li>
												</ul>
											</div>
											{/* <!-- Buttons --> */}
											<div className="buttons-to-right">
												<a href="pages-checkout-page.html" className="button">
													Finish Payment
												</a>
											</div>
										</li>
										<li>
											<div className="invoice-list-item">
												<strong>Professional Plan</strong>
												<ul>
													<li>
														<span className="paid">Paid</span>
													</li>
													<li>Order: #264</li>
													<li>Date: 10/07/2019</li>
												</ul>
											</div>
											{/* <!-- Buttons --> */}
											<div className="buttons-to-right">
												<a href="pages-invoice-template.html" className="button gray">
													View Invoice
												</a>
											</div>
										</li>
										<li>
											<div className="invoice-list-item">
												<strong>Professional Plan</strong>
												<ul>
													<li>
														<span className="paid">Paid</span>
													</li>
													<li>Order: #211</li>
													<li>Date: 12/06/2019</li>
												</ul>
											</div>
											{/* <!-- Buttons --> */}
											<div className="buttons-to-right">
												<a href="pages-invoice-template.html" className="button gray">
													View Invoice
												</a>
											</div>
										</li>
										<li>
											<div className="invoice-list-item">
												<strong>Professional Plan</strong>
												<ul>
													<li>
														<span className="paid">Paid</span>
													</li>
													<li>Order: #179</li>
													<li>Date: 06/05/2019</li>
												</ul>
											</div>
											{/* <!-- Buttons --> */}
											<div className="buttons-to-right">
												<a href="pages-invoice-template.html" className="button gray">
													View Invoice
												</a>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Row / End --> */}

					{/* <!-- Footer --> */}
					<div className="dashboard-footer-spacer"></div>
					<div className="small-footer margin-top-15">
						<div className="small-footer-copyrights">
							© 2019 <strong>Hireo</strong>. All Rights Reserved.
						</div>
						<ul className="footer-social-links">
							<li>
								<a href="/" title="Facebook" data-tippy-placement="top">
									<i className="icon-brand-facebook-f"></i>
								</a>
							</li>
							<li>
								<a href="/" title="Twitter" data-tippy-placement="top">
									<i className="icon-brand-twitter"></i>
								</a>
							</li>
							<li>
								<a href="/" title="Google Plus" data-tippy-placement="top">
									<i className="icon-brand-google-plus-g"></i>
								</a>
							</li>
							<li>
								<a href="/" title="LinkedIn" data-tippy-placement="top">
									<i className="icon-brand-linkedin-in"></i>
								</a>
							</li>
						</ul>
						<div className="clearfix"></div>
					</div>
					{/* <!-- Footer / End --> */}
				</div>
			</div>
		</div>
	);
}

export default DashboardComponent;
