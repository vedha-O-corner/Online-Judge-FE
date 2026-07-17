import "./RunConsole.css";

const RunConsole = ({
    input,
    setInput,
    result,
    loading,
}) => {

    const status = loading
        ? "Running"
        : result?.timedOut
            ? "Time Limit Exceeded"
            : result?.exitCode !== undefined &&
              result.exitCode !== 0
                ? "Runtime Error"
                : "Success";

    return (

        <div className="run-console">

            <div className="console-section">

                <label>

                    Custom Input

                </label>

                <textarea
                    value={input}
                    onChange={(e) =>
                        setInput(e.target.value)
                    }
                    placeholder="Enter custom input..."
                />

            </div>

            <div className="console-section">

                <label>

                    Execution Result

                </label>

                <div className="status-card">

                    <span>Status</span>

                    <strong>

                        {

                            loading

                                ? "⏳ Running"

                                : status === "Success"

                                    ? "✅ Success"

                                    : status === "Runtime Error"

                                        ? "❌ Runtime Error"

                                        : "⏱ Time Limit Exceeded"

                        }

                    </strong>

                </div>

            </div>

            <div className="console-section">

                <label>

                    Standard Output

                </label>

                <pre className="console-output">

                    {

                        loading

                            ? "Running..."

                            : result?.stdout || "(empty)"

                    }

                </pre>

            </div>

            <div className="console-section">

                <label>

                    Standard Error

                </label>

                <pre className="console-error">

                    {

                        loading

                            ? ""

                            : result?.stderr || "(none)"

                    }

                </pre>

            </div>

        </div>

    );

};

export default RunConsole;