const VerdictCard = ({ verdict }) => {

    const getColor = () => {

        switch (verdict) {

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

        <div
            style={{
                marginTop: "20px",
                padding: "20px",
                borderRadius: "10px",
                background: "#ffffff",
                border: `3px solid ${getColor()}`
            }}
        >

            <h2>Submission Result</h2>

            <h3
                style={{
                    color: getColor()
                }}
            >
                {verdict}
            </h3>

        </div>

    );

};

export default VerdictCard;