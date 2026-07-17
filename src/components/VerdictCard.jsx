import "./VerdictCard.css";

const VerdictCard = ({ submission }) => {

    if (!submission) {

        return (

            <div className="verdict-card">

                <h3>Latest Submission</h3>

                <p>No submissions yet.</p>

            </div>

        );

    }

    const status = submission.status;

    const getStatusClass = () => {

        switch (status) {

            case "Accepted":
                return "accepted";

            case "Wrong Answer":
                return "wrong-answer";

            case "Compilation Error":
                return "compilation-error";

            case "Runtime Error":
                return "runtime-error";

            case "Time Limit Exceeded":
                return "tle";

            case "Pending":
                return "pending";

            default:
                return "pending";

        }

    };

    return (

        <div className="verdict-card">

            <h3>

                Latest Submission

            </h3>

            <div className={`verdict-status ${getStatusClass()}`}>

                {status}

            </div>

            <div className="verdict-details">

                <p>

                    <strong>Language:</strong>

                    {" "}

                    {submission.language}

                </p>

                <p>

                    <strong>Submitted:</strong>

                    {" "}

                    {

                        new Date(
                            submission.createdAt
                        ).toLocaleString()

                    }

                </p>

            </div>

        </div>

    );

};

export default VerdictCard;