import {
    FaCode,
    FaTrophy,
    FaPaperPlane,
    FaCheckCircle,
    FaChartLine,
} from "react-icons/fa";

import "./DashboardCards.css";

const DashboardCards = ({ dashboard }) => {

    const cards = [

        {
            title: "Problems",
            value: dashboard.totalProblems,
            icon: <FaCode />,
        },

        {
            title: "Contests",
            value: dashboard.totalContests,
            icon: <FaTrophy />,
        },

        {
            title: "Submissions",
            value: dashboard.totalSubmissions,
            icon: <FaPaperPlane />,
        },

        {
            title: "Accepted",
            value: dashboard.acceptedSubmissions,
            icon: <FaCheckCircle />,
        },

        {
            title: "Success Rate",
            value: `${dashboard.successRate}%`,
            icon: <FaChartLine />,
        },

    ];

    return (

        <div className="dashboard-cards">

            {

                cards.map((card) => (

                    <div
                        className="dashboard-card hover-card"
                        key={card.title}
                    >

                        <div className="card-icon">
                            {card.icon}
                        </div>

                        <div>

                            <h3>{card.title}</h3>

                            <h1>{card.value}</h1>

                        </div>

                    </div>

                ))

            }

        </div>

    );

};

export default DashboardCards;