import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string().email("Email is not valid.").required("Required field."),
  password: Yup.string().required("Required field."),
});
