import { useEffect, useState } from "react";

import "./EditContest.css";

import { useNavigate, useParams } from "react-router-dom";

import ContestForm from "../components/ContestForm";

import {
    getContest,
    updateContest,
} from "../services/adminContestService";

const EditContest = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [contest, setContest] = useState(null);

    useEffect(() => {

        loadContest();

    }, []);

    const loadContest = async () => {

        try {

            const data = await getContest(id);

            setContest({
                ...data,
                startTime: data.startTime.slice(0, 16),
                endTime: data.endTime.slice(0, 16),
                problems: data.problems.map(
                    (problem) => problem._id
                ),
            });

        } catch (error) {

            console.log(error);

        }

    };

    const handleUpdate = async (updatedContest) => {

        try {

            await updateContest(
                id,
                updatedContest
            );

            alert("Contest Updated Successfully");

            navigate("/admin/contests");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Unable to update contest"
            );

        }

    };

    if (!contest) {

        return <h2>Loading...</h2>;

    }

    return (

        <div className="edit-contest-page">

            <div className="page-title">

                <h1>Edit Contest</h1>

                <p>
                    Update contest information and participating problems.
                </p>

            </div>

            <div className="contest-form-card">

                <ContestForm
                    initialData={contest}
                    onSubmit={handleUpdate}
                />

            </div>

        </div>

    );

};

export default EditContest;