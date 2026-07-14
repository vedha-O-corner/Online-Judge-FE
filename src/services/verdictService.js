import api from "./api";

export const getSubmissionStatus = async (id) => {

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