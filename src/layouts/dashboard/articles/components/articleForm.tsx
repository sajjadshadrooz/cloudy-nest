"use client";

import { Form, Formik } from "formik";

import { Button } from "@/components/button/button";
import { FormikField } from "@/components/formikField/formikField";
import { Section } from "@/components/section/section";
import { TagsList } from "./../components/tagList";
import { articleValidationSchema } from "./../utils/validations";

interface initialValuestypes {
  title?: string;
  description?: string;
  body?: string;
  tagList?: string[];
}

interface ArticleFormProps {
  title: string;
  variant: "create" | "update";
  handleSubmit: any;
  initialValues: initialValuestypes;
}

export const ArticleForm = ({
  title,
  variant,
  handleSubmit,
  initialValues,
}: ArticleFormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={articleValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values, setSubmitting);
      }}
      enableReinitialize
    >
      {({
        values,
        setFieldValue,
        errors,
        touched,
        isSubmitting,
        handleSubmit,
      }) => (
        <Form>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-1 lg:col-span-2">
              <Section title={title}>
                <div className="flex flex-col gap-6">
                  <FormikField
                    name="title"
                    type="text"
                    label="Title"
                    placeholder="Title"
                    error={errors.title}
                    touched={touched.title}
                    required
                  />
                  <FormikField
                    name="description"
                    type="text"
                    label="Description"
                    placeholder="Description"
                    error={errors.description}
                    touched={touched.description}
                    required
                  />
                  <FormikField
                    name="body"
                    type="textarea"
                    label="Body"
                    error={errors.body}
                    touched={touched.body}
                    required
                  />
                  <Button
                    type="button"
                    onClick={() => {
                      handleSubmit();
                    }}
                    loading={isSubmitting}
                    className="w-fit"
                  >
                    Submit
                  </Button>
                </div>
              </Section>
            </div>
            <TagsList
              disabled={variant === "update"}
              values={values}
              setFieldValue={setFieldValue}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};
