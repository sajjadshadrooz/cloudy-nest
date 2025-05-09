import { Field as MainFormikField } from "formik";

import { Field } from "@/components/field/field";
import { Input } from "@/components/input/input";

interface FormikFieldProps {
  name: string;
  type: "email" | "password" | "text";
  label: string;
  required?: boolean;
  touched?: boolean;
  placeholder?: string;
  error?: string;
}

export const FormikField = ({
  name,
  type,
  label,
  required,
  touched,
  placeholder,
  error,
}: FormikFieldProps) => {
  return (
    <Field
      label={label}
      required={required}
      error={touched && error ? error : undefined}
    >
      <MainFormikField name={name}>
        {({ field }: any) => (
          <Input
            type={type}
            placeholder={placeholder}
            {...field}
            hasError={!!(touched && error)}
          />
        )}
      </MainFormikField>
    </Field>
  );
};
