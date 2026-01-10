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
      className=" flex flex-col justify-between  border border-gray-300 p-4 gap-5 cursor-pointer h-full rounded-2xl"
    >
      <div className="mb-2">
        <img
          src={`http://localhost:5501/uploads/${blog.image}`}
          alt="name"
          className="w-full aspect-3/3 object-cover rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-1 justify-between">
        <div>
          <span className="text-[14px] text-[#4B6BFB] font-medium font-sans bg-[#4B6BFB0D]  p-2 w-40 text-start">
            {blog.category}
          </span>

          <h1
            className="font-semibold
         text-[24px]/[28px] text text-black"
          >
            {blog.title}
          </h1>
        </div>
        <div className="flex items-center gap-3 mt-4">
          {/* Author Image */}
          <img
            src={`http://localhost:5501/uploads/${blog.author_profile}`}
            alt={blog.author_name}
            className="w-9 h-9 rounded-full"
          />

          <div className="flex gap-15">
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
