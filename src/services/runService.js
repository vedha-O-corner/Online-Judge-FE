import api from "./api";

export const runCode = async ({
    language,
    code,
    input,
}) => {

    const response = await api.post(
        "/run",
        {
            language,
            code,
            input,
        }
    );

    return response.data;

};