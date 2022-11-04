import * as yup from "yup";

export const NewSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(30)
    .required()
    .matches(/^(?! )[A-Za-z0-9\s]*$/, "Enter valid password"),
});
