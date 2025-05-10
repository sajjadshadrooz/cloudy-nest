"use client";

import { Formik, Form } from "formik";

import { LinkButton } from "@/components/linkButton/linkButton";
import { Button } from "@/components/button/button";
import { FormikField } from "@/components/formikField/formikField";
import { useLoginAPI } from "@/services/hooks/auth/login";

import { loginValidationSchema } from "./utils/validation";

const LoginForm = () => {
  const { login } = useLoginAPI();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (
    values: typeof initialValues,
    setSubmitting: any
  ) => {
    await login(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values, setSubmitting);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <FormikField
                name="email"
                type="email"
                label="Email"
                placeholder="you@example.com"
                required
                touched={touched.email}
                error={errors.email}
              />
              <FormikField
                name="password"
                type="password"
                label="Password"
                placeholder="Password"
                required
                touched={touched.password}
                error={errors.password}
              />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <Button className="w-full" type="submit" loading={isSubmitting}>
                Sign in
              </Button>
              <div className="flex gap-1">
                <p className="text-sm">Don’t have an account?</p>
                <LinkButton href={"/register"}>Sign up now</LinkButton>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
