import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import ProblemForm from "../components/ProblemForm";

import {
    getProblem,
    updateProblem,
} from "../services/adminProblemService";

const EditProblem = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [problem, setProblem] = useState(null);

    useEffect(() => {

        loadProblem();

    }, []);

    const loadProblem = async () => {

        try {

            const data = await getProblem(id);

            setProblem(data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleUpdate = async (updatedProblem) => {

        try {

            await updateProblem(id, updatedProblem);

            alert("Problem Updated Successfully");

            navigate("/admin/problems");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Unable to update problem"
            );

        }

    };

    if (!problem) {

        return <h2>Loading...</h2>;

    }

    return (

        <div>

            <h1>Edit Problem</h1>

            <ProblemForm
                initialData={problem}
                onSubmit={handleUpdate}
            />

        </div>

    );

};

export default EditProblem;