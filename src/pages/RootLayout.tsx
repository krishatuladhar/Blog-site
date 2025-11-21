import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { AuthProvider } from "../providers/AuthProvider";

const RootLayout = () => {
  return (
    <AuthProvider>
      <main className="font-work-sans">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </AuthProvider>
  );
};

export default RootLayout;
