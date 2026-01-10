import type { CardType } from "../types/card";
interface PostContentProps {
  blog: CardType;
}
const chunkText = (text: string, wordsPerChunk: number = 155) => {
  const words = text.split(" ");
  const chunks = [];
  for (let i = 0; i < words.length; i += wordsPerChunk) {
    chunks.push(words.slice(i, i + wordsPerChunk).join(" "));
  }
  return chunks;
};
const PostContent = ({ blog }: PostContentProps) => {
  return (
    <article className=" flex flex-col m-15 mt-5 pt-25 justify-center items-center">
      <div>
        <span className="text-[14px] bg-[#FFE3DF] rounded-md p-2 text-black">
          {blog.category}
        </span>

        <h1 className="font-semibold text-[36px] w-[720px] mt-4">
          {blog.title}
        </h1>
        <div className="flex justify-start items-center gap-3 mt-5">
          <img
            src={`http://localhost:5501/uploads/${blog.author_profile}`}
            alt={blog.author_name}
            className="w-12 rounded-full"
          />
          <span>{blog.author_name}</span>
          <span className="text-sm text-gray-500">
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
      <img
        src={`http://localhost:5501/uploads/${blog.image}`}
        alt={blog.title}
        className="mt-5 w-[80%] aspect-video overflow-hidden rounded-2xl"
      />
      <section className="text-base md:text-lg mt-6 w-[80%] leading-relaxed space-y-6 flex flex-col text-justify">
        {chunkText(blog.description).map((chunk, idx) => (
          <p key={idx}>{chunk}</p>
        ))}
      </section>
    </article>
  );
};

export default PostContent;
