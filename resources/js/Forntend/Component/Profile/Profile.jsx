import FooterLayout from "../Comon/Footer";


function ProfilePage() {
    return (
        <>
            <div className="dashboard-container">
                {/* Dashboard Content
	================================================== */}
                <div className="dashboard-content-container" data-simplebar>
                    <div className="dashboard-content-inner">

                        {/* Dashboard Headline */}
                        <div className="dashboard-headline">
                            <h3>Settings</h3>

                            {/* Breadcrumbs */}
                            <nav id="breadcrumbs" className="dark">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Dashboard</a></li>
                                    <li>Settings</li>
                                </ul>
                            </nav>
                        </div>

                        {/* Row */}
                        <div className="row">

                            {/* Dashboard Box */}
                            <div className="col-xl-12">
                                <div className="dashboard-box margin-top-0">

                                    {/* Headline */}
                                    <div className="headline">
                                        <h3><i className="icon-material-outline-account-circle"></i> My Account</h3>
                                    </div>

                                </div>
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
