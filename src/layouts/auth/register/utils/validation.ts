import * as Yup from "yup";

export const registerValidationSchema = Yup.object({
  username: Yup.string().required("Required field."),
  email: Yup.string().email("Email is not valid.").required("Required field."),
  password: Yup.string().required("Required field."),
});
