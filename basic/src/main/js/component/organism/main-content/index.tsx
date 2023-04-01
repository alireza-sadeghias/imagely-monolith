import { useParams } from "react-router-dom";
import Gallery from "../gallery";
import Suggestion from "../suggestion";

export default function MainContent() {
  const { query } = useParams();
  console.log("query in MainContent", query);
  return (
    <>
      <Gallery query={query} />
      <Suggestion />
    </>
  );
}
