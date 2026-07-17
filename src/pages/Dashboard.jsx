import { useEffect, useState } from "react";

import "./Dashboard.css";

import { getDashboard } from "../services/dashboardService";

import DashboardCards from "../components/dashboard/DashboardCards";
import DifficultyChart from "../components/dashboard/DifficultyChart";
import UpcomingContestCard from "../components/dashboard/UpcomingContestCard";
import QuickActions from "../components/dashboard/QuickActions";

import RecentSubmissionTable from "../components/RecentSubmissionTable";

const Dashboard = () => {

    const [dashboard, setDashboard] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const data = await getDashboard();

            setDashboard(data);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return <h2>Loading Dashboard...</h2>;

    }

    return (

        <div className="dashboard fade">

            <h1 className="section-title">

                Dashboard

            </h1>

            <DashboardCards
                dashboard={dashboard}
            />

            <div className="dashboard-grid">

                <DifficultyChart
                    easy={
                        dashboard.difficultyDistribution.easy
                    }
                    medium={
                        dashboard.difficultyDistribution.medium
                    }
                    hard={
                        dashboard.difficultyDistribution.hard
                    }
                />

                <UpcomingContestCard
                    contests={
                        dashboard.upcomingContests
                    }
                />

            </div>

            <RecentSubmissionTable
                submissions={
                    dashboard.recentSubmissions
                }
            />

            <QuickActions />

        </div>

    );

};

export default Dashboard;