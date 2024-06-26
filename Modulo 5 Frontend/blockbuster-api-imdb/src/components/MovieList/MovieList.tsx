import { useState } from "react";
import Carousel from "../Carousel/Carousel";
import Trailer from "../Trailer/Trailer";

const MovieList: React.FC = () => {

  const [getID, setID] = useState<number | undefined>()

  const getDataMovieID = (getID: number) => {
    setID(getID)
    // console.log(getID)
  }

  return (
    <>
    {getID && <Trailer idMovie={getID}/>} 
    <Carousel type="popular" title="Popular" changeThriller={getDataMovieID}/>
    <Carousel type="top_rated" title="Top 10" changeThriller={getDataMovieID}/>
    <Carousel type="now_playing" title="Reproduciendo Ahora" changeThriller={getDataMovieID}/>
    </>
  );
};

export default MovieList;