import api from "./api";

const getHeaders = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const getContests = async () => {

    const response = await api.get("/contests");

    return response.data;

};

export const getContest = async (id) => {

    const response = await api.get(`/contests/${id}`);

    return response.data;

};

export const createContest = async (contest) => {

    const response = await api.post(
        "/contests",
        contest,
        getHeaders()
    );

    return response.data;

};

export const updateContest = async (id, contest) => {

    const response = await api.put(
        `/contests/${id}`,
        contest,
        getHeaders()
    );

    return response.data;

};

export const deleteContest = async (id) => {

    const response = await api.delete(
        `/contests/${id}`,
        getHeaders()
    );

    return response.data;

};