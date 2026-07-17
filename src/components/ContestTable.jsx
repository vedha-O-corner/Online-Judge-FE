import { useNavigate } from "react-router-dom";

import "./ContestTable.css";

const ContestTable = ({ contests }) => {

    const navigate = useNavigate();

    const getStatus = (contest) => {

        const now = new Date();

        const start = new Date(contest.startTime);

        const end = new Date(contest.endTime);

        if (now < start) return "Upcoming";

        if (now > end) return "Ended";

        return "Live";

    };

    return (

        <div className="contest-table-container">

            <table className="contest-table">

                <thead>

                    <tr>

                        <th>Title</th>

                        <th>Start Time</th>

                        <th>End Time</th>

                        <th>Status</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        contests.map((contest) => (

                            <tr key={contest._id}>

                                <td>{contest.title}</td>

                                <td>

                                    {new Date(
                                        contest.startTime
                                    ).toLocaleString()}

                                </td>

                                <td>

                                    {new Date(
                                        contest.endTime
                                    ).toLocaleString()}

                                </td>

                                <td>

                                    <span
                                        className={`contest-status ${getStatus(contest).toLowerCase()}`}
                                    >

                                        {getStatus(contest)}

                                    </span>

                                </td>

                                <td>

                                    <button
                                        className="view-btn"
                                        onClick={() =>
                                            navigate(
                                                `/contests/${contest._id}`
                                            )
                                        }
                                    >

                                        View Contest

                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

};

export default ContestTable;