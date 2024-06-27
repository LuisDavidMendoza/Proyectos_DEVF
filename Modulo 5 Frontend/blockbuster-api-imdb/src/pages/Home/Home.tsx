import {
  IonContent,
  IonPage,
} from "@ionic/react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import MovieList from "../../components/MovieList/MovieList";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
              <Navbar/>
              <div className="list-card">
              <MovieList/>
              </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;