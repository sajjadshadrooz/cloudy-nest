import * as Yup from "yup";

export const articleValidationSchema = Yup.object({
  title: Yup.string().required("Required field."),
  description: Yup.string().required("Required field."),
  body: Yup.string().required("Required field."),
});

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);

  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");

  const hh = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const ss = String(date.getSeconds()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
};
