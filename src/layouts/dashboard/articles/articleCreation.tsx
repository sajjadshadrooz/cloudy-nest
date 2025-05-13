"use client";

import { Button } from "@/components/button/button";
import { Checkbox } from "@/components/checkbox/checkbox";
import { Field } from "@/components/field/field";
import { FormikField } from "@/components/formikField/formikField";
import { Input } from "@/components/input/input";
import { Section } from "@/components/section/section";
import { useTagAPI } from "@/services/hooks/articles/tag";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { TagsList } from "./components/tagList";
import { title } from "process";

export const ArticleCreation = () => {
  return (
    <Formik
      onSubmit={() => {}}
      initialValues={{
        title: "",
        description: "",
        body: "",
        tags: [],
      }}
    >
      {({ values, setFieldValue, errors, touched, isSubmitting }) => (
        <Form>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-1 lg:col-span-2">
              <Section title="New Article">
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
                    error={errors.description}
                    touched={touched.description}
                    required
                  />
                  <Button
                    type="submit"
                    loading={isSubmitting}
                    className="w-fit"
                  >
                    Submit
                  </Button>
                </div>
              </Section>
            </div>
            <TagsList values={values} setFieldValue={setFieldValue} />
          </div>
        </Form>
      )}
    </Formik>
  );
};
