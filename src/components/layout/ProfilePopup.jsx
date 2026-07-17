import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import "./ProfilePopup.css";

const ProfilePopup = ({ open, onLogout }) => {

    const user =
        JSON.parse(localStorage.getItem("user"));

    if (!open) return null;

    return (

        <div className="profile-popup fade">

            <div className="profile-header">

                <FaUserCircle size={55} />

                <h3>{user?.name}</h3>

                <p>{user?.email}</p>

                <span>{user?.role}</span>

            </div>

            <button
                className="logout-btn"
                onClick={onLogout}
            >
                <FaSignOutAlt />

                Logout
            </button>

        </div>

    );

};

export default ProfilePopup;