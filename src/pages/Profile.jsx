import { useEffect, useState } from "react";

import "./Profile.css";

import { getProfile } from "../services/authService";
import { getMySubmissions } from "../services/submissionService";

import ProfileCard from "../components/profile/ProfileCard";
import StatsCard from "../components/profile/StatsCard";
import SubmissionHistory from "../components/profile/SubmissionHistory";

const Profile = () => {

    const [profile, setProfile] = useState(null);

    const [submissions, setSubmissions] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchData();

    }, []);

    const fetchData = async () => {

        try {

            const user = await getProfile();

            const submissionData =
                await getMySubmissions();

            setProfile(user);

            setSubmissions(
                submissionData.submissions
            );

        }

        catch (error) {

            console.log(error);

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return <h2>Loading...</h2>;

    }

    return (

        <div className="profile-page fade">

            <div className="profile-top">

                <ProfileCard
                    profile={profile}
                />

                <StatsCard
                    submissions={submissions}
                />

            </div>

            <SubmissionHistory
                submissions={submissions}
            />

        </div>

    );

};

export default Profile;