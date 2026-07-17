import "./ProfileCard.css";

const ProfileCard = ({ profile }) => {

    return (

        <div className="profile-card">

            <h2>Profile</h2>

            <div className="profile-item">

                <span>Name</span>

                <strong>{profile.name}</strong>

            </div>

            <div className="profile-item">

                <span>Email</span>

                <strong>{profile.email}</strong>

            </div>

            <div className="profile-item">

                <span>Role</span>

                <strong>{profile.role}</strong>

            </div>

        </div>

    );

};

export default ProfileCard;