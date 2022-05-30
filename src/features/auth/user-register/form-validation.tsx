import * as yup from "yup";

const step1Schema = yup
  .object({
    name: yup.string().required().default(""),
    email: yup.string().email().required().default(""),
    password: yup.string().required().default(""),
  })
  .required();

const step2Schema = yup
  .object({
    gender: yup.string().required().default(""),
    birthDate: yup.string().required().default(""),
    weight: yup.string().required().default(""),
    height: yup.string().required().default(""),
  })
  .required();

export const formSchemas = [step1Schema, step2Schema];

export const schemaDefaultValues = {
  ...step1Schema.getDefault(),
  ...step2Schema.getDefault(),
};

export type IFormRegister = typeof schemaDefaultValues;
