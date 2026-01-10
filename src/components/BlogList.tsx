import Card from "./Card";
import type { CardType } from "../types/card";

type BlogListProps = {
  cards: CardType[];
  loadMore: () => void;
  hasMore: boolean;
  loading: boolean;
};
const BlogList = ({ cards, loadMore, hasMore, loading }: BlogListProps) => {
  return (
    <section className="grid md:grid-cols-3 gap-5 p-5">
      {cards.map((blog) => (
        <Card key={blog.id} blog={blog} />
      ))}

      {hasMore && (
        <div className="col-span-3 flex justify-center">
          <button
            onClick={loadMore}
            disabled={loading}
            className="px-4 py-2 text-black rounded hover:bg-blue-200 disabled:opacity-50"
          >
            {loading ? "Loading..." : (
              <button className="border border-gray-200 rounded-xl p-2">
                Load More
              </button>
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default BlogList;
