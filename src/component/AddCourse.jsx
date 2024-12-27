import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCourse = () => {
    const handleCourseSubmission = async (event) => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const badge_text = form.badge_text.value;
        const badge_color = form.badge_color.value;
        const instructor_name = form.instructor_name.value;

        const token = localStorage.getItem("authToken"); // Retrieve the auth token

        if (!token) {
            toast.error("Authentication token missing. Please log in.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        try {
            const response = await fetch(`https://react-interview.crd4lc.easypanel.host/api/course`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Pass the auth token
                },
                body: JSON.stringify({
                    title,
                    description,
                    badge_text,
                    badge_color,
                    instructor_name,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to add course");
            }

            const data = await response.json();
            toast.success("Course added successfully!", {
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
            toast.error("Failed to add course. Please try again.", {
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
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Add a New Course</h2>

                <form onSubmit={handleCourseSubmission}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-1">Course Title</label>
                        <input
                            type="text"
                            placeholder="Enter course title"
                            name="title"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-1">Description</label>
                        <textarea
                            placeholder="Enter course description"
                            name="description"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-1">Badge Text</label>
                        <input
                            type="text"
                            placeholder="Enter badge text (e.g., Featured)"
                            name="badge_text"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-1">Badge Color</label>
                        <input
                            type="text"
                            placeholder="Enter badge color (e.g., red or #ff0000)"
                            name="badge_color"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-medium mb-1">Instructor Name</label>
                        <input
                            type="text"
                            placeholder="Enter instructor's name"
                            name="instructor_name"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-[#2485C5] text-white rounded-lg shadow-md hover:bg-[#3ca3e8] transition-all duration-300"
                    >
                        Add Course
                    </button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

export default AddCourse;
