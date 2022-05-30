import React from "react";
import { tw } from "@/libs/tailwind";
import { UseFormReturn, Controller } from "react-hook-form";
import { IFormRegister } from "./form-validation";

import { Image, ScrollView, Text, View } from "react-native";
import { TextField } from "@/components/TextField";
import { GradientButton } from "@/components/GradientButton";

type IProps = {
  form: UseFormReturn<IFormRegister>;
  nextStep: () => Promise<unknown>;
};

const Step2: React.FC<IProps> = ({ form, nextStep }) => {
  return (
    <ScrollView
      style={tw("w-full")}
      contentContainerStyle={tw("w-full justify-between items-center py-8 px-4")}
    >
      <View style={tw("w-full items-center mb-8 -mt-6")}>
        <Image
          style={tw("w-full h-[250px] mb-4", { resizeMode: "contain" })}
          source={require("@/assets/images/step-2-register.png")}
        />
        <Text style={tw("font-sans-bold text-xl mb-2")}>Let’s complete your profile</Text>
        <Text style={tw("font-sans text-gray-400 text-sm mb-8")}>
          It will help us to know more about you!
        </Text>

        <View style={tw("w-full")}>
          <Controller
            control={form.control}
            name="gender"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextField
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                iconName="user"
                placeholder="Gender"
              />
            )}
          />

          <Controller
            control={form.control}
            name="birthDate"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextField
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="numeric"
                iconName="calendar"
                placeholder="Date of birth"
              />
            )}
          />

          <Controller
            control={form.control}
            name="weight"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextField
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="numeric"
                iconName="user-check"
                placeholder="Your weight (KG)"
              />
            )}
          />

          <Controller
            control={form.control}
            name="height"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextField
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="numeric"
                iconName="bar-chart-2"
                placeholder="Your height (CM)"
              />
            )}
          />
        </View>
      </View>

      <View style={tw("w-full")}>
        <View style={tw("w-full flex-row")}>
          <GradientButton onPress={nextStep} iconName="arrow-right" iconPosition="right">
            Next
          </GradientButton>
        </View>
      </View>
    </ScrollView>
  );
};

export { Step2 };
