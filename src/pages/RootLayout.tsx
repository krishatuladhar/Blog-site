import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { AuthProvider } from "../providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RootLayout = () => {
  return (
    <AuthProvider>
      <ToastContainer position="top-right" autoClose={3000} />
      <main className="font-work-sans">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </AuthProvider>
  );
};

export default RootLayout;
