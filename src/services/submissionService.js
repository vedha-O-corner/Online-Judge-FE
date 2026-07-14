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

export const getSubmission = async (id) => {

    const token = localStorage.getItem("token");

    const response = await api.get(
        `/submissions/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;

};