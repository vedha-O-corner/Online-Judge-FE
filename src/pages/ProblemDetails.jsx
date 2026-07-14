import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProblemById } from "../services/problemService";
import { submitCode } from "../services/submissionService";

import CodeEditor from "../components/CodeEditor";

const ProblemDetails = () => {

    const { id } = useParams();

    const [problem, setProblem] = useState(null);

    const [language, setLanguage] = useState("cpp");

    const [code, setCode] = useState(
        `#include<iostream>
using namespace std;

int main(){

    return 0;

}`
    );

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchProblem();

    }, []);

    const fetchProblem = async () => {

        try {

            const data = await getProblemById(id);

            setProblem(data);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    const handleSubmit = async () => {

        try {

            const response = await submitCode({

                problem: id,

                language,

                code,

            });

            alert(response.message);

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Submission Failed"
            );

        }

    };

    if (loading) {

        return <h2>Loading...</h2>;

    }

    if (!problem) {

        return <h2>Problem not found</h2>;

    }

    return (

        <div>

            <h1>{problem.title}</h1>

            <br />

            <h3>Description</h3>

            <p>{problem.description}</p>

            <br />

            <h3>Difficulty</h3>

            <p>{problem.difficulty}</p>

            <br />

            <h3>Constraints</h3>

            <p>{problem.constraints}</p>

            <br />

            <h3>Input Format</h3>

            <p>{problem.inputFormat}</p>

            <br />

            <h3>Output Format</h3>

            <p>{problem.outputFormat}</p>

            <br />

            <h3>Sample Input</h3>

            <pre>{problem.sampleInput}</pre>

            <br />

            <h3>Sample Output</h3>

            <pre>{problem.sampleOutput}</pre>

            <br />

            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
            >

                <option value="cpp">C++</option>

                <option value="java">Java</option>

                <option value="python">Python</option>

            </select>

            <br /><br />

            <CodeEditor
                language={language}
                code={code}
                setCode={setCode}
            />

            <br />

            <button onClick={handleSubmit}>
                Submit
            </button>

        </div>

    );

};

export default ProblemDetails;