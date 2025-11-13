function Login() {
    return (
        <>
            {/* Move this to index.html ideally */}
            <link
                rel="preload"
                as="image"
                href="https://res.cloudinary.com/dkt1t22qc/image/upload/v1742348949/Prestataires_Documents/smj7n1bdlpjsfsotwpco.png"
            />

            <div
                className="bg-cover bg-gradient-to-br from-[#7337FF] via-[#000000] to-[#0C7EA8]"
                style={{
                    backgroundImage:
                        "url(https://res.cloudinary.com/dkt1t22qc/image/upload/v1742348950/Prestataires_Documents/fopt5esl9cgvlcawz1z4.jpg)",
                }}
            >
                <div className="h-screen flex justify-center items-center backdrop-brightness-50">
                    <div className="flex flex-col items-center space-y-8">
                        <div>
                            <img
                                src="https://res.cloudinary.com/dkt1t22qc/image/upload/v1742348949/Prestataires_Documents/smj7n1bdlpjsfsotwpco.png"
                                alt="TyBot Logo"
                                className="cursor-pointer"
                            />
                        </div>

                        <div
                            className="rounded-[20px] w-80 p-8 bg-[#310D84]"
                            style={{
                                boxShadow: "-6px 3px 20px 4px #0000007d",
                            }}
                        >
                            <h1 className="text-white text-3xl font-bold mb-4">Login</h1>

                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Email address"
                                    className="bg-[#8777BA] w-full p-2.5 rounded-md placeholder:text-gray-300 shadow-md shadow-blue-950"
                                />

                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="bg-[#8777BA] w-full p-2.5 rounded-md placeholder:text-gray-300 shadow-md shadow-blue-950"
                                />
                            </div>

                            <div className="mb-4">
                                <span className="text-[#228CE0] text-[10px] ml-2 cursor-pointer">
                                    Forget Password?
                                </span>
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
            </div>
        </>
    )
}

export default Login
