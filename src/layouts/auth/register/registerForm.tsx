"use client";

import { Formik, Form } from "formik";

import { LinkButton } from "@/components/linkButton/linkButton";
import { Button } from "@/components/button/button";
import { FormikField } from "@/components/formikField/formikField";
import { useRegisterAPI } from "@/services/hooks/auth/register";

import { registerValidationSchema } from "./utils/validation";

const RegisterForm = () => {
  const { register } = useRegisterAPI();

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (
    values: typeof initialValues,
    setSubmitting: any
  ) => {
    await register(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values, setSubmitting);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <FormikField
                name="username"
                type="text"
                label="Username"
                placeholder="Username"
                required
                touched={touched.username}
                error={errors.username}
              />
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
                Sign up
              </Button>
              <div className="flex gap-1">
                <p className="text-sm">Have an account?</p>
                <LinkButton href={"/login"}>Sign in</LinkButton>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
