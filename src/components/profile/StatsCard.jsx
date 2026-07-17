import "./StatsCard.css";

const StatsCard = ({ submissions }) => {

    const total = submissions.length;

    const accepted = submissions.filter(
        submission => submission.status === "Accepted"
    ).length;

    const solved = new Set(
        submissions
            .filter(
                submission =>
                    submission.status === "Accepted" &&
                    submission.problem &&
                    submission.problem._id
            )
            .map(
                submission =>
                    submission.problem._id
            )
    ).size;

    const rate =
        total === 0
            ? 0
            : (
                (accepted / total) * 100
            ).toFixed(1);

    return (

        <div className="stats-card">

            <h2>Statistics</h2>

            <div className="stat">

                <span>Problems Solved</span>

                <strong>{solved}</strong>

            </div>

            <div className="stat">

                <span>Total Submissions</span>

                <strong>{total}</strong>

            </div>

            <div className="stat">

                <span>Accepted</span>

                <strong>{accepted}</strong>

            </div>

            <div className="stat">

                <span>Acceptance Rate</span>

                <strong>{rate}%</strong>

            </div>

        </div>

    );

};

export default StatsCard;