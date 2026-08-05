import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "./Sidebar";

import "./MainLayout.css";

const MainLayout = () => {

    const location = useLocation();

    const hideSidebar =
        location.pathname.startsWith("/problems/") ||
        location.pathname.startsWith("/contests/");

    return (

        <div className="main-layout">

            {

                !hideSidebar &&

                <Sidebar />

            }

            <div
                className={
                    hideSidebar
                        ? "main-content full"
                        : "main-content"
                }
            >

                <Outlet />

            </div>

        </div>

    );

};

export default MainLayout;