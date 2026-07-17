import "./EditorPanel.css";

import { useState } from "react";

import CodeEditor from "../CodeEditor";
import RunConsole from "./RunConsole";

import { runCode } from "../../services/runService";

const EditorPanel = ({
    language,
    setLanguage,
    code,
    setCode,
    handleSubmit,
    handleAIReview,
    reviewLoading,
}) => {

    const [customInput, setCustomInput] = useState("");

    const [runResult, setRunResult] = useState(null);

    const [running, setRunning] = useState(false);

    const handleRun = async () => {

        if (!code.trim()) {

            alert("Please write some code first.");

            return;

        }

        try {

            setRunning(true);

            setRunResult(null);

            const result = await runCode({
                language,
                code,
                input: customInput,
            });

            setRunResult(result);

        }

        catch (error) {

            setRunResult({

                stderr:
                    error.response?.data?.message ||
                    "Execution failed.",

            });

        }

        finally {

            setRunning(false);

        }

    };

    return (

        <div className="editor-panel">

            <div className="editor-toolbar">

                <select
                    value={language}
                    onChange={(e) =>
                        setLanguage(e.target.value)
                    }
                >

                    <option value="cpp">
                        C++
                    </option>

                    <option value="java">
                        Java
                    </option>

                    <option value="python">
                        Python
                    </option>

                </select>

                <div className="toolbar-buttons">

                    <button
                        onClick={handleRun}
                        disabled={running}
                    >

                        {

                            running

                                ? "Running..."

                                : "▶ Run"

                        }

                    </button>

                    <button
                        className="review-btn"
                        onClick={handleAIReview}
                        disabled={reviewLoading}
                    >

                        {

                            reviewLoading

                                ? "Generating..."

                                : "🤖 AI Review"

                        }

                    </button>

                    <button
                        className="submit-btn"
                        onClick={handleSubmit}
                    >

                        Submit

                    </button>

                </div>

            </div>

            <div className="editor-container">

                <CodeEditor
                    language={language}
                    code={code}
                    setCode={setCode}
                />

            </div>

            <RunConsole
                input={customInput}
                setInput={setCustomInput}
                result={runResult}
                loading={running}
            />

        </div>

    );

};

export default EditorPanel;