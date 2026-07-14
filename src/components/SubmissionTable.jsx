const SubmissionTable = ({ submissions }) => {

    const getColor = (status) => {

        switch (status) {

            case "Accepted":
                return "green";

            case "Wrong Answer":
                return "red";

            case "Compilation Error":
                return "orange";

            case "Runtime Error":
                return "purple";

            case "Time Limit Exceeded":
                return "goldenrod";

            default:
                return "blue";

        }

    };

    return (

        <table
            style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "20px",
                background: "white",
            }}
        >

            <thead>

                <tr>

                    <th style={styles.header}>Problem</th>

                    <th style={styles.header}>Language</th>

                    <th style={styles.header}>Verdict</th>

                    <th style={styles.header}>Submitted</th>

                </tr>

            </thead>

            <tbody>

                {

                    submissions.map((submission) => (

                        <tr key={submission._id}>

                            <td style={styles.cell}>
                                {submission.problem.title}
                            </td>

                            <td style={styles.cell}>
                                {submission.language}
                            </td>

                            <td
                                style={{
                                    ...styles.cell,
                                    color: getColor(submission.status),
                                    fontWeight: "bold",
                                }}
                            >
                                {submission.status}
                            </td>

                            <td style={styles.cell}>
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

    );

};

const styles = {

    header: {

        border: "1px solid #ddd",

        padding: "12px",

        background: "#1f2937",

        color: "white",

    },

    cell: {

        border: "1px solid #ddd",

        padding: "12px",

        textAlign: "center",

    },

};

export default SubmissionTable;