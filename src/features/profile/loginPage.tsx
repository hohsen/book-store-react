import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { useAppDispatch } from "../store";
import { login } from "../store/user";

const LOGIN_FIELDS = {
  USERNAME: "username",
  PASSWORD: "password",
} as const;

const LoginSchema = Yup.object().shape({
  [LOGIN_FIELDS.USERNAME]: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("This field is required"),
  [LOGIN_FIELDS.PASSWORD]: Yup.string()
    .min(2, "This password is too short")
    .max(50, "This password is too long!")
    .required("Password is required"),
});

export const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <Formik
        initialValues={{
          [LOGIN_FIELDS.USERNAME]: "bookworms",
          [LOGIN_FIELDS.PASSWORD]: "159463asdwaxz",
        }}
        validationSchema={LoginSchema}
        onSubmit={async ({ username, password }) => {
          const response = await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username,
              password,
            }),
          });

          const { id, firstName, lastName, image, token } =
            await response.json();

          localStorage.setItem("auth_token", token);

          dispatch(
            login({
              id,
              firstName,
              lastName,
              image,
            }),
          );

          navigate("/");
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field
                as={"input"}
                name={LOGIN_FIELDS.USERNAME}
                type="name"
                placeholder="username"
              />
              <span>
                <ErrorMessage name={LOGIN_FIELDS.USERNAME} />
              </span>
            </div>
            <br />
            <Field
              as="input"
              name={LOGIN_FIELDS.PASSWORD}
              type="password"
              placeholder="password"
              autoComplete=""
            />
            <span>
              <ErrorMessage name={LOGIN_FIELDS.PASSWORD} />
            </span>
            <br />
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
