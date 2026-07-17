const LeaderboardTable = ({ leaderboard }) => {

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

                    <th style={styles.header}>Rank</th>

                    <th style={styles.header}>Name</th>

                    <th style={styles.header}>Email</th>

                    <th style={styles.header}>Solved</th>

                </tr>

            </thead>

            <tbody>

                {

                    leaderboard.map((entry, index) => (

                        <tr key={entry.user._id}>

                            <td style={styles.cell}>
                                {index + 1}
                            </td>

                            <td style={styles.cell}>
                                {entry.user.name}
                            </td>

                            <td style={styles.cell}>
                                {entry.user.email}
                            </td>

                            <td
                                style={{
                                    ...styles.cell,
                                    fontWeight: "bold",
                                }}
                            >
                                {entry.solved}
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

export default LeaderboardTable;