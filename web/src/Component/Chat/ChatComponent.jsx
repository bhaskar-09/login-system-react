function ChatComponent() {
	return (
		<div className="dashboard-content-container" data-simplebar>
			<div className="dashboard-content-inner">
				{/* <!-- Dashboard Headline --> */}
				<div className="dashboard-headline">
					<h3>Messages</h3>

					{/* <!-- Breadcrumbs --> */}
					<nav id="breadcrumbs" className="dark">
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">Dashboard</a>
							</li>
							<li>Messages</li>
						</ul>
					</nav>
				</div>

				<div className="messages-container margin-top-0">
					<div className="messages-container-inner">
						{/* <!-- Messages --> */}
						<div className="messages-inbox">
							<div className="messages-headline">
								<div className="input-with-icon">
									<input id="autocomplete-input" type="text" placeholder="Search" />
									<i className="icon-material-outline-search"></i>
								</div>
							</div>

							<ul>
								<li>
									<a href="/">
										<div className="message-avatar">
											<i className="status-icon status-online"></i>
											<img src="images/user-avatar-small-03.jpg" alt="Img" />
										</div>

										<div className="message-by">
											<div className="message-by-headline">
												<h5>David Peterson</h5>
												<span>4 hours ago</span>
											</div>
											<p>Thanks for reaching out. I'm quite busy right now on many</p>
										</div>
									</a>
								</li>

								<li className="active-message">
									<a href="/">
										<div className="message-avatar">
											<i className="status-icon status-offline"></i>
											<img src="images/user-avatar-small-02.jpg" alt="Img" />
										</div>

										<div className="message-by">
											<div className="message-by-headline">
												<h5>Sindy Forest</h5>
												<span>Yesterday</span>
											</div>
											<p>Hi Tom! Hate to break it to you but I'm actually on vacation</p>
										</div>
									</a>
								</li>

								<li>
									<a href="/">
										<div className="message-avatar">
											<i className="status-icon status-offline"></i>
											<img src="images/user-avatar-placeholder.png" alt="Img" />
										</div>

										<div className="message-by">
											<div className="message-by-headline">
												<h5>Sebastiano Piccio</h5>
												<span>2 days ago</span>
											</div>
											<p>Hello, I want to talk about my project if you don't mind!</p>
										</div>
									</a>
								</li>

								<li>
									<a href="/">
										<div className="message-avatar">
											<i className="status-icon status-online"></i>
											<img src="images/user-avatar-placeholder.png" alt="Img" />
										</div>

										<div className="message-by">
											<div className="message-by-headline">
												<h5>Marcin Kowalski</h5>
												<span>2 days ago</span>
											</div>
											<p>Yes, I received payment. Thanks for cooperation!</p>
										</div>
									</a>
								</li>
							</ul>
						</div>
						{/* <!-- Messages / End --> */}

						{/* <!-- Message Content --> */}
						<div className="message-content">
							<div className="messages-headline">
								<h4>Sindy Forest</h4>
								<a href="/" className="message-action">
									<i className="icon-feather-trash-2"></i> Delete Conversation
								</a>
							</div>

							{/* <!-- Message Content Inner --> */}
							<div className="message-content-inner">
								{/* <!-- Time Sign --> */}
								<div className="message-time-sign">
									<span>28 June, 2019</span>
								</div>

								<div className="message-bubble me">
									<div className="message-bubble-inner">
										<div className="message-avatar">
											<img src="images/user-avatar-small-01.jpg" alt="Img" />
										</div>
										<div className="message-text">
											<p>Thanks for choosing my offer. I will start working on your project tomorrow.</p>
										</div>
									</div>
									<div className="clearfix"></div>
								</div>

								<div className="message-bubble">
									<div className="message-bubble-inner">
										<div className="message-avatar">
											<img src="images/user-avatar-small-02.jpg" alt="Img" />
										</div>
										<div className="message-text">
											<p>Great. If you need any further clarification let me know. 👍</p>
										</div>
									</div>
									<div className="clearfix"></div>
								</div>

								<div className="message-bubble me">
									<div className="message-bubble-inner">
										<div className="message-avatar">
											<img src="images/user-avatar-small-01.jpg" alt="Img" />
										</div>
										<div className="message-text">
											<p>Ok, I will. 😉</p>
										</div>
									</div>
									<div className="clearfix"></div>
								</div>

								{/* <!-- Time Sign --> */}
								<div className="message-time-sign">
									<span>Yesterday</span>
								</div>

								<div className="message-bubble me">
									<div className="message-bubble-inner">
										<div className="message-avatar">
											<img src="images/user-avatar-small-01.jpg" alt="Img" />
										</div>
										<div className="message-text">
											<p>Hi Sindy, I just wanted to let you know that project is finished and I'm waiting for your approval.</p>
										</div>
									</div>
									<div className="clearfix"></div>
								</div>

								<div className="message-bubble">
									<div className="message-bubble-inner">
										<div className="message-avatar">
											<img src="images/user-avatar-small-02.jpg" alt="Img" />
										</div>
										<div className="message-text">
											<p>Hi Tom! Hate to break it to you, but I'm actually on vacation 🌴 until Sunday so I can't check it now. 😎</p>
										</div>
									</div>
									<div className="clearfix"></div>
								</div>

								<div className="message-bubble me">
									<div className="message-bubble-inner">
										<div className="message-avatar">
											<img src="images/user-avatar-small-01.jpg" alt="Img" />
										</div>
										<div className="message-text">
											<p>Ok, no problem. But don't forget about last payment. 🙂</p>
										</div>
									</div>
									<div className="clearfix"></div>
								</div>

								<div className="message-bubble">
									<div className="message-bubble-inner">
										<div className="message-avatar">
											<img src="images/user-avatar-small-02.jpg" alt="Img" />
										</div>
										<div className="message-text">
											{/* <!-- Typing Indicator --> */}
											<div className="typing-indicator">
												<span></span>
												<span></span>
												<span></span>
											</div>
										</div>
									</div>
									<div className="clearfix"></div>
								</div>
							</div>
							{/* <!-- Message Content Inner / End --> */}

							{/* <!-- Reply Area --> */}
							<div className="message-reply">
								<textarea cols="1" rows="1" placeholder="Your Message" data-autoresize></textarea>
								<button className="button ripple-effect">Send</button>
							</div>
						</div>
						{/* <!-- Message Content --> */}
					</div>
				</div>
				{/* <!-- Messages Container / End --> */}

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
	);
}

export default ChatComponent;
