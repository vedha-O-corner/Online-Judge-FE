import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { registerUser } from "../services/authService";

const Register = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const data = await registerUser(formData);

            alert("Registration Successful");

            navigate("/dashboard");

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Registration Failed"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="login-page">

            <div className="login-card">

                <h1>Create Account</h1>

                <p>
                    Join the Online Judge and start solving problems.
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">

                        <label>Full Name</label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="input-group">

                        <label>Email</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="input-group">

                        <label>Password</label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <button
                        className="login-btn"
                        type="submit"
                        disabled={loading}
                    >

                        {

                            loading
                                ? "Creating Account..."
                                : "Create Account"

                        }

                    </button>

                </form>

                <p className="register-link">

                    Already have an account?

                    <Link to="/">

                        Login

                    </Link>

                </p>

            </div>

        </div>

    );

};

export default Register;