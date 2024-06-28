import { useState } from "react";
import Carousel from "../Carousel/Carousel";
import Trailer from "../Trailer/Trailer";
import "./MovieList.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";

//Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
        {getID ? (
          <Trailer idMovie={getID} apiKey={apiKey} />
        ) : (
          <Trailer idMovie={1197830} apiKey={apiKey} />
        )}
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
