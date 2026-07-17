import {
    FaCode,
    FaTrophy,
    FaHistory,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import "./QuickActions.css";

const QuickActions = () => {

    const navigate = useNavigate();

    const actions = [

        {
            title: "Problems",
            description: "Solve coding problems",
            icon: <FaCode />,
            path: "/problems",
        },

        {
            title: "Contests",
            description: "Participate in contests",
            icon: <FaTrophy />,
            path: "/contests",
        },

        {
            title: "Submissions",
            description: "View your submissions",
            icon: <FaHistory />,
            path: "/submissions",
        },

    ];

    return (

        <div>

            <h2 className="section-title">

                Quick Actions

            </h2>

            <div className="quick-actions">

                {

                    actions.map((action) => (

                        <div
                            key={action.title}
                            className="quick-card hover-card"
                            onClick={() =>
                                navigate(action.path)
                            }
                        >

                            <div className="quick-icon">

                                {action.icon}

                            </div>

                            <h3>

                                {action.title}

                            </h3>

                            <p>

                                {action.description}

                            </p>

                        </div>

                    ))

                }

            </div>

        </div>

    );

};

export default QuickActions;