import { useEffect, useState } from "react";
import {
    useNavigate,
    useParams,
    useBlocker
} from "react-router-dom";
import "./ContestDetails.css";

import { getContestById } from "../services/contestService";

import ContestStatusBadge from "../components/contest/ContestStatusBadge";
import Countdown from "../components/contest/Countdown";

const ContestDetails = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [contest, setContest] = useState(null);

    const [loading, setLoading] = useState(true);

    const isContestLive =
        contest &&
        new Date() >= new Date(contest.startTime) &&
        new Date() <= new Date(contest.endTime);

    const blocker = useBlocker(!!isContestLive);

    useEffect(() => {
        if (!isContestLive) return;
        if (blocker.state === "blocked") {
            if (window.confirm("Leave this page?")) {
                blocker.proceed();
            } else {
                blocker.reset();
            }
        }
    }, [blocker]);

    useEffect(() => {
        if (!isContestLive) return;
        window.history.pushState(null, "", window.location.href);

        const handlePopState = () => {

            if (window.confirm("Leave this page? Your current progress will be save and cannot resume!")) {
                window.removeEventListener("popstate", handlePopState);
                window.history.back();
            } else {
                window.history.pushState(null, "", window.location.href);
            }

        };

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };

    }, []);

    useEffect(() => {

        fetchContest();

    }, []);

    useEffect(() => {
        if (!isContestLive) return;
        const handleBeforeUnload = (e) => {

            e.preventDefault();
            e.returnValue = "";

        };

        window.addEventListener(
            "beforeunload",
            handleBeforeUnload
        );

        return () => {

            window.removeEventListener(
                "beforeunload",
                handleBeforeUnload
            );

        };

    }, []);

    const fetchContest = async () => {

        try {

            const data = await getContestById(id);

            setContest(data.contest || data);

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

    if (!contest) {

        return <h2>Contest not found</h2>;

    }

    return (

        <div className="contest-details-page fade">

            <div className="contest-banner">

                <div>

                    <h1>

                        {contest.title}

                    </h1>

                    <p>

                        {contest.description}

                    </p>

                </div>

                <ContestStatusBadge
                    startTime={contest.startTime}
                    endTime={contest.endTime}
                />

            </div>

            <div className="contest-info card">

                <div>

                    <strong>Starts</strong>

                    <p>

                        {
                            new Date(
                                contest.startTime
                            ).toLocaleString()
                        }

                    </p>

                </div>

                <div>

                    <strong>Ends</strong>

                    <p>

                        {
                            new Date(
                                contest.endTime
                            ).toLocaleString()
                        }

                    </p>

                </div>

                <Countdown
                    startTime={contest.startTime}
                    endTime={contest.endTime}
                />

            </div>

            <div className="contest-problems">

                <h2>

                    Problems

                </h2>

                {

                    contest.problems.length === 0 ?

                        (

                            <p>

                                No Problems

                            </p>

                        )

                        :

                        (

                            contest.problems.map(

                                (problem, index) => (

                                    <div
                                        key={problem._id}
                                        className="problem-card hover-card"
                                        onClick={() =>
                                            navigate(`/contests/${contest._id}/problems/${problem._id}`)
                                        }
                                    >

                                        <span>

                                            {String.fromCharCode(
                                                65 + index
                                            )}

                                        </span>

                                        <h3>

                                            {problem.title}

                                        </h3>

                                    </div>

                                )

                            )

                        )

                }

            </div>

            <button
                className="leaderboard-btn"
                onClick={() =>
                    navigate(
                        `/leaderboard/${contest._id}`
                    )
                }
            >

                View Leaderboard

            </button>

        </div>

    );

};

export default ContestDetails;