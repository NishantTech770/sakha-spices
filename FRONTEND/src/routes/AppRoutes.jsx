import { Routes, Route } from "react-router-dom";
import Home from "../landingPage/Pages/Home/Hero"
import About from "../landingPage/Pages/AboutUs/AboutUs"
import SakhaPage from "../landingPage/Pages/Products/SakhaPage"
import ShrinathPage from "../landingPage/Pages/Products/ShrinathPage"
import Blogs from "../landingPage/Pages/Blogs/Blog"
import Contact from "../landingPage/Pages/ContactUs/ContactUs"
import Signup from "../landingPage/Pages/Authentication/Signup"
import Login from "../landingPage/Pages/Authentication/Login"
import Users from "../landingPage/Pages/Admin/Dashboard"
import ContactMessages from "../landingPage/Pages/Admin/ContactMessages"

import NotFound from "../landingPage/Pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products/sakha" element={<SakhaPage />} />
        <Route path="/products/shrinath-ji" element={<ShrinathPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/messages" element={<ContactMessages />} />

        <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
