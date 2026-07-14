import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "./MainLayout.css";

const MainLayout = () => {

    return (

        <div className="layout">

            <Navbar />

            <div className="layout-body">

                <Sidebar />

                <main className="layout-content">

                    <Outlet />

                </main>

            </div>

        </div>

    );

};

export default MainLayout;