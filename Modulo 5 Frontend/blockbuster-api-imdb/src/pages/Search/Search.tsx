import {
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonItem,
  IonList,
  IonRow,
  IonSearchbar,
} from "@ionic/react";
import Navbar from "../../components/Navbar/Navbar";
import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { movieData } from "../../components/Carousel/Carousel";
import "./Search.css";

const Search: React.FC = () => {
  const [movieList, setMovieList] = useState<movieData[]>([]);
  const [results, setResults] = useState<movieData[]>([]);
  const apiKey = import.meta.env.VITE_APP_TMDB_API_KEY;

  useEffect(() => {
    getDataMovie();
  }, []);
  // useEffect(() => {
  //   console.log(movieList);
  // }, [movieList]);

  const handleInput = (ev: Event) => {
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();
    setResults(
      movieList.filter((d) => d.title.toLowerCase().indexOf(query) > -1)
    );
  };

  const getDataMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&language=es-MX`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
        setResults(data.results);
      });
  };

  return (
    <>
      <IonContent fullscreen>
        <Navbar />
        <IonGrid className="searchContent">
          <IonRow>
            <IonCol size="1">
              <IonSearchbar onIonInput={(ev) => handleInput(ev)} />
            </IonCol>

            <IonCol>
                <IonGrid className="galleryMovies">
                  <IonRow>
                {results.map((result: movieData, index) => (
                    <IonCol key={index} size="1">
                        <IonImg
                          // key={result.id}
                          src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
                        />
                      </IonCol>
                      ))}
                </IonRow>
                </IonGrid>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default Search;
