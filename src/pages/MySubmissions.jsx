import { useEffect, useState } from "react";

import { getMySubmissions } from "../services/mySubmissionService";

import SubmissionTable from "../components/SubmissionTable";

const MySubmissions = () => {

    const [submissions, setSubmissions] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        fetchSubmissions();

    }, []);

    const fetchSubmissions = async () => {

        try {

            const data = await getMySubmissions();

            setSubmissions(data.submissions);

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Unable to fetch submissions"
            );

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return <h2>Loading...</h2>;

    }

    if (error) {

        return <h2>{error}</h2>;

    }

    return (

        <div>

            <h1>My Submissions</h1>

            <SubmissionTable
                submissions={submissions}
            />

        </div>

    );

};

export default MySubmissions;