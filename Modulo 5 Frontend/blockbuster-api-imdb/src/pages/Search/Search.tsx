import {
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonList,
  IonRow,
  IonSearchbar,
} from "@ionic/react";
import Navbar from "../../components/Navbar/Navbar";
import MovieList from "../../components/MovieList/MovieList";
import { useState } from "react";
const Search: React.FC = () => {
  const data = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];
  const [results, setResults] = useState([...data]);

  const handleInput = (ev: Event) => {
    let query = '';
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    setResults(data.filter((d) => d.toLowerCase().indexOf(query) > -1));
  };

  return (
    <>
      <IonContent fullscreen>
        <Navbar />
        <IonGrid>
          <IonRow>
            <IonCol size="auto">
              <IonSearchbar onIonInput={(ev) => handleInput(ev)}/>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonList>
                {results.map((result) => (
                  <IonItem>{result}</IonItem>
                ))}
              </IonList>
              {/* <MovieList /> */}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default Search;
