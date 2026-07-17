import { useState } from "react";
import "./ProblemForm.css";
const ProblemForm = ({ initialData, onSubmit }) => {

    const [form, setForm] = useState(
        initialData || {
            title: "",
            description: "",
            difficulty: "Easy",
            inputFormat: "",
            outputFormat: "",
            sampleInput: "",
            sampleOutput: "",
            constraints: "",
            testCases: [
                {
                    input: "",
                    output: "",
                },
            ],
        }
    );

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    };

    const handleTestCaseChange = (index, field, value) => {

        const updated = [...form.testCases];

        updated[index][field] = value;

        setForm({
            ...form,
            testCases: updated,
        });

    };

    const addTestCase = () => {

        setForm({
            ...form,
            testCases: [
                ...form.testCases,
                {
                    input: "",
                    output: "",
                },
            ],
        });

    };

    const removeTestCase = (index) => {

        const updated = [...form.testCases];

        updated.splice(index, 1);

        setForm({
            ...form,
            testCases: updated,
        });

    };

    const submit = (e) => {

        e.preventDefault();

        onSubmit(form);

    };

    return (

        <form className="problem-form" onSubmit={submit}>

            <div className="form-row">

                <div className="form-group">

                    <label>Title</label>

                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Problem Title"
                    />

                </div>

                <div className="form-group">

                    <label>Difficulty</label>

                    <select
                        name="difficulty"
                        value={form.difficulty}
                        onChange={handleChange}
                    >
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>

                </div>

            </div>

            <div className="form-group">

                <label>Description</label>

                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                />

            </div>

            <div className="form-group">

                <label>Constraints</label>

                <textarea
                    name="constraints"
                    value={form.constraints}
                    onChange={handleChange}
                />

            </div>

            <div className="form-row">

                <div className="form-group">

                    <label>Input Format</label>

                    <textarea
                        name="inputFormat"
                        value={form.inputFormat}
                        onChange={handleChange}
                    />

                </div>

                <div className="form-group">

                    <label>Output Format</label>

                    <textarea
                        name="outputFormat"
                        value={form.outputFormat}
                        onChange={handleChange}
                    />

                </div>

            </div>

            <div className="form-row">

                <div className="form-group">

                    <label>Sample Input</label>

                    <textarea
                        name="sampleInput"
                        value={form.sampleInput}
                        onChange={handleChange}
                    />

                </div>

                <div className="form-group">

                    <label>Sample Output</label>

                    <textarea
                        name="sampleOutput"
                        value={form.sampleOutput}
                        onChange={handleChange}
                    />

                </div>

            </div>

            <div className="testcase-section">

                <h2>Hidden Test Cases</h2>

                {

                    form.testCases.map((testCase, index) => (

                        <div
                            className="testcase-card"
                            key={index}
                        >

                            <h4>

                                Test Case {index + 1}

                            </h4>

                            <div className="form-group">

                                <label>Input</label>

                                <textarea
                                    value={testCase.input}
                                    onChange={(e) =>
                                        handleTestCaseChange(
                                            index,
                                            "input",
                                            e.target.value
                                        )
                                    }
                                />

                            </div>

                            <div className="form-group">

                                <label>Output</label>

                                <textarea
                                    value={testCase.output}
                                    onChange={(e) =>
                                        handleTestCaseChange(
                                            index,
                                            "output",
                                            e.target.value
                                        )
                                    }
                                />

                            </div>

                            <button
                                className="delete-btn"
                                type="button"
                                onClick={() =>
                                    removeTestCase(index)
                                }
                            >
                                Remove Test Case
                            </button>

                        </div>

                    ))

                }

                <button
                    className="add-btn"
                    type="button"
                    onClick={addTestCase}
                >
                    + Add Test Case
                </button>

            </div>

            <button
                className="save-btn"
                type="submit"
            >
                Save Problem
            </button>

        </form>
    );

};

export default ProblemForm;