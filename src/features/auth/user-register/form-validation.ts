import * as yup from "yup";

const step1Schema = yup
  .object({
    name: yup.string().required().default("asd"),
    email: yup.string().email().required().default("asd@asdas.com"),
    password: yup.string().required().default("123"),
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
