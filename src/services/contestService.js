import api from "./api";

// Get all contests
export const getAllContests = async () => {

    const response = await api.get("/contests");

    return response.data;

};

// Get a single contest
export const getContestById = async (id) => {

    const response = await api.get(`/contests/${id}`);

    return response.data;

};

// Join a contest
export const joinContest = async (id) => {

    const response = await api.post(`/contests/${id}/join`);

    return response.data;

};

// Get contest leaderboard
export const getContestLeaderboard = async (id) => {

    const response = await api.get(
        `/contests/${id}/leaderboard`
    );

    return response.data;

};

// ---------------------------
// Admin APIs
// ---------------------------

// Create contest
export const createContest = async (contestData) => {

    const response = await api.post(
        "/contests",
        contestData
    );

    return response.data;

};

// Update contest
export const updateContest = async (id, contestData) => {

    const response = await api.put(
        `/contests/${id}`,
        contestData
    );

    return response.data;

};

// Delete contest
export const deleteContest = async (id) => {

    const response = await api.delete(
        `/contests/${id}`
    );

    return response.data;

};