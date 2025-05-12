"use client";

import { Button } from "@/components/button/button";
import { Checkbox } from "@/components/checkbox/checkbox";
import { Field } from "@/components/field/field";
import { FormikField } from "@/components/formikField/formikField";
import { Input } from "@/components/input/input";
import { Section } from "@/components/section/section";
import { Form, Formik } from "formik";

export const ArticleCreation = () => {
  return (
    <Formik onSubmit={() => {}} initialValues={{}}>
      {({ errors, touched, isSubmitting }) => (
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
                  />
                  <FormikField
                    name="description"
                    type="text"
                    label="Description"
                    placeholder="Description"
                  />
                  <FormikField name="body" type="textarea" label="Body" />
                  <Button title="Submit" className="w-fit">
                    Submit
                  </Button>
                </div>
              </Section>
            </div>
            <div className="col-span-1 p-6 bg-white rounded-lg flex flex-col gap-6 h-fit">
              <Field label="Tags">
                <Input placeholder="New tag" />
              </Field>
              <div className="p-4 flex flex-col gap-2 border border-neutral-default-3 rounded-xl">
                <Checkbox label="tag" />
                <Checkbox label="tag" checked />
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
