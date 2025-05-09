"use client";

import { Formik, Form } from "formik";

import { LinkButton } from "@/components/linkButton/linkButton";
import { Button } from "@/components/button/button";
import { FormikField } from "@/components/formikField/formikField";

import { loginValidationSchema } from "./utils/validation";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log("🟢 Form submitted", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={handleSubmit}
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
