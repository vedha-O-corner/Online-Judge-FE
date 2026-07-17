import { useEffect, useState } from "react";

import "./Contests.css";

import { getAllContests } from "../services/contestService";

import ContestCard from "../components/contest/ContestCard";

const Contests = () => {

    const [contests, setContests] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        fetchContests();

    }, []);

    const fetchContests = async () => {

        try {

            const data = await getAllContests();

            setContests(data.contests || data);

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Unable to load contests"
            );

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return <h2>Loading Contests...</h2>;

    }

    if (error) {

        return <h2>{error}</h2>;

    }

    const now = new Date();

    const live = contests.filter((contest) => {

        const start = new Date(contest.startTime);

        const end = new Date(contest.endTime);

        return now >= start && now <= end;

    });

    const upcoming = contests.filter((contest) => {

        return new Date(contest.startTime) > now;

    });

    const past = contests.filter((contest) => {

        return new Date(contest.endTime) < now;

    });

    return (

        <div className="contests-page fade">

            <h1 className="section-title">

                Contests

            </h1>

            <ContestSection
                title="🟢 Live Contests"
                contests={live}
            />

            <ContestSection
                title="⏳ Upcoming Contests"
                contests={upcoming}
            />

            <ContestSection
                title="📜 Past Contests"
                contests={past}
            />

        </div>

    );

};

const ContestSection = ({
    title,
    contests,
}) => (

    <section className="contest-section">

        <h2>

            {title}

        </h2>

        {

            contests.length === 0 ?

                (

                    <p className="empty-text">

                        No contests available.

                    </p>

                )

                :

                (

                    <div className="contest-grid">

                        {

                            contests.map((contest) => (

                                <ContestCard
                                    key={contest._id}
                                    contest={contest}
                                />

                            ))

                        }

                    </div>

                )

        }

    </section>

);

export default Contests;