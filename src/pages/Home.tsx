
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
import Footer from "../components/Footer";

const Home = () => {
  const cards: CardType[] = [
    {
      image: aimage1,
      author: {
        aname: "Tracey Wilson",
        aimage: AuthorImage1,
      },
      title: "Enhanced and Expedited Communication",
      text: " Traditional communication methods like physical mail and standard phone calls have been replaced by instant, integrated platforms",
      date: "2010/01/05",
    },
    {
      image: aimage2,
      author: {
        aname: "Jason Francisco",
        aimage: AuthorImage2,
      },
      title: "Enabled Remote and Hybrid Work",
      text: "The advent of cloud computing, high-speed internet, and mobile devices has untethered employees from physical offices.",
      date: "2080/01/05",
    },
    {
      image: aimage3,
      author: {
        aname: "Elizabeth Slavin",
        aimage: AuthorImage3,
      },
      title: "Increased Productivity and Operational Efficiency",
      text: "Routine and time-consuming manual tasks are increasingly handled by automation and artificial intelligence (AI).",
      date: "2050/01/05",
    },
    {
      image: aimage4,
      author: {
        aname: "Ernie Smith",
        aimage: AuthorImage4,
      },
      title: "Data-Driven Decision Making",
      text: "Businesses now have access to vast amounts of data and advanced analytics tools, allowing for real-time performance tracking.",
      date: "2030/01/05",
    },
    {
      image: aimage5,
      author: {
        aname: "Eric Smith",
        aimage: AuthorImage5,
      },
      title: "Improved Collaboration",
      text: "Cloud-based collaboration tools (e.g., Google Workspace, Asana) allow multiple users to share and work on documents.",
      date: "2020/01/05",
    },
    {
      image: aimage6,
      author: {
        aname: "Tracey Wilson",
        aimage: AuthorImage1,
      },
      title: "Transformed Learning and Development",
      text: "Employee training has evolved with the rise of e-learning platforms, webinars, a57nd even immersive technologies.",
      date: "20/01/05",
    },
    {
      image: aimage7,
      author: {
        aname: "Jason Francisco",
        aimage: AuthorImage2,
      },
      title: "Reshaped Job Roles and Skill Requirements",
      text: "While some jobs involving routine tasks are being displaced by automation, new roles in data analysis, AI management.",
      date: "2045/01/05",
    },
    {
      image: aimage8,
      author: {
        aname: "Elizabeth Slavin",
        aimage: AuthorImage3,
      },
      title: "Optimized Resource and Cost Management",
      text: "Technology allows businesses to optimize resources effectively, from using building utilization data to reconfigure office space.",
      date: "2040/01/05",
    },
    {
      image: aimage9,
      author: {
        aname: "Ernie Smith",
        aimage: AuthorImage4,
      },
      title: "Heightened Cybersecurity Needs",
      text: "The increased reliance on interconnected digital systems has expanded the potential for data breaches and cyber threats.",
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
