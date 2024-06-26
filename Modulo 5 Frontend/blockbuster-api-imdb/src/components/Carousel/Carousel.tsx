import { IonImg, IonTitle } from "@ionic/react";
import { useEffect, useState } from "react";

import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export type movieData = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const Carousel: React.FC<{type: string, title: string, changeThriller: (id: number) => void}> = ({type, title, changeThriller}) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getDataMovie(type);
  }, []);
  const getDataMovie = (type: string) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=es-MX`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };
  // console.log(movieList)
  return (
    <div>
      <IonTitle>{title}</IonTitle>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={10}
          slidesPerView={3}
          navigation={true}
          loop={true}
          >
          {movieList &&
            movieList.map((movie: movieData) => (
              <SwiperSlide key={movie.id} onClick={() => changeThriller(movie.id)}>
                <IonImg src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`}/>
              </SwiperSlide>
            ))}
          </Swiper>
    </div>
  );
};

export default Carousel;
