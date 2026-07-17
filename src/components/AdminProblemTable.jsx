import "./AdminProblemTable.css";
const AdminProblemTable = ({ problems, onDelete }) => {

    return (

        <div className="problem-table-container">

            <table className="problem-table">

                <thead>

                    <tr>

                        <th>Title</th>

                        <th>Difficulty</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        problems.map((problem) => (

                            <tr key={problem._id}>

                                <td>{problem.title}</td>

                                <td>

                                    <span
                                        className={`difficulty ${problem.difficulty.toLowerCase()}`}
                                    >
                                        {problem.difficulty}
                                    </span>

                                </td>

                                <td className="actions">

                                    <button
                                        className="edit-btn"
                                        onClick={() =>
                                            window.location.href =
                                            `/admin/problems/edit/${problem._id}`
                                        }
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={() =>
                                            onDelete(problem._id)
                                        }
                                    >
                                        Delete
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

export default AdminProblemTable;