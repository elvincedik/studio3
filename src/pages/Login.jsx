import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../components/login.css'

function Login() {
    const [inputs, setInput] = useState({})
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput((prev) => ({ ...prev, [name]: value }))
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (inputs.email === "admin@gmail.com" && inputs.password === "12345678") {
            navigate("/dashboard")
        } else {
            alert("invalid email and password")
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const styleLogin = {
        color: "white",
        backgroundColor: "blue",
        fontWeight: "bold"
    }

    return (
        <>
            <p>the email is {inputs.email}</p>
            <p>the password is {inputs.password}</p>

            <form
                className="bg-cover bg-gradient-to-br from-[#7337FF] via-[#000000] to-[#0C7EA8]"
                onSubmit={handleLogin}
            >
                <div className="h-screen flex justify-center items-center backdrop-brightness-50">
                    <div className="flex flex-col items-center space-y-8">
                        <div
                            className="rounded-[20px] w-80 p-8 bg-[#310D84]"
                            style={{
                                boxShadow: "-6px 3px 20px 4px #0000007d",
                            }}
                        >
                            <p id="welcome">welcome to login page</p>
                            <h1
                                style={styleLogin}
                            >
                                Login
                            </h1>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Email address"
                                    className="bg-[#8777BA] w-full p-2.5 rounded-md placeholder:text-gray-300 shadow-md shadow-blue-950"
                                    value={inputs.email}
                                    name="email"
                                    onChange={handleChange}
                                />

                                {/* Password Input with Toggle */}
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        className="bg-[#8777BA] w-full p-2.5 rounded-md placeholder:text-gray-300 shadow-md shadow-blue-950 pr-10"
                                        value={inputs.password}
                                        name="password"
                                        onChange={handleChange}
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-300 hover:text-white"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                                                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-center mb-4">
                                <button className="h-10 w-full cursor-pointer text-white rounded-md bg-gradient-to-br from-[#7336FF] to-[#3269FF] shadow-md shadow-blue-950">
                                    Sign In
                                </button>
                            </div>

                            <div className="text-gray-300 text-center">
                                Don&apos;t have an account?
                                <span className="text-[#228CE0] cursor-pointer"> Sign up</span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login