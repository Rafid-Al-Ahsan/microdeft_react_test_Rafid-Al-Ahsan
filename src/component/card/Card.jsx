import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Card.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            const token = localStorage.getItem("authToken");

            if (!token) {
                toast.error("Authorization token is missing!");
                return;
            }   

            try {
                const response = await fetch("https://react-interview.crd4lc.easypanel.host/api/course", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch courses");
                }

                const responseData = await response.json();
                console.log("Fetched Courses:", responseData);
                setCourses(responseData?.data?.data || []);
            } catch (error) {
                console.error("Error fetching courses:", error.message);
                toast.error("Failed to fetch courses. Please try again.");
            }
        };

        fetchCourses();
    }, []);

    return (
        <div>
            <h1 className="course-title">Courses</h1>
            <div className="course-container">
                {courses.length > 0 ? (
                    courses.map((course) => (
                        <div className="course-card" key={course.id}>
                            <img src={course.image} alt='image' />
                            <div className="badge" style={{ backgroundColor: course.badge_color }}>
                                {course.badge_text}
                            </div>
                            <h2>{course.title}</h2>
                            <p>{course.description}</p>
                            <h3><span style={{ fontWeight: 'bold' }}>Instructor</span>: {course.instructor_name}</h3>
                        </div>
                    ))
                ) : (
                    <p>No courses found.</p>
                )}
            </div>

            <ToastContainer />
        </div>
    );
};

export default Courses;
