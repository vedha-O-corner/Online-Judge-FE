import { Link } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = () => {

    return (

        <aside className="sidebar">

            <Link to="/dashboard">
                Dashboard
            </Link>

            <Link to="/problems">
                Problems
            </Link>

            <Link to="/contests">
                Contests
            </Link>

            <Link to="/submissions">
                My Submissions
            </Link>

            <Link to="/admin/problems">
                Admin Problems
            </Link>

            <Link to="/admin/contests">
                Admin Contests
            </Link>

        </aside>

    );

};

export default Sidebar;