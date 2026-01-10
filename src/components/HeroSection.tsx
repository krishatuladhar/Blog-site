import type { CardType } from "../types/card";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HeroSection = () => {
  // const [featured, setFeatured] = useState<CardType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchFeaturedBlog = async () => {
  //     try {
  //       const res = await axios.get(
  //         "http://localhost:5501/api/blog?featured=true&limit=1"
  //       );

  //       const blog = res.data.data?.find((b: any) => b.isfeatured) || null;

  //       if (blog) {
  //         setFeatured(blog);
  //       } else {
  //         setError("No featured blog found");
  //       }
  //     } catch (err: any) {
  //       setError(err.message || "Failed to fetch featured blog");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchFeaturedBlog();
  // }, []);

  // if (loading)
  //   return <div className="text-center p-10">Loading featured blog...</div>;
  if (error)
    return <div className="text-center p-10 text-red-500">{error}</div>;
  // if (!featured) return null;

  return (
    <section
      className="bg-no-repeat flex justify-center items-center font-primary pt-[150px] pb-10 bg-cover min-h-screen"
      style={{
        backgroundImage: `url(/bg-home1-sec1.webp)`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[900px] text-center mx-auto">
        <h1 className="text-7xl font-medium leading-[1.2]">
          Sharing{" "}
          <span className="italic text-linear">
            stories, insights, and moments
          </span>{" "}
          that define our times
        </h1>
        <p className="!pt-8 xl:w-[70%] !mx-auto !font-secondary text-xl">
          A collection of voices, ideas, and moments that reflect today’s world
          and inspire meaningful connections.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
