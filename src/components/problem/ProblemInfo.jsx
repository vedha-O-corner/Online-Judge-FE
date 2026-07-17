import "./ProblemInfo.css";

const Section = ({ title, children }) => (

    <div className="problem-section">

        <h3>{title}</h3>

        {children}

    </div>

);

const ProblemInfo = ({ problem }) => {

    return (

        <div className="problem-info">

            <div className="problem-header">

                <h1 className="problem-title">

                    {problem.title}

                </h1>

                <span
                    className={`difficulty ${problem.difficulty.toLowerCase()}`}
                >

                    {problem.difficulty}

                </span>

            </div>

            <Section title="Description">

                <p>{problem.description}</p>

            </Section>

            <Section title="Constraints">

                <pre>{problem.constraints}</pre>

            </Section>

            <Section title="Input Format">

                <p>{problem.inputFormat}</p>

            </Section>

            <Section title="Output Format">

                <p>{problem.outputFormat}</p>

            </Section>

            <Section title="Sample Input">

                <pre>{problem.sampleInput}</pre>

            </Section>

            <Section title="Sample Output">

                <pre>{problem.sampleOutput}</pre>

            </Section>

            <Section title="Editorial">

                <p>

                    Editorial will be available soon.

                </p>

            </Section>

        </div>

    );

};

export default ProblemInfo;