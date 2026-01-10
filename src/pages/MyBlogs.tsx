import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";
import type { CardType } from "../types/card";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const MyBlogs = () => {
  const [blogs, setBlogs] = useState<CardType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await api.get("/blog/my-blogs");
      setBlogs(res.data.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to fetch blogs");
      toast.error(err.response?.data?.message || "Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = (slug: string) => {
    confirmAlert({
      title: "Confirm Deletion",
      message: "Are you sure you want to delete this blog?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              await api.delete(`/blog/${slug}`);
              setBlogs((prev) => prev.filter((b) => b.slug !== slug));
              toast.success("Blog deleted successfully!");
            } catch (err: any) {
              toast.error(
                err.response?.data?.message || "Failed to delete blog"
              );
            }
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };
  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF4EA]/40">
        <p className="text-gray-600 text-lg">Loading your stories...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF4EA]/40">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );

  if (blogs.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF4EA]/40">
        <div className="text-center">
          <h2 className="text-2xl font-semibold font-primary">
            No stories yet
          </h2>
          <p className="text-gray-500 mt-2">
            Start writing and your blogs will appear here.
          </p>
          <Link
            to="/add-post"
            className="inline-block mt-6 px-8 py-4 rounded-full bg-[#4B6BFB] text-white hover:bg-blue-600 transition"
          >
            Write your first blog
          </Link>
        </div>
      </div>
    );

 return (
   <div className="min-h-screen bg-[#FFF4EA]/40 px-4 py-25">
     <div className="max-w-6xl mx-auto">
       {/* Header */}
       <div className="mb-12 text-center">
         <h1 className="text-4xl font-semibold font-primary">My Stories</h1>
         <p className="text-gray-500 mt-3 font-secondary">
           Manage, edit, and revisit everything you’ve written
         </p>
       </div>

       {/* Blog Grid */}
       <section className="grid md:grid-cols-3 gap-6">
         {blogs.map((blog) => (
           <div
             key={blog.id}
             className="bg-white rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden"
           >
             {blog.image && (
               <img
                 src={`http://localhost:5501/uploads/${blog.image}`}
                 alt={blog.title}
                 className="w-full h-64 object-cover"
               />
             )}

             <div className="p-6">
               {/* Meta */}
               <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-3">
                 <span>{blog.category}</span>
                 <span>•</span>
                 <span>{new Date(blog.date).toLocaleDateString()}</span>
                 {blog.isFeatured && (
                   <span className="ml-auto px-3 py-1 rounded-full text-xs bg-yellow-100 text-yellow-700">
                     Featured
                   </span>
                 )}
               </div>

               {/* Title */}
               <h2 className="text-xl font-semibold font-primary mb-2">
                 {blog.title}
               </h2>

               {/* Description */}
               <p className="text-gray-600 font-secondary line-clamp-3">
                 {blog.description}
               </p>

               {/* Actions */}
               <div className="mt-6 flex items-center gap-6">
                 <Link
                   to={`/blogs/edit/${encodeURIComponent(blog.slug)}`}
                   className="font-medium text-[#4B6BFB] hover:underline"
                 >
                   Edit
                 </Link>

                 <button
                   onClick={() => handleDelete(blog.slug)}
                   className="font-medium text-red-500 hover:underline"
                 >
                   Delete
                 </button>
               </div>
             </div>
           </div>
         ))}
       </section>
     </div>
   </div>
 );

};


export default MyBlogs;
