import { useState } from "react"

function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [introduce, setIntroduce] = useState("")
    const [isUsernameEmpty, setIsUsernameEmpty] = useState(false)
    const [isEmailEmpty, setIsEmailEmpty] = useState(false)
    const [ispasswordEmpty, setIsPasswordEmpty] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();



        if(!username) {
           setIsUsernameEmpty(true)
        } else if(!email){
            setIsEmailEmpty(true)
        } else if(!password){
            setIsPasswordEmpty(true)
        } else {
            setIsUsernameEmpty(false)
            setIsEmailEmpty(false)
            // alert("form submitted successfully")
            setIntroduce(`your name is ${username} and your password is ${password}`)
        }
    }

    return (
        <div class="flex justify-center items-center min-h-screen bg-white">
            <div class="w-full flex items-center justify-center">
                <div class="w-3/4 max-w-md p-8 bg-white shadow-lg rounded-lg">
                <p>{introduce}</p>
                    <h2 class="text-2xl font-bold text-blue-600 mb-6">Sign up</h2>
                   
                    <form onSubmit={handleSubmit}>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                                className={`
                                    w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
                                    ${isUsernameEmpty ? 'border-2 border-red-500': ""}
                                    `}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            {isUsernameEmpty ? (<span className="text-[red]">username is empty</span>) : ""}
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {isEmailEmpty ? (<span className="text-[red]">email is empty</span>) : ""}
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {ispasswordEmpty ? (<span className="text-[red]">password is empty</span>) : ""}
                        </div>

                        <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                            Sign up
                        </button>
                    </form>
                    

                    <p class="mt-6 text-sm text-center text-gray-600">
                        Already have an account?
                        <a href="/signin" class="text-blue-600 hover:underline">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
} export default Register