import api from "./api";

export const getAIReview = async (data) => {

    const token = localStorage.getItem("token");

    const response = await api.post(
        "/ai/review",
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;

};