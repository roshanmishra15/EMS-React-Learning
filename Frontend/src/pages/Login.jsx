import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../component/css/Login.css";

function Login() {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setUserData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async () => {
        try {
            console.log(userData);

            const response = await axios.post(
                `${import.meta.env.VITE_URI}/auth/login`,
                userData
            );

            if (response.data.status) {
                alert("Login Successfully");

                localStorage.setItem(
                    "token",
                    response.data.token
                );

                navigate("/dashboard");
            }

        } catch (error) {
            alert(error.response?.data.message);
        }
    };

    return (
        <div className="login-container">

            <div className="login-card">

                <h2>Welcome Back</h2>

                <p>Login to your account to continue</p>

                <input
                    className="login-input"
                    type="email"
                    value={userData.email}
                    name="email"
                    placeholder="Enter Your Email"
                    onChange={handleChange}
                />

                <input
                    className="login-input"
                    type="password"
                    value={userData.password}
                    name="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                />

                <button
                    className="login-button"
                    onClick={handleSubmit}
                >
                    Login
                </button>

            </div>

        </div>
    );
}

export default Login;