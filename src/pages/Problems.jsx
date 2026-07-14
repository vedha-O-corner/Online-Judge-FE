import { useEffect, useState } from "react";

import { getAllProblems } from "../services/problemService";

import ProblemTable from "../components/ProblemTable";

const Problems = () => {

    const [problems, setProblems] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        fetchProblems();

    }, []);

    const fetchProblems = async () => {

        try {

            const data = await getAllProblems();

            if (data.problems) {
                setProblems(data.problems);
            } else {
                setProblems(data);
            }

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Failed to fetch problems"
            );

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return <h2>Loading Problems...</h2>;

    }

    if (error) {

        return <h2>{error}</h2>;

    }

    return (

        <div>

            <h1>Problems</h1>

            <ProblemTable
                problems={problems}
            />

        </div>

    );

};

export default Problems;