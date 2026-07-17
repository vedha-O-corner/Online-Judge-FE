import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./ContestDetails.css";

import { getContestById } from "../services/contestService";

import ContestStatusBadge from "../components/contest/ContestStatusBadge";
import Countdown from "../components/contest/Countdown";

const ContestDetails = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [contest, setContest] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchContest();

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
                                            navigate(
                                                `/problems/${problem._id}`
                                            )
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