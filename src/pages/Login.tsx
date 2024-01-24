import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonAlert,
  useIonLoading,
} from "@ionic/react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { FIREBASE_AUTH } from "../config/FirebaseConfig";
import { FirebaseError } from "firebase/app";

type FormValues = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const [show, hide] = useIonLoading();
  const [present, dismiss] = useIonAlert();

  const onRegister = async () => {
    console.log("register: ", getValues());
    const { email, password } = getValues();
    await show();
    try {
      await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
    } catch (error) {
      if (error instanceof FirebaseError) {
        present({
          header: "Registration Failed",
          message: error.message,
          buttons: ["OK"],
        });
      }
    } finally {
      await hide();
    }
  };

  const onLogin = async (data: FormValues) => {
    const { email, password } = data;
    await show();
    try {
      const user = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      console.log("this is user", user);
    } catch (error) {
      if (error instanceof FirebaseError) {
        present({
          header: "Login Failed",
          message: error.message,
          buttons: ["OK"],
        });
      }
    } finally {
      await hide();
    }
  };

  const sendReset = async () => {
    const { email, password } = data;
    await show();
    try {
      const user = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      console.log("this is user", user);
    } catch (error) {
      if (error instanceof FirebaseError) {
        present({
          header: "Login Failed",
          message: error.message,
          buttons: ["OK"],
        });
      }
    } finally {
      await hide();
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Fire Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleSubmit(onLogin)}>
          <IonInput
            className={`${
              errors.email ? "ion-invalid" : "ion-valid"
            } ion-touched ion-margin-bottom`}
            fill="outline"
            label="Email"
            type="email"
            label-placement="floating"
            placeholder="stephen@email.com"
            {...register("email", {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email",
              },
            })}
            errorText={errors.email?.message}
          />
          <IonInput
            className={`${
              errors.password ? "ion-invalid" : "ion-valid"
            } ion-touched ion-margin-bottom`}
            fill="outline"
            label="Password"
            type="password"
            label-placement="floating"
            placeholder="password"
            {...register("password", {
              required: true,
              minLength: {
                value: 6,
                message: "Password must have at least 6 characters",
              },
            })}
            errorText={errors.email?.message}
          />
          <IonButton
            color="secondary"
            expand="block"
            type="submit"
            disabled={!isValid}
          >
            Login
          </IonButton>
          <IonButton
            color={"tertiary"}
            onClick={onRegister}
            expand="block"
            type="button"
            disabled={!isValid}
          >
            Create Account
          </IonButton>
          <IonButton
            color={"tertiary"}
            onClick={sendReset}
            expand="block"
            type="button"
            disabled={getValues("email") === ""}
          >
            Reset Password
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;
