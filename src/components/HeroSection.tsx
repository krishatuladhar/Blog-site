import { Link } from "react-router-dom";
import personImage from "../assets/person.png";

const HeroSection = () => {
  return (
    <div>
      <div className="flex-col text-center">
        <h1 className="text-center text-3xl font-bold">Page Title</h1>
        <Link to="/">Home</Link>

        <span>|</span>
        <Link to="/link-one" className="text-gray-500">
          Link One
        </Link>
      </div>

      <div className="bg-[url('./assets/bg-image.jpg')] bg-contain bg-center bg-no-repeat h-190 w-full m-0! p-0 relative">
        <div className="text-white  absolute bottom-20 left-50 w-full">
          <span className="text-[14px] bg-[#4B6BFB] rounded-md p-2 ">
            Technology
          </span>

          <h1 className="font-bold font-sans text-[36px] w-[720px] mt-4">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <div className="flex justify-start items-center gap-3 mt-5">
            <img src={personImage} alt="Person Image" />
            <span>Tracey Wilson</span>
            <span>August 20,2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
