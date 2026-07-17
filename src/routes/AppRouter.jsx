import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import Profile from "../pages/Profile";
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
import CreateProblem from "../pages/CreateProblem";
import EditProblem from "../pages/EditProblem";
import CreateContest from "../pages/CreateContest";
import EditContest from "../pages/EditContest";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/* Public Routes */}

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

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

                    {/* Admin Problem Routes */}

                    <Route
                        path="/admin/problems"
                        element={
                            <ProtectedRoute>
                                <AdminProblems />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/admin/problems/create"
                        element={
                            <ProtectedRoute>
                                <CreateProblem />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/admin/problems/edit/:id"
                        element={
                            <ProtectedRoute>
                                <EditProblem />
                            </ProtectedRoute>
                        }
                    />

                    {/* Admin Contest Routes */}

                    <Route
                        path="/admin/contests"
                        element={
                            <ProtectedRoute>
                                <AdminContests />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/admin/contests/create"
                        element={
                            <ProtectedRoute>
                                <CreateContest />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/admin/contests/edit/:id"
                        element={
                            <ProtectedRoute>
                                <EditContest />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/profile"
                        element={<Profile />}
                    />

                </Route>

            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;