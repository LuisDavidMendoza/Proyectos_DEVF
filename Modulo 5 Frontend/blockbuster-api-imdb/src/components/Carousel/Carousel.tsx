import { IonImg, IonTitle } from "@ionic/react";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Mousewheel, Keyboard, Controller } from "swiper";

//Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Carousel.css"

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

const Carousel: React.FC<{type: string, title: string, changeThriller: (id: number) => void, apiKey: string}> = ({type, title, changeThriller, apiKey}) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getDataMovie(type);
  }, []);
  const getDataMovie = (type: string) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&language=es-MX`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  // console.log(movieList)
  // console.log(activeIndex)

  // const mySwiperConfig = {
  //   mousewheel: {
  //     enabled: true,
  //     forceToAxis: true,
  //   }
  // }

  return (
    <div className="carousel-content">
      <IonTitle class="carousel-title">{title}</IonTitle>
        <Swiper
          modules={[Navigation, Scrollbar, Mousewheel, Keyboard, Controller]}
          spaceBetween={30}
          slidesPerView={5}
          keyboard ={false}
          navigation={false}
          loop={true}
          mousewheel={{
            forceToAxis: true,
          }}
          // {...mySwiperConfig}
          // controller={}
          >
          {movieList &&
            movieList.map((movie: movieData) => (
              <SwiperSlide key={movie.id} onClick={() => changeThriller(movie.id)}>
                <IonImg className="carousel-img" src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`}/>
              </SwiperSlide>
            ))}
          </Swiper>
    </div>
  );
};

export default Carousel;
