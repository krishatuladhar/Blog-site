import { useParams } from "react-router-dom";
import PostContent from "../components/PostContent";
import type {CardType}  from "../types/card";

const SinglePage = () => {
  const { cardId } = useParams();
  const numericId = Number(cardId); 
  return (
    <div>
      <PostContent cardId={numericId} />
   </div>
  );
};

export default SinglePage;
