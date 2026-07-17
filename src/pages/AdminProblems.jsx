import { useEffect, useState } from "react";
import "./AdminProblems.css";
import {
    getProblems,
    deleteProblem,
} from "../services/adminProblemService";

import AdminProblemTable from "../components/AdminProblemTable";

const AdminProblems = () => {

    const [problems, setProblems] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadProblems();

    }, []);

    const loadProblems = async () => {

        try {

            const data = await getProblems();

            if (data.problems) {

                setProblems(data.problems);

            } else {

                setProblems(data);

            }

        } finally {

            setLoading(false);

        }

    };

    const handleDelete = async (id) => {

        const confirmed = window.confirm(
            "Delete this problem?"
        );

        if (!confirmed) return;

        try {

            await deleteProblem(id);

            alert("Problem Deleted");

            loadProblems();

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Delete Failed"
            );

        }

    };

    if (loading) {

        return <h2>Loading...</h2>;

    }

    return (

        <div className="admin-problems-page">

            <div className="page-header">

                <div>

                    <h1>Admin Problems</h1>

                    <p>
                        Manage coding problems for your platform.
                    </p>

                </div>

                <button
                    className="create-btn"
                    onClick={() =>
                        window.location.href =
                        "/admin/problems/create"
                    }
                >
                    + Create Problem
                </button>

            </div>

            <AdminProblemTable
                problems={problems}
                onDelete={handleDelete}
            />

        </div>

    );

};

export default AdminProblems;