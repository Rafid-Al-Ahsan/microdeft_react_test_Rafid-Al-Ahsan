import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {

    const handleRegistration = async (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const response = await fetch(`https://react-interview.crd4lc.easypanel.host/api/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (!response.ok) {
                throw new Error("Registration failed");
            }

            const data = await response.json();
            // console.log("Registration successful:", data);
            toast.success("Registration successful!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            form.reset(); // Reset form fields

        } catch (error) {
            // console.error("Error:", error.message);
            toast.error("Unsuccessful", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }




    }

    return (
        <div>

            <Link to="/"><div className="flex items-center justify-center bg-gray-100 absolute left-[35%] top-[5%]">

                <span className="ml-3 text-[#2485C5] text-2xl  font-bold">
                MICRO<span className="text-gray-400">DEFT</span>
                </span>

            </div></Link>

            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Create Your Account</h2>

                    <form onSubmit={handleRegistration}>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                name="name"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-medium mb-1">Email address</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                name="email"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                name="password"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-[#2485C5] text-white rounded-lg shadow-md hover:bg-[#3ca3e8] transition-all duration-300"
                        >
                            Register
                        </button>



                        <div className="text-center mt-4 text-sm">
                            <p className="text-gray-600">
                                Already have an account?{' '}
                                <Link to="/login" className="text-[rgb(0,127,170)] hover:underline">
                                    Login
                                </Link>
                            </p>
                        </div>
                        <ToastContainer />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Registration;