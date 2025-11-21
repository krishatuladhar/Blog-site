import type { CardType } from "../types/card";

interface CardProps {
  blog: CardType;
}

const Card = ({ blog }: CardProps) => {
  return (
    <section className="flex-col m-5 border border-gray-100 p-4 rounded-2xl gap-2">
      <div>
        <img src={blog.image} alt="name" />
      </div>

      <div className="text-white mt-4 w-full gap-4 flex flex-col">
        <span className="text-[14px] text-[#4B6BFB] font-medium font-sans bg-[#4B6BFB0D] rounded-md p-2 w-30">
          Technology
        </span>

        <h1 className="font-semibold text-2xl text-md/7 text text-black">
          {blog.text}
        </h1>
        <div className="flex justify-between items-start font-medium text-[#97989F] gap-5 text-md/6 text-[16px]">
          <img src={blog.author?.aimage} alt="Person Image" className="w-9" />
          <span className="w-full">{blog.author?.aname}</span>
          <span className="w-full ">{blog.date}</span>
        </div>
      </div>
    </section>
  );
};


export default Card;
