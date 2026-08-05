import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ContestStatusBadge from "./ContestStatusBadge";
import Countdown from "./Countdown";
import { joinContest } from "../../services/contestService";
import "./ContestCard.css";

const ContestCard = ({ contest }) => {
    const { id } = useParams();

    const { user } = useAuth();

    const navigate = useNavigate();

    const now = new Date();

    const start = new Date(contest.startTime);

    const end = new Date(contest.endTime);

    const isLive =
        now >= start && now <= end;

    const isEnded =
        now > end;

    const handleClick = async () => {
        if (!isLive) {
            navigate(`/contests/${contest._id}`);
            return;
        }
        console.log("User ID:", user._id);
        console.log("Participants:", contest.participants);
        const joined = contest.participants.some(
            participant => participant.toString() === user._id
        );
        console.log("Joined:", joined);
        if (!joined) {
            const confirmJoin = window.confirm(
                `Join "${contest.title}"?`
            );

            if (!confirmJoin) return;

            try {
                await joinContest(contest._id);
            } catch (err) {
                console.error(err);
                alert("Cannot join contest.");
                return;
            }
        }

        navigate(`/contests/${contest._id}`);
    };

    return (

        <div className="contest-card hover-card">

            <div className="contest-card-header">

                <h2>

                    {contest.title}

                </h2>

                <ContestStatusBadge
                    startTime={contest.startTime}
                    endTime={contest.endTime}
                />

            </div>

            <p className="contest-description">

                {contest.description}

            </p>

            <Countdown
                startTime={contest.startTime}
                endTime={contest.endTime}
            />

            <div className="contest-footer">

                <button
                    className="contest-button"
                    onClick={handleClick}
                >

                    {

                        isEnded

                            ? "View Contest"

                            : isLive

                                ? "Join Contest"

                                : "View Details"

                    }

                </button>

            </div>

        </div>

    );

};

export default ContestCard;