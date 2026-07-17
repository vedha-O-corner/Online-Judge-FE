import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/theme.css";
import "./styles/animations.css";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>

        <AuthProvider>

            <App />

        </AuthProvider>

    </React.StrictMode>

);