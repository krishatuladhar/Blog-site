import type { CardType } from "../types/card";
import { useNavigate } from "react-router-dom";

export interface CardProps {
  blog: CardType;
}

const Card = ({ blog }: CardProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/single-post/${blog.slug}`);
  };

  return (
    <section
      onClick={handleClick}
      className="flex-col m-5 border border-gray-300 p-4 rounded-2xl gap-2 cursor-pointer"
    >
      <div>
        <img src={blog.image} alt="name" className="w-full aspect-3/3 object-cover" />
      </div>

      <div className="text-white mt-4 w-full gap-2 flex flex-col">
        <span className="text-[14px] text-[#4B6BFB] font-medium font-sans bg-[#4B6BFB0D] rounded-md p-2 w-40 text-start">
          {blog.category}
        </span>

        <h1
          className="font-semibold w-[344px] 
         text-[24px]/[28px] text text-black"
        >
          {blog.title}
        </h1>
        <div className="flex items-center text-center gap-3 p-1 font-medium text-[#97989F] text-[16px]">
          {/* Author Image */}
          <img
            src={`http://localhost:5501/${blog.author_profile}`}
            alt="Person Image"
            className="w-9 h-9 rounded-full"
          />

          <div className="flex gap-4 p-1 justify-center items-center text-center">
            <span className="text-[#333]">{blog.author_name}</span>
            <span className="text-sm text-gray-500">
              {new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
