import api from "./api";

export const getAllProblems = async () => {

    const response = await api.get("/problems");

    return response.data;

};

export const getProblemById = async (id) => {

    const response = await api.get(`/problems/${id}`);

    return response.data;

};