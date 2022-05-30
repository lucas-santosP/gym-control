import React from "react";
import { tw } from "@/libs/tailwind";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemas, schemaDefaultValues } from "./form-validation";

import { View, BackHandler } from "react-native";
import { Step1 } from "./step-1";
import { Step2 } from "./step-2";

const UserRegister = () => {
  const [step, setStep] = React.useState(1);

  const form = useForm({
    resolver: yupResolver(formSchemas[step - 1]),
    defaultValues: schemaDefaultValues,
  });

  const prevStep = () => {
    setStep(step - 1 === 0 ? 1 : step - 1);
  };

  const nextStep = form.handleSubmit(async (data) => {
    setStep(step + 1);
    console.log(data);
  });

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      prevStep();
      return true;
    });

    return () => backHandler.remove();
  }, []);

  return (
    <View style={tw("flex-1 w-full items-center bg-white")}>
      {step === 1 && <Step1 form={form} nextStep={nextStep} />}
      {step === 2 && <Step2 form={form} nextStep={nextStep} />}
    </View>
  );
};

export { UserRegister };
