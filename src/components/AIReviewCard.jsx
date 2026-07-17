import "./AIReviewCard.css";

const AIReviewCard = ({ review }) => {

    if (!review) {

        return (

            <div className="ai-review-card">

                <h2>🤖 AI Review</h2>

                <p className="empty-review">

                    Click <strong>AI Review</strong> to analyze your solution.

                </p>

            </div>

        );

    }

    return (

        <div className="ai-review-card">

            <h2>🤖 AI Review</h2>

            <div className="review-section">

                <h3>Current Approach</h3>

                <p>{review.currentApproach}</p>

            </div>

            <div className="review-grid">

                <div>

                    <h4>Current Time</h4>
                    <p>{review.currentTimeComplexity}</p>

                </div>

                <div>

                    <h4>Current Space</h4>
                    <p>{review.currentSpaceComplexity}</p>

                </div>

            </div>

            <div className="review-section">

                <h3>Suggested Approach</h3>

                <p>{review.suggestedApproach}</p>

            </div>

            <div className="review-grid">

                <div>

                    <h4>Suggested Time</h4>
                    <p>{review.suggestedTimeComplexity}</p>

                </div>

                <div>

                    <h4>Suggested Space</h4>
                    <p>{review.suggestedSpaceComplexity}</p>

                </div>

            </div>

            <div className="review-section">

                <h3>Suggestions</h3>

                <ul>

                    {

                        review.suggestions?.map((item, index) => (

                            <li key={index}>

                                {item}

                            </li>

                        ))

                    }

                </ul>

            </div>

        </div>

    );

};

export default AIReviewCard;