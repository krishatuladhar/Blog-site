import LogoImage from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-around items-center">
      <div className="m-10 p-5">
        <img src={LogoImage} alt="Logo Image" />
        <span>Meta Blog</span>
      </div>
      <div className="flex justify-around gap-3">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/single-post">
          Single Post
        </Link>
        <Link to="/pages">Pages</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="border-2 rounded-2xl p-1 relative"
        />
        <FaSearch className="absolute bg- lack-400 right-15 top-25" />
      </div>
    </div>
  );
};

export default Navbar;
