import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import FooterImage from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#FFEEE3] mt-10 w-full">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid gap-10 text-center md:text-left md:grid-cols-2 xl:grid-cols-4">
        {/* About */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-lg">About</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            Tech-Tide is your go-to destination for insightful articles on
             technology trends.We bring you the
            latest tips, and stories from expert authors around the
            world.
          </p>
          <div className="text-gray-600 text-sm mt-2 space-y-1">
            <p>
              <span className="font-semibold">Email:</span> techinfo@jstemplate.net
            </p>
            <p>
              <span className="font-semibold">Phone:</span> 880 123 456 789
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <Link to="/" className="hover:text-[#4B6BFB] transition">
            Home
          </Link>
          <Link to="/blog" className="hover:text-[#4B6BFB] transition">
            Blog
          </Link>
          <Link to="/author" className="hover:text-[#4B6BFB] transition">
            Author
          </Link>
          <Link to="/contact" className="hover:text-[#4B6BFB] transition">
            Contact
          </Link>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-lg">Category</h4>
          <Link to="/technology" className="hover:text-[#4B6BFB] transition">
            Technology
          </Link>
          <Link to="/travel" className="hover:text-[#4B6BFB] transition">
            Travel
          </Link>
          <Link to="/business" className="hover:text-[#4B6BFB] transition">
            Business
          </Link>
          <Link to="/economy" className="hover:text-[#4B6BFB] transition">
            Economy
          </Link>
          <Link to="/sports" className="hover:text-[#4B6BFB] transition">
            Sports
          </Link>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-3 bg-white p-6 rounded-xl relative">
          <h4 className="text-lg font-semibold text-center md:text-left">
            Weekly Newsletter
          </h4>
          <p className="text-gray-600 text-sm">
            Get blog articles and offers via email
          </p>
          <div className="relative mt-3">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-full py-2 px-4 pr-12 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4B6BFB]"
            />
            <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <button className="mt-3 w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition font-medium">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo + copyright */}
          <div className="flex items-center gap-3">
            <img src={FooterImage} alt="Footer Logo" className="h-10 w-10" />
            <span className="text-gray-600 text-sm">
              © JS Template 2023. All Rights Reserved.
            </span>
          </div>

          {/* Policies */}
          <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
            <Link to="/terms" className="hover:text-[#4B6BFB] transition">
              Terms of Use
            </Link>
            <Link
              to="/privacy-policies"
              className="hover:text-[#4B6BFB] transition"
            >
              Privacy Policy
            </Link>
            <Link
              to="/cookie-policy"
              className="hover:text-[#4B6BFB] transition"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
