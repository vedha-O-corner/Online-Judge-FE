import "./SubmissionHistory.css";

const SubmissionHistory = ({ submissions }) => {

    return (

        <div className="submission-history">

            <h2>Recent Submissions</h2>

            <table>

                <thead>

                    <tr>

                        <th>Problem</th>

                        <th>Language</th>

                        <th>Status</th>

                        <th>Submitted</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        submissions.map(submission => (

                            <tr key={submission._id}>

                                <td>

                                    {

                                        submission.problem
                                            ?.title

                                    }

                                </td>

                                <td>

                                    {

                                        submission.language

                                    }

                                </td>

                                <td>

                                    {

                                        submission.status

                                    }

                                </td>

                                <td>

                                    {

                                        new Date(
                                            submission.createdAt
                                        ).toLocaleString()

                                    }

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

};

export default SubmissionHistory;