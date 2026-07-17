import { useState } from "react";

import AIReviewCard from "../components/AIReviewCard";

import { getAIReview } from "../services/aiService";

const AIReview = ({
    code,
    language,
    problem,
}) => {

    const [loading, setLoading] = useState(false);

    const [review, setReview] = useState(null);

    const handleReview = async () => {

        try {

            setLoading(true);

            const data = await getAIReview({

                code,

                language,

                problemTitle: problem.title,

                problemDescription: problem.description,

            });

            setReview(data);

        } catch (error) {

            alert(

                error.response?.data?.message ||

                "Unable to generate AI review"

            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div>

            <button
                onClick={handleReview}
                disabled={loading}
            >

                {

                    loading

                        ? "Generating AI Review..."

                        : "🤖 AI Review"

                }

            </button>

            <AIReviewCard
                review={review}
            />

        </div>

    );

};

export default AIReview;