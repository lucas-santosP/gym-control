import React from "react";
import { tw } from "@/libs/tailwind";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemas, schemaDefaultValues } from "./form-validation";

import { View, BackHandler, Text, NativeEventSubscription } from "react-native";
import { Step1 } from "./step-1";
import { Step2 } from "./step-2";
import { LoadingSpinner } from "@/components/loading-spinner";
import { StepError } from "./step-error";
import { StepWelcome } from "./step-welcome";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const UserRegister = () => {
  const [step, setStep] = React.useState(1);
  const navigation = useNavigation();

  const form = useForm({
    resolver: yupResolver(formSchemas[step - 1]),
    defaultValues: { ...schemaDefaultValues },
  });

  function resetForm() {
    form.reset({ ...schemaDefaultValues });
    setStep(1);
  }

  function prevStep() {
    setStep(step - 1 === 0 ? 1 : step - 1);
  }

  const nextStep = form.handleSubmit(async (fields) => {
    console.log("fields", fields);
    const newStep = step + 1;
    setStep(newStep);

    if (newStep === 3) {
      // api call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // then
      // setStep(newStep + 1);
      // catch error
      setStep(-1);
    }
  });

  useFocusEffect(
    React.useCallback(() => {
      const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
        console.log("step-back", step);
        if (step < 3 && step !== -1) {
          prevStep();
        }
        return true;
      });

      const unsubscribeBlur = navigation.addListener("blur", () => {
        backHandler.remove();
      });

      return () => unsubscribeBlur();
    }, [step])
  );

  return (
    <View style={tw("flex-1 w-full h-full items-center bg-white")}>
      {step === 1 && <Step1 form={form} nextStep={nextStep} />}
      {step === 2 && <Step2 form={form} nextStep={nextStep} />}
      {step === 3 && <LoadingSpinner />}
      {step === 4 && <StepWelcome form={form} />}
      {step === -1 && <StepError resetForm={resetForm} />}
    </View>
  );
};

export { UserRegister };
