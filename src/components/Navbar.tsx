import LogoImage from "../assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { FaCog, FaPen, FaSearch, FaUser } from "react-icons/fa";
import { useDebounce } from "../hooks/useDebounce";
import { useEffect, useState } from "react";
import dropDownImage from "../assets/authors/author1.png";
const Navbar = () => {
  const { setUser, user } = useAuth();
  const isAuthor = user?.role === "author";
  const [ShowDropDown, setShowDropDown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearch = useDebounce(searchQuery, 400);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setUser(null);
    setShowDropDown(false);
    navigate("/login");
  }; // Clear search
  const handleClearSearch = () => {
    setSearchQuery("");
    navigate("/"); // Reset URL
  };

  // Nav link active style
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `hover:text-blue-500 px-2 py-1 rounded text-center ${
      isActive ? "text-blue-600 font-semibold border-b-2 border-blue-600" : ""
    }`;

  useEffect(() => {
    if (debouncedSearch.trim()) {
      console.log("Search for:", debouncedSearch);
      // Optionally fetch filtered blogs here
    } else {
      console.log("Clear search results");
    }
  }, [debouncedSearch]);

  return (
    <header className=" ">
      <nav className="absolute top-0 w-full left-0 flex items-center p-4 ">
        <div className="container mx-auto">
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center gap-2 z-10 max-h-20 max-w-20">
              <img src={LogoImage} alt="Logo Image" />
            </div>

            <div className="flex font-secondary gap-10">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/">Categories</NavLink>
              <NavLink to="/">Trending</NavLink>
              <NavLink to="/">Contact</NavLink>

              <a
                href="#blog-section"
                onClick={(e) => {
                  e.preventDefault();
                  const blogSection = document.getElementById("blog-section");
                  if (blogSection)
                    blogSection.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Blog
              </a>
            </div>

            {/* Right: Search + Profile (only if logged in) */}
            {user ? (
              <div className="flex items-center gap-4 z-10">
                {/* Search */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Navigate only on submit
                    if (searchQuery.trim()) {
                      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
                    } else {
                      navigate("/");
                    }
                  }}
                  className="relative"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search"
                    className="border-2 rounded-2xl p-2 pl-4 pr-10"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={handleClearSearch}
                      className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      ✕
                    </button>
                  )}
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <FaSearch className="text-gray-500" />
                  </button>
                </form>

                {/* Profile dropdown */}
                <div className="relative">
                  <FaUser
                    className="cursor-pointer text-xl"
                    onClick={() => setShowDropDown(!ShowDropDown)}
                  />
                  {ShowDropDown && (
                    <div
                      className="absolute right-0 top-12 w-72 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 overflow-hidden animate-[fadeIn_0.15s_ease-in-out]  from-blue-50 to-indigo-50"
                    >
                      {/* Header */}
                      <div className="flex items-center gap-4 px-5 py-4 ">
                        <img
                          src={dropDownImage}
                          alt="avatar"
                          className="h-14 w-14 rounded-full object-cover ring-2 ring-white"
                        />
                        <div className="flex flex-col min-w-0">
                          <span className="font-semibold text-gray-900 truncate">
                            {user?.name}
                          </span>
                          <span className="text-sm text-gray-600 truncate">
                            {user?.email}
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col px-3 py-2">
                        <button
                          className="flex items-center gap-3 px-4 py-2 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-pink-400 transition"
                          onClick={() => navigate("/profile")}
                        >
                          <FaCog className="text-sm" />
                          <span>Profile & Settings</span>
                        </button>

                        {user?.role === "author" && (
                          <button
                            className="flex items-center gap-3 px-4 py-2 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                            onClick={() => navigate("/my-blogs")}
                          >
                            <FaPen className="text-sm" />
                            <span>My Blogs</span>
                          </button>
                        )}
                      </div>

                      {/* Logout */}
                      <div className="border-t-gray-400 px-4 py-3">
                        <Link
                          to="/login"
                          onClick={handleLogout}
                          className="block w-full text-center bg-[#FFF4EA] py-2.5 rounded-xl font-medium hover:bg-[gray] text-black transition"
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className=" z-10 rounded-full pt-2 pb-2 px-6 text-xs font-secondary  bg-[#000000] text-white hover:bg-white border-2 hover:text-[#4B6BFB]">
                <NavLink to="/login">Login</NavLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
