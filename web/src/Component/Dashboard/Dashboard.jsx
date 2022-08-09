
import { Outlet } from "react-router-dom";

import HeaderLayout from "../Comon/Header";

function DashboardLayout() {

    return (
        <>
            <HeaderLayout> </HeaderLayout>
            <Outlet />
        </>
    );
}

export default DashboardLayout