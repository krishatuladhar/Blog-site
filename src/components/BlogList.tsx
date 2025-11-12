import Card from "./Card";
import type { CardType } from "../types/card";

const BlogList = ({ cards }: { cards: CardType[] }) => {
  return (
    <div className="grid grid-cols-3 gap-1">
      {cards.map((blog, index) => (
        <Card key={index} blog={blog} />
      ))}

      <button className="border w-[123px] h-12 text-center col-span-3 justify-self-center">
        Load More
      </button>
    </div>
  );
};

export default BlogList;
