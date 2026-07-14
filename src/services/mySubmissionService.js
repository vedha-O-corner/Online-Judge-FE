import api from "./api";

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