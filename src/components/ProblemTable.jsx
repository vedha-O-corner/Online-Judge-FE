import { useNavigate } from "react-router-dom";

const ProblemTable = ({ problems }) => {

    const navigate = useNavigate();

    const getDifficultyColor = (difficulty) => {

        switch (difficulty) {

            case "Easy":
                return "green";

            case "Medium":
                return "orange";

            case "Hard":
                return "red";

            default:
                return "black";

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

                    <th style={styles.header}>#</th>

                    <th style={styles.header}>Title</th>

                    <th style={styles.header}>Difficulty</th>

                    <th style={styles.header}>Action</th>

                </tr>

            </thead>

            <tbody>

                {problems.map((problem, index) => (

                    <tr key={problem._id}>

                        <td style={styles.cell}>
                            {index + 1}
                        </td>

                        <td style={styles.cell}>
                            {problem.title}
                        </td>

                        <td
                            style={{
                                ...styles.cell,
                                color: getDifficultyColor(problem.difficulty),
                                fontWeight: "bold",
                            }}
                        >
                            {problem.difficulty}
                        </td>

                        <td style={styles.cell}>

                            <button
                                onClick={() =>
                                    navigate(`/problems/${problem._id}`)
                                }
                            >
                                Solve
                            </button>

                        </td>

                    </tr>

                ))}

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

export default ProblemTable;