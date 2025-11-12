import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";
import type { CardType } from "../types/card";
import CardImage1 from "../assets/cards/image1.png";
import CardImage2 from "../assets/cards/image2.png";
import CardImage3 from "../assets/cards/image3.png";
import CardImage4 from "../assets/cards/image4.png";
import CardImage5 from "../assets/cards/image5.png";
import CardImage6 from "../assets/cards/image6.png";
import CardImage7 from "../assets/cards/image7.png";
import CardImage8 from "../assets/cards/image8.png";
import CardImage9 from "../assets/cards/image9.png";
import AuthorImage1 from "../assets/authors/author1.png";
import AuthorImage2 from "../assets/authors/author2.png";
import AuthorImage3 from "../assets/authors/author3.png";
import AuthorImage4 from "../assets/authors/author4.png";
import AuthorImage5 from "../assets/authors/author5.png";

const Home: React.FC = () => {
  const cards: CardType[] = [
    {
      image: CardImage1,
      aname: "Tracey Wilson",
      cardimage: AuthorImage1,
    },
    {
      image: CardImage2,
      aname: "Jason Francisco",
      cardimage: AuthorImage2,
    },
    {
      image: CardImage3,
      aname: "Elizabeth Slavin",
      cardimage: AuthorImage3,
    },
    {
      image: CardImage4,
      aname: "Ernie Smith",
      cardimage: AuthorImage4,
    },
    {
      image: CardImage5,
      aname: "Eric Smith",
      cardimage: AuthorImage5,
    },
    {
      image: CardImage6,
      aname: "Tracey Wilson",
      cardimage: AuthorImage1,
    },
    {
      image: CardImage7,
      aname: "Jason Francisco",
      cardimage: AuthorImage2,
    },
    {
      image: CardImage8,
      aname: "Elizabeth Slavin",
      cardimage: AuthorImage3,
    },
    {
      image: CardImage9,
      aname: "Ernie Smith",
      cardimage: AuthorImage4,
    },
  ];
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="grid grid-cols-3 gap-1">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            aname={card.aname}
            cardimage={card.cardimage}
          />
        ))}

        <button className="border w-[123px] h-12 text-center col-span-3 justify-self-center">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Home;
