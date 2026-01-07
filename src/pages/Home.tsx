import HeroSection from "../components/HeroSection";
import BlogList from "../components/BlogList";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import type { CardType } from "../types/card";
import axios from "axios";

const Home = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("search") || "";

  const [cards, setCards] = useState<CardType[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Fetch blogs from API
  const fetchBlogs = async (pageNumber: number) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:5501/api/blog?page=${pageNumber}&limit=9
      ${
          search ? `&search=${encodeURIComponent(search)}` : ""
        }`
      );

      const data: CardType[] = res.data.data || [];

      // Update cards state
      setCards((prev) => (pageNumber === 1 ? data : [...prev, ...data]));

      // Update total pages
      setTotalPage(res.data.pagination?.totalPage || 1);

      // Scroll to blog section on first page load or new search
      if (pageNumber === 1 && data.length > 0) {
        const blogSection = document.getElementById("blog-section");
        if (blogSection)
          blogSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  // Reset cards and page when search changes
  useEffect(() => {
    setCards([]);
    setPage(1);
  }, [search]);

  // Fetch blogs whenever page or search changes
  useEffect(() => {
    fetchBlogs(page);
  }, [page, search]);

  // Load more blogs
  const loadMore = () => {
    if (page < totalPage) setPage((prev) => prev + 1);
  };

  return (
    <div>
      {!search && <HeroSection  />}

      <section id="blog-section" className="mt-10">
        <BlogList
          cards={cards}
          loadMore={loadMore}
          loading={loading}
          hasMore={page < totalPage}
        />
      </section>
    </div>
  );
};

export default Home;
