import Card from "./Card";
import type { CardType } from "../types/card";

const BlogList = ({ cards }: { cards: CardType[] }) => {
  return (
    <section className="grid grid-cols-3 gap-1">
      {cards.map((blog, index) => (
        <Card key={index} blog={blog} />
      ))}

      <button className="border w-[123px] h-12 text-center col-span-3 justify-self-center">
        Load More
      </button>
    </section>
  );
};

export default BlogList;
