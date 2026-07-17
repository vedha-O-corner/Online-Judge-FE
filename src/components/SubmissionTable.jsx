import "./SubmissionTable.css";

const SubmissionTable = ({ submissions }) => {

    return (

        <div className="submission-table-container">

            <table className="submission-table">

                <thead>

                    <tr>

                        <th>Problem</th>

                        <th>Language</th>

                        <th>Verdict</th>

                        <th>Submitted</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        submissions.map((submission) => (

                            <tr key={submission._id}>

                                <td>

                                    {submission.problem?.title ||
                                        "Deleted Problem"}

                                </td>

                                <td>

                                    <span className="language-badge">

                                        {submission.language.toUpperCase()}

                                    </span>

                                </td>

                                <td>

                                    <span
                                        className={`status ${submission.status
                                            .toLowerCase()
                                            .replace(/\s+/g, "-")}`}
                                    >

                                        {submission.status}

                                    </span>

                                </td>

                                <td>

                                    {new Date(
                                        submission.createdAt
                                    ).toLocaleString()}

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

};

export default SubmissionTable;