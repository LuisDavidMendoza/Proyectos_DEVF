import { useState } from "react";
import Carousel from "../Carousel/Carousel";
import Trailer from "../Trailer/Trailer";
import "./MovieList.css"

const MovieList: React.FC = () => {
  const [getID, setID] = useState<number | undefined>();
  const apiKey = import.meta.env.VITE_APP_TMDB_API_KEY;

  const getDataMovieID = (getID: number) => {
    setID(getID);
    // console.log(getID)
  };

  return (
    <>
      <div className="movieList-content">
        {getID && <Trailer idMovie={getID} apiKey={apiKey} />}
        <Carousel
          type="popular"
          title="Popular"
          changeThriller={getDataMovieID}
          apiKey={apiKey}
        />
        <Carousel
          type="top_rated"
          title="Top 10"
          changeThriller={getDataMovieID}
          apiKey={apiKey}
        />
        <Carousel
          type="now_playing"
          title="Reproduciendo Ahora"
          changeThriller={getDataMovieID}
          apiKey={apiKey}
        />
      </div>
    </>
  );
};

export default MovieList;
