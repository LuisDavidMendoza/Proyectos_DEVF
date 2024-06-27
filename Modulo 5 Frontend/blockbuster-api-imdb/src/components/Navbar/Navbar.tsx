import {
  IonBackButton,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { addOutline, homeOutline, searchOutline } from "ionicons/icons";
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar: React.FC = () => {
  const bgcolor = "light";
  return (
    <>
    <div className="navbar-style">
      <Link to={"/home"}>
        <IonButton color={bgcolor}>
          <IonIcon icon={homeOutline} size="large"></IonIcon>
        </IonButton>
      </Link>
      <Link to={"/search"}>
        <IonButton color={bgcolor}>
          <IonIcon icon={searchOutline} size="large"></IonIcon>
        </IonButton>
      </Link>
      {/* <Link to={"/mylist"}>
        <IonButton color={bgcolor}>
          <IonIcon icon={addOutline}></IonIcon>
        </IonButton>
      </Link> */}
    </div>
    </>
  );
};

export default Navbar;
