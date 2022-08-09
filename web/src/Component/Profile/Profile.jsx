import FooterLayout from "../Comon/Footer";


function ProfilePage() {
    return (
        <>
            <div class="dashboard-container">
                {/* Dashboard Content
	================================================== */}
                <div class="dashboard-content-container" data-simplebar>
                    <div class="dashboard-content-inner">

                        {/* Dashboard Headline */}
                        <div class="dashboard-headline">
                            <h3>Settings</h3>

                            {/* Breadcrumbs */}
                            <nav id="breadcrumbs" class="dark">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Dashboard</a></li>
                                    <li>Settings</li>
                                </ul>
                            </nav>
                        </div>

                        {/* Row */}
                        <div class="row">

                            {/* Dashboard Box */}
                            <div class="col-xl-12">
                                <div class="dashboard-box margin-top-0">

                                    {/* Headline */}
                                    <div class="headline">
                                        <h3><i class="icon-material-outline-account-circle"></i> My Account</h3>
                                    </div>

                                    <div class="content with-padding padding-bottom-0">

                                        <div class="row">

                                            <div class="col-auto">
                                                <div class="avatar-wrapper" data-tippy-placement="bottom"
                                                    title="Change Avatar">
                                                    <img class="profile-pic" src="images/user-avatar-placeholder.png" alt="IMG" />
                                                    <div class="upload-button"></div>
                                                    <input class="file-upload" type="file" accept="image/*" />
                                                </div>
                                            </div>

                                            <div class="col">
                                                <div class="row">

                                                    <div class="col-xl-6">
                                                        <div class="submit-field">
                                                            <h5>First Name</h5>
                                                            <input type="text" class="with-border" value="Tom" />
                                                        </div>
                                                    </div>

                                                    <div class="col-xl-6">
                                                        <div class="submit-field">
                                                            <h5>Last Name</h5>
                                                            <input type="text" class="with-border" value="Smith" />
                                                        </div>
                                                    </div>

                                                    <div class="col-xl-6">
                                                        {/* Account Type */}
                                                        <div class="submit-field">
                                                            <h5>Account Type</h5>
                                                            <div class="account-type">
                                                                <div>
                                                                    <input type="radio" name="account-type-radio"
                                                                        id="freelancer-radio" class="account-type-radio"
                                                                        checked />
                                                                    <label for="freelancer-radio"
                                                                        class="ripple-effect-dark"><i
                                                                            class="icon-material-outline-account-circle"></i>
                                                                        Freelancer</label>
                                                                </div>

                                                                <div>
                                                                    <input type="radio" name="account-type-radio"
                                                                        id="employer-radio" class="account-type-radio" />
                                                                    <label for="employer-radio"
                                                                        class="ripple-effect-dark"><i
                                                                            class="icon-material-outline-business-center"></i>
                                                                        Employer</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-xl-6">
                                                        <div class="submit-field">
                                                            <h5>Email</h5>
                                                            <input type="text" class="with-border" value="tom@example.com" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            {/* Button */}
                            <div class="col-xl-12">
                                <a href="/" class="button ripple-effect big margin-top-30">Save Changes</a>
                            </div>

                        </div>
                        {/* Row / End */}
                        <FooterLayout></FooterLayout>

                    </div>
                </div>
                {/* Dashboard Content / End */}

            </div>
        </>
    );
}

export default ProfilePage;