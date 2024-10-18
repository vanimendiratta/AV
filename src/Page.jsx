// pages/index.js
"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Landingpage from "./components/Landingpage";
import Contact from "./components/Contact/Contact";
import SignUpForm from "./components/Signup";
import Landingpage2 from "./components/Lpage2";
import CourseSlider from "./components/CourseSlider";
import KnowledgePartners from "./components/KnowledgePartners";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonial";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { getUser } from "./api/users";
import { useUser } from "./context/UserContext";
import Loader from "./components/Loader/Loader";

const Page = () => {
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useUser();

  useEffect(() => {
    const fetchUser = async () => {
      const authToken = localStorage.getItem("authToken");
      const isLoggedIn = localStorage.getItem("isLoggedIn");

      if (isLoggedIn && authToken) {
        try {
          const response = await getUser(authToken);
          if (response) {
            await localStorage.setItem("userId", response.id);
            await localStorage.setItem("userName", response.name);
            await localStorage.setItem("userEmail", response.email);
            await localStorage.setItem("userPhone", response.phoneNumber);
            console.log(response.name, response.email, response.phoneNumber);
            setUser(response);
          } else {
            console.error("Invalid response format", response);
          }
        } catch (error) {
          console.error("Error fetching user details:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUser();
  }, [setUser]);

  const handleOpenSignUp = () => {
    setIsSignUpVisible(true);
  };

  const handleCloseSignUp = () => {
    setIsSignUpVisible(false);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar onOpenSignUp={handleOpenSignUp} isAuthButton={true} />
      <div>
        <Landingpage />
      </div>

      <GoogleOAuthProvider clientId="708605478321-pbiskp0olke2bmi8qjikhlac9g3ti52f.apps.googleusercontent.com">
        <SignUpForm isVisible={isSignUpVisible} onClose={handleCloseSignUp} />
      </GoogleOAuthProvider>

      <Landingpage2 dataId={3} />
      <div id="programs">
        <CourseSlider onOpenSignUp={handleOpenSignUp} />
      </div>

      <KnowledgePartners />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
