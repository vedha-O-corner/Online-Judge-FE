const RecentSubmissionTable = ({ submissions }) => {

    return (

        <table
            style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "20px",
            }}
        >

            <thead>

                <tr>

                    <th>Problem</th>

                    <th>Status</th>

                    <th>Language</th>

                </tr>

            </thead>

            <tbody>

                {

                    submissions.map((submission) => (

                        <tr key={submission._id}>

                            <td>
                                {
                                    submission.problem?.title ||
                                    "Deleted Problem"
                                }
                            </td>

                            <td>
                                {submission.status}
                            </td>

                            <td>
                                {submission.language}
                            </td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    );

};

export default RecentSubmissionTable;