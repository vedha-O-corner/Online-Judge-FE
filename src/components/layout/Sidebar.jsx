import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ProfilePopup from "./ProfilePopup";
import {
    FaHome,
    FaCode,
    FaTrophy,
    FaHistory,
    FaCog,
    FaClipboardList,
    FaUserCircle,
} from "react-icons/fa";

import "./Sidebar.css";


const Sidebar = () => {

    const [showProfile, setShowProfile] =
        useState(false);

    const user =
        JSON.parse(localStorage.getItem("user"));

    const navigate = useNavigate();

    return (

        <aside className="sidebar">

            <div>

                <div className="logo">

                    OJ

                </div>

                <nav>

                    <NavLink
                        to="/dashboard"
                        className="nav-item"
                    >
                        <FaHome />
                        <span>Dashboard</span>
                    </NavLink>

                    <NavLink
                        to="/problems"
                        className="nav-item"
                    >
                        <FaCode />
                        <span>Problems</span>
                    </NavLink>

                    <NavLink
                        to="/contests"
                        className="nav-item"
                    >
                        <FaTrophy />
                        <span>Contests</span>
                    </NavLink>

                    <NavLink
                        to="/submissions"
                        className="nav-item"
                    >
                        <FaHistory />
                        <span>Submissions</span>
                    </NavLink>

                    {

                        user?.role === "admin" &&

                        <>

                            <NavLink
                                to="/admin/problems"
                                className="nav-item"
                            >
                                <FaCog />
                                <span>
                                    Manage Problems
                                </span>
                            </NavLink>

                            <NavLink
                                to="/admin/contests"
                                className="nav-item"
                            >
                                <FaClipboardList />
                                <span>
                                    Manage Contests
                                </span>
                            </NavLink>

                        </>

                    }

                </nav>

            </div>

            <div className="profile">

                <button
                    className="profile-button"
                    onClick={() => navigate("/profile")}
                    title="Profile"
                >
                    <FaUserCircle size={38} />
                </button>

                <button
                    className="profile-menu-button"
                    onClick={() =>
                        setShowProfile(!showProfile)
                    }
                    title="Account Menu"
                >
                    ⋮
                </button>

            </div>

            <ProfilePopup
                open={showProfile}
                onLogout={() => {

                    localStorage.removeItem("token");

                    window.location.href = "/";

                }}
            />

        </aside>

    );

};

export default Sidebar;