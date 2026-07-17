import { useNavigate } from "react-router-dom";

import "./ProblemTable.css";

const ProblemTable = ({ problems }) => {

    const navigate = useNavigate();

    const getDifficultyClass = (difficulty) => {

        switch (difficulty) {

            case "Easy":
                return "easy";

            case "Medium":
                return "medium";

            case "Hard":
                return "hard";

            default:
                return "";

        }

    };

    return (

        <div className="problem-table-container card">

            <table className="problem-table">

                <thead>

                    <tr>

                        <th>#</th>

                        <th>Problem</th>

                        <th>Difficulty</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        problems.length === 0 ?

                            <tr>

                                <td
                                    colSpan="3"
                                    className="no-problems"
                                >

                                    No Problems Found

                                </td>

                            </tr>

                            :

                            problems.map((problem, index) => (

                                <tr
                                    key={problem._id}
                                    onClick={() =>
                                        navigate(`/problems/${problem._id}`)
                                    }
                                >

                                    <td>

                                        {index + 1}

                                    </td>

                                    <td>

                                        {problem.title}

                                    </td>

                                    <td>

                                        <span
                                            className={`difficulty ${getDifficultyClass(problem.difficulty)}`}
                                        >

                                            {problem.difficulty}

                                        </span>

                                    </td>

                                </tr>

                            ))

                    }

                </tbody>

            </table>

        </div>

    );

};

export default ProblemTable;