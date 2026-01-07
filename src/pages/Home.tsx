import HeroSection from "../components/HeroSection";
import type { CardType } from "../types/card";
import aimage1 from "../assets/cards/image1.png";
import aimage2 from "../assets/cards/image2.png";
import aimage3 from "../assets/cards/image3.png";
import aimage4 from "../assets/cards/image4.png";
import aimage5 from "../assets/cards/image5.png";
import aimage6 from "../assets/cards/image6.png";
import aimage7 from "../assets/cards/image7.png";
import aimage8 from "../assets/cards/image8.png";
import aimage9 from "../assets/cards/image9.png";
import AuthorImage1 from "../assets/authors/author1.png";
import AuthorImage2 from "../assets/authors/author2.png";
import AuthorImage3 from "../assets/authors/author3.png";
import AuthorImage4 from "../assets/authors/author4.png";
import AuthorImage5 from "../assets/authors/author5.png";
import BlogList from "../components/BlogList";

const Home = () => {
  const cards: CardType[] = [
    {
      cardId: 1,
      image: aimage1,
      author: {
        aname: "Tracey Wilson",
        aimage: AuthorImage1,
      },

      text: "Enhanced and Expedited Communication: How Technology is Changing ",
      date: "2010/01/05",
    },
    {
      cardId: 2,
      image: aimage2,
      author: {
        aname: "Jason Francisco",
        aimage: AuthorImage2,
      },

      text: "Enabled Remote and HybrcardId Work: How Technology is Changing ",
      date: "2080/01/05",
    },
    {
      cardId: 3,
      image: aimage3,
      author: {
        aname: "Elizabeth Slavin",
        aimage: AuthorImage3,
      },

      text: "Increased Productivity and Operational Efficiency: How Technology is Changing ",
      date: "2050/01/05",
    },
    {
      cardId: 4,
      image: aimage4,
      author: {
        aname: "Ernie Smith",
        aimage: AuthorImage4,
      },

      text: "Data-Driven Decision Making: How Technology is Changing ",
      date: "2030/01/05",
    },
    {
      cardId: 5,
      image: aimage5,
      author: {
        aname: "Eric Smith",
        aimage: AuthorImage5,
      },

      text: "Improved Collaboration: How Technology is Changing ",
      date: "2020/01/05",
    },
    {
      cardId: 6,
      image: aimage6,
      author: {
        aname: "Tracey Wilson",
        aimage: AuthorImage1,
      },

      text: "Transformed Learning and Development: How Technology is Changing ",
      date: "20/01/05",
    },
    {
      cardId: 7,
      image: aimage7,
      author: {
        aname: "Jason Francisco",
        aimage: AuthorImage2,
      },

      text: "Reshaped Job Roles and Skill Requirements: How Technology is Changing ",
      date: "2045/01/05",
    },
    {
      cardId: 8,
      image: aimage8,
      author: {
        aname: "Elizabeth Slavin",
        aimage: AuthorImage3,
      },

      text: "Optimized Resource and Cost Management: How Technology is Changing ",
      date: "2040/01/05",
    },
    {
      cardId: 9,
      image: aimage9,
      author: {
        aname: "Ernie Smith",
        aimage: AuthorImage4,
      },

      text: "Heightened Cybersecurity Needs: How Technology is Changing ",
      date: "2050/01/05",
    },
  ];
  return (
    <div>
      <HeroSection />
      <BlogList cards={cards} />
    </div>
  );
};

export default Home;
