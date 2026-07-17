import { useEffect, useState } from "react";

import "./Problems.css";

import { getAllProblems } from "../services/problemService";

import ProblemTable from "../components/ProblemTable";

const Problems = () => {

    const [problems, setProblems] = useState([]);

    const [filteredProblems, setFilteredProblems] = useState([]);

    const [search, setSearch] = useState("");

    const [difficulty, setDifficulty] = useState("All");

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        fetchProblems();

    }, []);

    useEffect(() => {

        let list = [...problems];

        if (difficulty !== "All") {

            list = list.filter(
                (problem) =>
                    problem.difficulty === difficulty
            );

        }

        if (search.trim() !== "") {

            list = list.filter((problem) =>
                problem.title
                    .toLowerCase()
                    .includes(search.toLowerCase())
            );

        }

        setFilteredProblems(list);

    }, [search, difficulty, problems]);

    const fetchProblems = async () => {

        try {

            const data = await getAllProblems();

            const list = data.problems || data;

            setProblems(list);

            setFilteredProblems(list);

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

        <div className="problems-page fade">

            <div className="problems-header">

                <h1 className="section-title">

                    All Problems

                </h1>

                <div className="problem-filters">

                    <input
                        type="text"
                        placeholder="Search problems..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                    <select
                        value={difficulty}
                        onChange={(e) =>
                            setDifficulty(
                                e.target.value
                            )
                        }
                    >

                        <option>All</option>

                        <option>Easy</option>

                        <option>Medium</option>

                        <option>Hard</option>

                    </select>

                </div>

            </div>

            <ProblemTable
                problems={filteredProblems}
            />

        </div>

    );

};

export default Problems;