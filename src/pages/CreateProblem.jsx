import { useNavigate } from "react-router-dom";

import ProblemForm from "../components/ProblemForm";

import { createProblem } from "../services/adminProblemService";

const CreateProblem = () => {

    const navigate = useNavigate();

    const handleCreate = async (problem) => {

        try {

            await createProblem(problem);

            alert("Problem Created Successfully");

            navigate("/admin/problems");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Unable to create problem"
            );

        }

    };

    return (

        <div>

            <h1>Create Problem</h1>

            <ProblemForm
                onSubmit={handleCreate}
            />

        </div>

    );

};

export default CreateProblem;