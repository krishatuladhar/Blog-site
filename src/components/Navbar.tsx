import LogoImage from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import dropDownImage from "../assets/authors/author1.png";
const Navbar = () => {
  const { user } = useAuth();
  const isAuthor = user?.role === "author";
  const [ShowDropDown, setShowDropDown] = useState(false);

  return (
    <header>
      <nav className="xl:flex justify-between items-center p-5 m-0">
        <div className="p-4">
          <img src={LogoImage} alt="Logo Image" />
          <span>Meta Blog</span>
        </div>

        <div className="hidden md:flex space-x-6 p-3">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>

          {!user && <Link to="/login">Login</Link>}

          {user && (
            <div className="relative">
              {isAuthor && <Link to="/add-post">Add Post</Link>}
              <FaUser
                className="cursor-pointer"
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
                      <span
                        className="font-semibold truncate"
                        title="Krisha Tuladhar"
                      >
                        Krisha Tuladhar
                      </span>
                      <span
                        className="text-sm text-gray-600 truncate"
                        title="krishatuladhar@gmail.com"
                      >
                        krishatuladhar@gmail.com
                      </span>
                    </div>
                  </div>

                  {/* Logout button */}
                  <div className="mt-3 border-t pt-2">
                    <Link
                      to="/logout"
                      className="block w-full text-center bg-red-500 hover:bg-red-600 text-white py-2 rounded"
                      onClick={() => setShowDropDown(false)}
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
