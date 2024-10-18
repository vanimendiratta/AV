// pages/userCourses.js
import React, { useState, useEffect } from "react";

const UserCourses = () => {
  // Simulating user and course data (replace with your API call)
  const [userData, setUserData] = useState({
    fullName: "John Doe",
    email: "johndoe@example.com",
    mobile: "1234567890",
    courses: [
      {
        id: 1,
        title: "Module 1: Basics of Suicidality",
        price: "Rs1999",
      },
      {
        id: 2,
        title: "Module 2: QPR Training",
        price: "Rs2499",
      },
    ],
  });

  // You can use useEffect to fetch real data from an API endpoint.
  // useEffect(() => {
  //   // Fetch user data from API and set it to userData state.
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* User Details */}
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">User Details</h2>
        <p>
          <strong>Full Name:</strong> {userData.fullName}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p>
          <strong>Mobile:</strong> {userData.mobile}
        </p>
      </div>

      {/* Courses Bought */}
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Courses Bought</h2>
        {userData.courses.length > 0 ? (
          <div className="space-y-4">
            {userData.courses.map((course) => (
              <div
                key={course.id}
                className="border-b-2 pb-4 mb-4 border-green-300"
              >
                <h3 className="text-xl font-bold text-green-800">{course.title}</h3>
                <p>
                  <strong>Price:</strong> {course.price}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No courses bought.</p>
        )}
      </div>
    </div>
  );
};

export default UserCourses;
