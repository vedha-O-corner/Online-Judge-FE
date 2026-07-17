import "./VerdictCard.css";

const VerdictCard = ({
    submission,
}) => {

    return (

        <div className="verdict-card">

            <h2>

                Latest Submission

            </h2>

            {

                !submission ?

                    (

                        <div className="empty-verdict">

                            No submissions yet.

                        </div>

                    )

                    :

                    (

                        <>

                            <div className="verdict-status">

                                {submission.status}

                            </div>

                            <div className="verdict-row">

                                <span>

                                    Language

                                </span>

                                <span>

                                    {submission.language}

                                </span>

                            </div>

                            <div className="verdict-row">

                                <span>

                                    Submitted

                                </span>

                                <span>

                                    {

                                        new Date(
                                            submission.createdAt
                                        ).toLocaleString()

                                    }

                                </span>

                            </div>

                            <div className="verdict-row">

                                <span>

                                    Runtime

                                </span>

                                <span>

                                    --

                                </span>

                            </div>

                            <div className="verdict-row">

                                <span>

                                    Memory

                                </span>

                                <span>

                                    --

                                </span>

                            </div>

                        </>

                    )

            }

        </div>

    );

};

export default VerdictCard;