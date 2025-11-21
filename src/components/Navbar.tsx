import LogoImage from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import dropDownImage from "../assets/authors/author1.png";
const Navbar = () => {
  const { setUser, user } = useAuth();
  const isAuthor = user?.role === "author";
  const [ShowDropDown, setShowDropDown] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setUser(null);
    setShowDropDown(false);
    navigate("/login");
  };

  return (
    <header>
      <nav className="xl:flex justify-between items-center p-5 m-1">
        <div className="p-4">
          <img src={LogoImage} alt="Logo Image" />
          <span>Meta Blog</span>
        </div>

        <div className="hidden md:flex space-x-6 p-3">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>

          {!user && <Link to="/login">Login</Link>}

          {user && (
            <div className="relative flex flex-row gap-2">
              {isAuthor && (
                <button className="bg-blue-50">
                  <Link to="/add-post">Add Post</Link>
                </button>
              )}
              <FaUser
                className="cursor-pointer m-1"
                onClick={() => setShowDropDown(!ShowDropDown)}
              />
              {ShowDropDown && (
                <div className="absolute right-1 top-13 w-64 bg-white border-2 border-gray-300 rounded-2xl p-3 shadow-lg z-50">
                  {/* Profile row */}
                  <div className="flex items-center gap-3 p-2">
                    <img
                      src={dropDownImage}
                      alt="dropDownImage"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="flex flex-col truncate">
                      <span className="font-semibold truncate">
                        {user?.name}
                      </span>
                      <span className="text-sm text-gray-600 truncate">
                        {user?.email}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 border-t pt-2">
                    <Link
                      to="/login"
                      className="block w-full text-center bg-red-500 hover:bg-red-600 text-white py-2 rounded"
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
