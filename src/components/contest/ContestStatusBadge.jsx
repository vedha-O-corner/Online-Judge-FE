import "./ContestStatusBadge.css";

const ContestStatusBadge = ({
    startTime,
    endTime,
}) => {

    const now = new Date();

    const start = new Date(startTime);

    const end = new Date(endTime);

    let status = "UPCOMING";
    let className = "upcoming";

    if (now >= start && now <= end) {

        status = "LIVE";
        className = "live";

    } else if (now > end) {

        status = "ENDED";
        className = "ended";

    }

    return (

        <span className={`contest-status ${className}`}>

            {status}

        </span>

    );

};

export default ContestStatusBadge;