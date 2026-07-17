import api from "./api";

const getHeaders = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const getProblems = async () => {

    const response = await api.get("/problems");

    return response.data;

};

export const getProblem = async (id) => {

    const response = await api.get(`/problems/${id}`);

    return response.data;

};

export const createProblem = async (problem) => {

    const response = await api.post(
        "/problems",
        problem,
        getHeaders()
    );

    return response.data;

};

export const updateProblem = async (id, problem) => {

    const response = await api.put(
        `/problems/${id}`,
        problem,
        getHeaders()
    );

    return response.data;

};

export const deleteProblem = async (id) => {

    const response = await api.delete(
        `/problems/${id}`,
        getHeaders()
    );

    return response.data;

};