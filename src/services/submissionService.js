import api from "./api";

export const submitCode = async (submissionData) => {

    const token = localStorage.getItem("token");

    const response = await api.post(
        "/submissions",
        submissionData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;

};

export const getMySubmissions = async () => {

    const token = localStorage.getItem("token");

    const response = await api.get(
        "/submissions/my",
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;

};

export const getSubmissionStatus = async (id) => {

    const response = await api.get(
        `/submissions/${id}/status`
    );

    return response.data;

};