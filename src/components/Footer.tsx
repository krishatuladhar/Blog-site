import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import FooterImage from "../assets/footer-image.png";

const Footer = () => {
  return (
    <div className="flex flex-col gap-5 bg-[#F6F6F7] mt-5">
      <div className="grid grid-cols-4  m-5 p-15 gap-2 justify-around ">
        <div className="w-[280px]">
          <span className="font-semibold">About</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad
            minim veniam
          </p>
          <span className="font-semibold">Email </span>
          <span>: info@jstemplate.net</span>
          <br />
          <span className="font-semibold">Phone </span>
          <span>: 880 123 456 789</span>
        </div>

        <div className="flex flex-col gap-2 ">
          <span className="font-semibold">Quick Link</span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/archived">Archived</Link>
          <Link to="/author">Author</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold">Category</span>
          <Link to="/lifestyle">Lifestyle</Link>
          <Link to="/technology">Technology</Link>
          <Link to="/blog">Travel</Link>
          <Link to="/archived">Business</Link>
          <Link to="/author">Economy</Link>
          <Link to="/contact">Sports</Link>
        </div>

        <div className="w-[320px] flex flex-col bg-white p-2 relative">
          <span className=" text-center font-semibold">Weekly Newsletter</span>
          <p className="text-gray-600 pl-5">
            Get blog articles and offers via email
          </p>
          <input
            type="text"
            placeholder="Your Email"
            className="flex justify-center border border-gray-600 text-gray-600 rounded-2xl p-2 mt-3 pl-5"
          />
          <FaEnvelope className="absolute right-15 bottom-30" />
          <button className="border rounded-2xl bg-[#4B6BFB] text-white p-2 mt-2">
            Subscribe
          </button>
        </div>
      </div>

      <div className="border-t border-gray-400 flex justify-around m-3">
        <div className="flex m-5">
          <img src={FooterImage} alt="Footer Image" className="h-12 w-12" />
          <div className="flex flex-col m-2">
            <span>
              Meta <span className="font-semibold">Blog</span>
            </span>
            <span>© JS Template 2023. All Rights Reserved.</span>
          </div>
        </div>
        <div className=" flex gap-10 mt-2 p-10">
          <Link to="/terms" className="border-r border-gray-400 pr-5 ">
            Terms of Use
          </Link>
          <Link
            to="/privacy-policies"
            className="border-r border-gray-400  pr-5 "
          >
            Privacy Policy
          </Link>
          <Link to="/cookie-policy" className="border-r border-gray-400  pr-5 ">
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
