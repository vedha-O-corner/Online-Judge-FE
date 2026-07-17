import { useEffect, useState } from "react";
import "./AdminContests.css";
import { useNavigate } from "react-router-dom";

import {
    getContests,
    deleteContest,
} from "../services/adminContestService";

const AdminContests = () => {

    const navigate = useNavigate();

    const [contests, setContests] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadContests();

    }, []);

    const loadContests = async () => {

        try {

            const data = await getContests();

            if (data.contests) {

                setContests(data.contests);

            } else {

                setContests(data);

            }

        } finally {

            setLoading(false);

        }

    };

    const handleDelete = async (id) => {

        const ok = window.confirm(
            "Delete this contest?"
        );

        if (!ok) return;

        await deleteContest(id);

        loadContests();

    };

    if (loading) {

        return <h2>Loading...</h2>;

    }

    return (

        <div className="admin-contests-page">

            <div className="page-header">

                <div>

                    <h1>Admin Contests</h1>

                    <p>
                        Create and manage programming contests.
                    </p>

                </div>

                <button
                    className="create-btn"
                    onClick={() =>
                        navigate("/admin/contests/create")
                    }
                >
                    + Create Contest
                </button>

            </div>

            <div className="contest-table-container">

                <table className="contest-table">

                    <thead>

                        <tr>

                            <th>Title</th>

                            <th>Start</th>

                            <th>End</th>

                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            contests.map((contest) => (

                                <tr key={contest._id}>

                                    <td>{contest.title}</td>

                                    <td>
                                        {new Date(
                                            contest.startTime
                                        ).toLocaleString()}
                                    </td>

                                    <td>
                                        {new Date(
                                            contest.endTime
                                        ).toLocaleString()}
                                    </td>

                                    <td className="actions">

                                        <button
                                            className="edit-btn"
                                            onClick={() =>
                                                navigate(
                                                    `/admin/contests/edit/${contest._id}`
                                                )
                                            }
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="delete-btn"
                                            onClick={() =>
                                                handleDelete(contest._id)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

};

export default AdminContests;