import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(
        localStorage.getItem("token")
    );

    useEffect(() => {

        if (token) {
            setUser({});
        }

    }, [token]);

    const login = (jwt) => {

        localStorage.setItem("token", jwt);

        setToken(jwt);

        setUser({});

    };

    const logout = () => {

        localStorage.removeItem("token");

        setToken(null);

        setUser(null);

    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );

};

export default AuthContext;