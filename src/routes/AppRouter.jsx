import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Problems from "../pages/Problems";
import ProblemDetails from "../pages/ProblemDetails";
import Contests from "../pages/Contests";
import ContestDetails from "../pages/ContestDetails";
import Leaderboard from "../pages/Leaderboard";
import MySubmissions from "../pages/MySubmissions";
import AdminProblems from "../pages/AdminProblems";
import AdminContests from "../pages/AdminContests";

import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* Public Routes */}

                <Route path="/" element={<Login />} />

                <Route path="/register" element={<Register />} />

                {/* Protected Routes */}

                <Route element={<MainLayout />}>

                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/problems"
                        element={
                            <ProtectedRoute>
                                <Problems />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/problems/:id"
                        element={
                            <ProtectedRoute>
                                <ProblemDetails />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/contests"
                        element={
                            <ProtectedRoute>
                                <Contests />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/contests/:id"
                        element={
                            <ProtectedRoute>
                                <ContestDetails />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/leaderboard/:id"
                        element={
                            <ProtectedRoute>
                                <Leaderboard />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/submissions"
                        element={
                            <ProtectedRoute>
                                <MySubmissions />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/admin/problems"
                        element={
                            <ProtectedRoute>
                                <AdminProblems />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/admin/contests"
                        element={
                            <ProtectedRoute>
                                <AdminContests />
                            </ProtectedRoute>
                        }
                    />

                </Route>

            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;