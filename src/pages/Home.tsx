import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useAuth } from "../context/AuthContext";

const Home: React.FC = () => {
  const { logout } = useAuth();
  console.log("this is home");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={logout}>
              <IonIcon slot="icon-only" name="log-out" />
            </IonButton>
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonFab vertical="bottom" horizontal="end" slot="fixed"></IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
