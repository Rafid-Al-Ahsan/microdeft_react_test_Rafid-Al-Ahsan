import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        const email = event.target.emailfield.value;
        const password = event.target.passwordfield.value;

        try {
            const response = await fetch("https://react-interview.crd4lc.easypanel.host/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error("Login failed");
            }

            const responseData = await response.json();
            // console.log("Server Response:", responseData);

            const token = responseData?.data?.token;

            if (token) {
                localStorage.setItem("authToken", token);
                // console.log("Token stored successfully:", token);
                toast.success("Login successful!");
                navigate("/");
            } else {
                console.error("No token in response data:", responseData);
                throw new Error("Token not provided by server");
            }
        } catch (error) {
            console.error("Login error:", error.message);
            toast.error("Login failed. Please try again.");
        }
    };

    return (
        <div>
            <Link to="/">
                <div className="flex items-center justify-center bg-gray-100 absolute left-[35%] top-[5%]">
                    <span className="ml-3 text-[#2485C5] text-2xl font-bold">
                        MICRO<span className="text-gray-400">DEFT</span>
                    </span>
                </div>
            </Link>

            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-center text-2xl font-semibold mb-6">Please Login</h2>

                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                Email address
                            </label>
                            <input
                                type="email"
                                placeholder="email"
                                name="emailfield"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                name="passwordfield"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 bg-[#2485C5] text-white rounded-md hover:bg-[#3ca3e8] transition-colors mb-4"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600">
                        Do not have an account?{" "}
                        <Link to="/registration" className="text-[rgb(82,82,216)] hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Login;
