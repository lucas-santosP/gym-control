import * as yup from "yup";

const step1Schema = yup
  .object({
    name: yup.string().required().default("Lucas"),
    email: yup.string().email().required().default("lucas@email.com"),
    password: yup.string().required().default("123456"),
  })
  .required();

const step2Schema = yup
  .object({
    gender: yup.string().required().default("gender"),
    birthDate: yup.string().required().default("birth"),
    weight: yup.string().required().default("70"),
    height: yup.string().required().default("180"),
  })
  .required();

export const formSchemas = [step1Schema, step2Schema];

export const schemaDefaultValues = {
  ...step1Schema.getDefault(),
  ...step2Schema.getDefault(),
};

export type IFormRegister = typeof schemaDefaultValues;
