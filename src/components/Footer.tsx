import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import FooterImage from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 bg-[#F6F6F7]  mt-5 w-full ">
      <div className="grid grid-cols-1 justify-center  p-15 gap-12 text-center md:grid-cols-2 md:text-start md:gap-10 xl:grid xl:grid-cols-4 ">
        <div className=" flex flex-col md:text-start">
          <span className="font-semibold md:text-center ">About</span>
          <p>
            Meta Blog is your go-to destination for insightful articles on
            lifestyle, technology, travel, business, and more. We bring you the
            latest trends, tips, and stories from expert authors around the
            world.
          </p>
          <div>
            <span className="font-semibold">Email </span>
            <span className="inline">: info@jstemplate.net</span>
            <br />
            <span className="font-semibold">Phone </span>
            <span>: 880 123 456 789</span>
          </div>
        </div>

        <div className="flex flex-col gap-1 text-center ">
          <span className="font-semibold">Quick Link</span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/archived">Archived</Link>
          <Link to="/author">Author</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="flex flex-col gap-2 text-center">
          <span className="font-semibold">Category</span>
          <Link to="/lifestyle">Lifestyle</Link>
          <Link to="/technology">Technology</Link>
          <Link to="/blog">Travel</Link>
          <Link to="/archived">Business</Link>
          <Link to="/author">Economy</Link>
          <Link to="/contact">Sports</Link>
        </div>

        <div className="flex flex-col bg-white p-2 relative">
          <span className=" text-center font-semibold">Weekly Newsletter</span>
          <p className="text-gray-600 pl-5">
            Get blog articles and offers via email
          </p>
          <input
            type="text"
            placeholder="Your Email"
            className="flex justify-center border border-gray-600 text-gray-600 rounded-2xl p-2 mt-3 pl-5"
          />
          <FaEnvelope className="absolute right-5 bottom-18 md:right-8 md:bottom-30" />
          <button className="border rounded-2xl  bg-[#000000] text-white hover:bg-white p-2 mt-2">
            Subscribe
          </button>
        </div>
      </div>

      <div className="justify-between border-t border-gray-400 flex">
        <div className="flex p-4 md:m-5">
          <img src={FooterImage} alt="Footer Image" className="h-12 w-12" />
          <div className="flex flex-col md:m-2">
            <span>© JS Template 2023.All Rights Reserved.</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-10 md:mt-2 md:p-10 xl:flex">
          <Link to="/terms" className=" border-gray-200 md:pr-5 md:border-r ">
            Terms of Use
          </Link>
          <Link
            to="/privacy-policies"
            className=" border-gray-200  md:pr-5 md:border-r"
          >
            Privacy Policy
          </Link>
          <Link
            to="/cookie-policy"
            className=" border-gray-200  md:pr-5 md:border-r "
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
