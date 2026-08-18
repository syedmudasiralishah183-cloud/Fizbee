import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required(" Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot be more than 50 characters"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  number: Yup.string().required("Phone number is required"),

  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message cannot exceed 1000 characters"),
});

export const initialValues = {
  name: "",
  email: "",
  number: "",
  message: "",
};
