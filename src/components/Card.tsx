import type { CardType } from "../types/card";

interface IProps {
  blog: CardType;
}

const Card = ({ blog }: IProps) => {
  return (
    <div className="flex-col m-10 border border-gray-100 p-2 rounded-2xl gap-2">
      <img src={blog.image} alt="name" />
      <div className="text-white mt-4">
        <span className="text-[14px] bg-[#4B6BFB] rounded-md p-2 ">
          {blog.title}
        </span>

        <h1 className="font-medium font-sans text-[24px] mt-4 text text-black h-50">
          {blog.text}
        </h1>
        <div className="flex justify-around items-start gap-5 text-black m-1 w=[332px] mt-2">
          <img src={blog.author?.aimage} alt="Person Image" className="w-9" />
          <span className="w-full">{blog.author?.aname}</span>
          <span className="w-full ">{blog.date}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
