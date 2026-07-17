import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import "./UpcomingContestCard.css";

const UpcomingContestCard = ({ contests }) => {

    const navigate = useNavigate();

    const contest = useMemo(() => {

        if (!contests || contests.length === 0) {

            return null;

        }

        return contests[0];

    }, [contests]);

    if (!contest) {

        return (

            <div className="contest-card">

                <h2>Upcoming Contest</h2>

                <p className="no-contest">

                    No Upcoming Contests

                </p>

            </div>

        );

    }

    const now = new Date();

    const start = new Date(contest.startTime);

    const end = new Date(contest.endTime);

    const isLive =
        now >= start && now <= end;

    const handleClick = () => {

        if (isLive) {

            const ok = window.confirm(
                `Join "${contest.title}"?`
            );

            if (!ok) return;

        }

        navigate(`/contests/${contest._id}`);

    };

    return (

        <div className="contest-card hover-card">

            <div className="contest-top">

                <h2>

                    {

                        isLive

                            ? "🟢 Contest Live"

                            : "Upcoming Contest"

                    }

                </h2>

            </div>

            <h3>

                {contest.title}

            </h3>

            <p>

                {

                    isLive

                        ? "Contest is currently running."

                        : "Starts"

                }

            </p>

            <h4>

                {

                    new Date(
                        contest.startTime
                    ).toLocaleString()

                }

            </h4>

            <button
                className="contest-btn"
                onClick={handleClick}
            >

                {

                    isLive

                        ? "Join Contest"

                        : "View Contest"

                }

            </button>

        </div>

    );

};

export default UpcomingContestCard;