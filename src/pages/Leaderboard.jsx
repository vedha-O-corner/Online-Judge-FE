import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./Leaderboard.css";

import { getContestLeaderboard } from "../services/contestService";

const Leaderboard = () => {

    const { id } = useParams();

    const [leaderboard, setLeaderboard] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadLeaderboard();

    }, []);

    const loadLeaderboard = async () => {

        try {

            const data = await getContestLeaderboard(id);

            setLeaderboard(data.leaderboard || []);

            console.log(data.leaderboard);

        }

        catch (error) {

            console.log(error);

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return <h2>Loading Leaderboard...</h2>;

    }

    return (

        <div className="leaderboard-page fade">

            <h1>

                Leaderboard

            </h1>

            <table className="leaderboard-table">

                <thead>

                    <tr>

                        <th>Rank</th>

                        <th>User</th>

                        <th>Solved</th>

                        <th>Score</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        leaderboard.map((user, index) => (

                            <tr
                                key={user.user._id}
                            >

                                <td>

                                    {

                                        index === 0 ?

                                            "🥇"

                                            :

                                            index === 1 ?

                                                "🥈"

                                                :

                                                index === 2 ?

                                                    "🥉"

                                                    :

                                                    index + 1

                                    }

                                </td>

                                <td>

                                    {user.user.name}

                                </td>

                                <td>

                                    {user.solved}

                                </td>

                                <td>

                                    {user.score}

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

};

export default Leaderboard;