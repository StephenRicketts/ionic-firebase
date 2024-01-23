import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useForm } from "react-hook-form";

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

  const onRegister = async () => {
    console.log("register: ", getValues());
  };

  const onLogin = async (data: FormValues) => {
    console.log(data);
  };

  const sendReset = async () => {};

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
            } ion-touched`}
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
            } ion-touched`}
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
          <IonButton expand="block" type="submit" disabled={!isValid}>
            Login
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;
