import '../component/css/Register.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Register() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        fullname: "",
        email: "",
        mobile: "",
        password: ""
    })

    const handleChnage = (e) => {

        setUserData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async () => {
        try {
            console.log(import.meta.env.VITE_URI)
            const response = await axios.post(`${import.meta.env.VITE_URI}/auth/register`, userData);
            if (response.data.status) {
                alert("Account Created Successfully");
                navigate("/login", { replace: true })
            }
        } catch (error) {

            alert(error.response?.data.message);

        }
    }
    return (
        <div className="register-container">

            <div className="register-card">

                <h2>Create Account</h2>

                <p>Register your account to continue</p>

                <input
                    className="register-input"
                    type="text"
                    placeholder="Enter Full Name"
                    onChange={handleChnage}
                    name='fullname'
                    value={userData.fullname}
                />

                <input
                    className="register-input"
                    type="email"
                    placeholder="Enter Your Email"
                    name='email'

                    onChange={handleChnage}
                    value={userData.email}
                />

                <input
                    className="register-input"
                    type="text"
                    placeholder="Enter Mobile Number"
                    name='mobile'

                    onChange={handleChnage}
                    value={userData.mobile}
                />

                <input
                    className="register-input"
                    type="password"
                    name='password'

                    placeholder="Enter Password"
                    onChange={handleChnage}
                    value={userData.password}
                />

                <button className="register-button" onClick={handleSubmit}>
                    Register
                </button>

            </div>

        </div>
    )
}

export default Register 