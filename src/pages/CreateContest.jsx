import { useNavigate } from "react-router-dom";

import ContestForm from "../components/ContestForm";

import { createContest } from "../services/adminContestService";

const CreateContest = () => {

    const navigate = useNavigate();

    const handleCreate = async (contest) => {

        try {

            await createContest(contest);

            alert("Contest Created Successfully");

            navigate("/admin/contests");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Unable to create contest"
            );

        }

    };

    return (

        <div>

            <h1>Create Contest</h1>

            <ContestForm
                onSubmit={handleCreate}
            />

        </div>

    );

};

export default CreateContest;