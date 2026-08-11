import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./ProblemDetails.css";

import { getProblemById } from "../services/problemService";

import { getAIReview } from "../services/aiService";
import {
    submitCode,
    getSubmissionStatus,
} from "../services/submissionService";
import ProblemInfo from "../components/problem/ProblemInfo";
import EditorPanel from "../components/problem/EditorPanel";
import VerdictCard from "../components/problem/VerdictCard";
import AIReviewCard from "../components/AIReviewCard";

const ProblemDetails = () => {

    const { id, contestId } = useParams();

    const [problem, setProblem] = useState(null);

    const [language, setLanguage] = useState("cpp");

    const [code, setCode] = useState(
        `#include<iostream>
using namespace std;

int main(){

    return 0;

}`
    );

    const [review, setReview] = useState(null);

    const [loading, setLoading] = useState(true);

    const [reviewLoading, setReviewLoading] = useState(false);

    const [latestSubmission, setLatestSubmission] =
        useState(null);

    useEffect(() => {

        fetchProblem();

    }, []);

    const fetchProblem = async () => {

        try {

            const data = await getProblemById(id);

            setProblem(data);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    const handleSubmit = async () => {

        try {

            const response = await submitCode({

                problem: id,

                language,

                code,

                contest: contestId,

            });

            setLatestSubmission(
                response.submission
            );

            pollSubmissionStatus(
                response.submission._id
            );

        }

        catch (error) {

            console.log(error);

        }

    };

    const pollSubmissionStatus = (submissionId) => {

        const interval = setInterval(async () => {

            try {

                const data = await getSubmissionStatus(
                    submissionId
                );

                setLatestSubmission((previous) => ({

                    ...previous,

                    status: data.status,

                }));

                const finished = [

                    "Accepted",
                    "Wrong Answer",
                    "Compilation Error",
                    "Runtime Error",
                    "Time Limit Exceeded",

                ];

                if (
                    finished.includes(data.status)
                ) {

                    clearInterval(interval);

                }

            }

            catch (error) {

                console.log(error);

                clearInterval(interval);

            }

        }, 1000);

    };

    const handleAIReview = async () => {

        try {

            setReviewLoading(true);

            const data = await getAIReview({

                code,

                language,

                problemTitle: problem.title,

                problemDescription: problem.description,

                contest: contestId||null,

            });

            setReview(data);

        } catch (error) {

            console.log(error);

        } finally {

            setReviewLoading(false);

        }

    };

    if (loading) {

        return <h2>Loading...</h2>;

    }

    if (!problem) {

        return <h2>Problem not found</h2>;

    }

    return (

        <div className="problem-page fade">

            <div className="problem-left">

                <ProblemInfo
                    problem={problem}
                />

            </div>

            <div className="problem-right">

                <EditorPanel
                    language={language}
                    setLanguage={setLanguage}
                    code={code}
                    setCode={setCode}
                    handleSubmit={handleSubmit}
                    handleAIReview={handleAIReview}
                    reviewLoading={reviewLoading}
                />

                <div className="bottom-row">

                    <VerdictCard
                        submission={latestSubmission}
                    />

                    <AIReviewCard
                        review={review}
                    />

                </div>

            </div>

        </div>

    );

};

export default ProblemDetails;