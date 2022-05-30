import React from "react";
import { tw } from "@/libs/tailwind";
import { UseFormReturn, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { IFormRegister } from "./form-validation";

import { Text, TouchableOpacity, View } from "react-native";
import { TextField } from "@/components/text-field";
import { TextFieldPassword } from "@/components/text-field-password";
import { GradientButton } from "@/components/gradient-button";

type IProps = {
  form: UseFormReturn<IFormRegister>;
  nextStep: () => Promise<unknown>;
};

const Step1: React.FC<IProps> = ({ form, nextStep }) => {
  const navigation = useNavigation();

  function goToLogin() {
    navigation.navigate("login");
  }

  return (
    <View style={tw("flex-1 w-full justify-between items-center py-8 px-4")}>
      <View style={tw("w-full items-center")}>
        <Text style={tw("font-sans text-lg")}>Hey there,</Text>
        <Text style={tw("font-sans-bold text-xl mb-8")}>Create an Account</Text>

        <View style={tw("w-full")}>
          <Controller
            control={form.control}
            name="name"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextField
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                iconName="user"
                placeholder="Name"
                autoCapitalize="sentences"
              />
            )}
          />

          <Controller
            control={form.control}
            name="email"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextField
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
                iconName="mail"
                placeholder="Email"
                autoComplete="email"
              />
            )}
          />

          <Controller
            control={form.control}
            name="password"
            render={({ field: { onBlur, onChange, value } }) => (
              <TextFieldPassword
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Password"
              />
            )}
          />
        </View>
      </View>

      <View style={tw("w-full")}>
        <View style={tw("w-full flex-row")}>
          <GradientButton onPress={nextStep} iconName="user-plus">
            Register
          </GradientButton>
        </View>

        <View style={tw("border border-gray-300 w-full my-8")}></View>

        <TouchableOpacity onPress={goToLogin} style={tw("py-2 flex-row justify-center")}>
          <Text style={tw("font-sans text-sm text-gray-500 text-center")}>
            Already have an account?
          </Text>
          <Text style={tw("font-sans text-sm text-fuchsia-500 ml-1")}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { Step1 };
