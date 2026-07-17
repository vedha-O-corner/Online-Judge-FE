import { useEffect, useState } from "react";

import "./ContestForm.css";

import { getAllProblems } from "../services/problemService";

const ContestForm = ({ initialData, onSubmit }) => {

    const [problems, setProblems] = useState([]);

    const [form, setForm] = useState(
        initialData || {
            title: "",
            description: "",
            startTime: "",
            endTime: "",
            problems: [],
            isPublic: true,
        }
    );

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

            console.log(error);

        }

    };

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setForm({
            ...form,
            [name]:
                type === "checkbox"
                    ? checked
                    : value,
        });

    };

    const toggleProblem = (id) => {

        if (form.problems.includes(id)) {

            setForm({
                ...form,
                problems: form.problems.filter(
                    (problemId) =>
                        problemId !== id
                ),
            });

        } else {

            setForm({
                ...form,
                problems: [
                    ...form.problems,
                    id,
                ],
            });

        }

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSubmit(form);

    };

    return (

        <form className="contest-form" onSubmit={handleSubmit}>

            <div className="form-group">

                <label>Contest Title</label>

                <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Contest Title"
                />

            </div>

            <div className="form-group">

                <label>Description</label>

                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Contest Description"
                />

            </div>

            <div className="datetime-row">

                <div className="form-group">

                    <label>Start Time</label>

                    <input
                        type="datetime-local"
                        name="startTime"
                        value={form.startTime}
                        onChange={handleChange}
                    />

                </div>

                <div className="form-group">

                    <label>End Time</label>

                    <input
                        type="datetime-local"
                        name="endTime"
                        value={form.endTime}
                        onChange={handleChange}
                    />

                </div>

            </div>

            <div className="problem-box">

                <h3>Select Problems</h3>

                {

                    problems.map((problem) => (

                        <label
                            className="problem-item"
                            key={problem._id}
                        >

                            <input
                                type="checkbox"
                                checked={form.problems.includes(problem._id)}
                                onChange={() =>
                                    toggleProblem(problem._id)
                                }
                            />

                            {problem.title}

                        </label>

                    ))

                }

            </div>

            <label className="public-checkbox">

                <input
                    type="checkbox"
                    name="isPublic"
                    checked={form.isPublic}
                    onChange={handleChange}
                />

                Public Contest

            </label>

            <button
                className="save-btn"
                type="submit"
            >

                Save Contest

            </button>

        </form>
    );

};

export default ContestForm;