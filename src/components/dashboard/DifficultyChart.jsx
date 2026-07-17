import "./DifficultyChart.css";

const DifficultyChart = ({
    easy = 0,
    medium = 0,
    hard = 0,
}) => {

    const total = easy + medium + hard;

    const getWidth = (value) => {

        if (total === 0) return "0%";

        return `${(value / total) * 100}%`;

    };

    return (

        <div className="difficulty-card">

            <h2>

                Difficulty Distribution

            </h2>

            <div className="difficulty-row">

                <div className="difficulty-info">

                    <span className="easy">

                        ● Easy

                    </span>

                    <span>{easy}</span>

                </div>

                <div className="progress">

                    <div
                        className="progress-fill easy-fill"
                        style={{
                            width: getWidth(easy),
                        }}
                    />

                </div>

            </div>

            <div className="difficulty-row">

                <div className="difficulty-info">

                    <span className="medium">

                        ● Medium

                    </span>

                    <span>{medium}</span>

                </div>

                <div className="progress">

                    <div
                        className="progress-fill medium-fill"
                        style={{
                            width: getWidth(medium),
                        }}
                    />

                </div>

            </div>

            <div className="difficulty-row">

                <div className="difficulty-info">

                    <span className="hard">

                        ● Hard

                    </span>

                    <span>{hard}</span>

                </div>

                <div className="progress">

                    <div
                        className="progress-fill hard-fill"
                        style={{
                            width: getWidth(hard),
                        }}
                    />

                </div>

            </div>

        </div>

    );

};

export default DifficultyChart;