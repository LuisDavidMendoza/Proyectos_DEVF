import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonImg,
  IonRow,
  IonText,
  IonContent,
} from "@ionic/react";
import { useEffect, useState } from "react";
import "./Trailer.css";

export type Props = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: [];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: [];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [];
  production_countries: [];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const Trailer: React.FC<{ idMovie: number | undefined; apiKey: string }> = ({
  idMovie,
  apiKey,
}) => {
  const [getMovieId, setMovieId] = useState<Props>();

  useEffect(() => {
    idMovie && getDataMovieId(idMovie);
  }, [idMovie]);
  const getDataMovieId = (idMovie: number) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${idMovie}?api_key=${apiKey}&language=es-MX`
    )
      .then((res) => res.json())
      .then((data) => setMovieId(data));
  };

  // async function getDataMovieId(idMovie: number){
  //   try{
  //     const url = `https://api.themoviedb.org/3/movie/${idMovie}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=es-MX`
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     setMovieId(data)
  //   } catch(error){
  //     console.error(error)
  //   }
  // }

  return (
    <>
      {getMovieId && (
        <div className="trailer">
          <IonContent fullscreen>
            {/* <IonCard>
              <IonCardContent
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${getMovieId.backdrop_path})`,
                  backgroundRepeat: 'no repeat',
                  width: '100%',
                  height: '100%'
                }}
              >
                <IonCardTitle>
                  <h1>{getMovieId.title}</h1>
                </IonCardTitle>
                <IonText>
                  {getMovieId.overview
                    ? getMovieId.overview
                    : "Sin descripción"}
                </IonText>
              </IonCardContent>
            </IonCard> */}
            <IonCard>
              <IonCardContent>
                <IonGrid>
                  <IonRow>
                    <IonCol className="trailer-description">
                      <IonCardTitle>
                        <h1>{getMovieId.title}</h1>
                      </IonCardTitle>
                      <IonText>
                        {getMovieId.overview
                          ? getMovieId.overview
                          : "Sin descripción"}
                      </IonText>
                    </IonCol>
                    <IonCol className="trailer-content-img">
                      <IonImg
                        src={`https://image.tmdb.org/t/p/original${getMovieId.backdrop_path}`}
                      />
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCardContent>
            </IonCard>
          </IonContent>
        </div>
      )}
    </>
  );
};

export default Trailer;
