import React from "react";
import { tw } from "../libs/tailwind";
import { useNavigation } from "@react-navigation/native";

import { Text, TouchableOpacity, View } from "react-native";
import { TextField } from "@/components/TextField";
import { TextFieldPassword } from "@/components/TextFieldPassword";
import { GradientButton } from "@/components/GradientButton";

const Login: React.FC = () => {
  const navigation = useNavigation();

  const [form, setForm] = React.useState({ email: "", password: "" });

  function handleFormChange(name: string, value: string) {
    setForm({ ...form, [name]: value });
  }

  async function submitForm() {
    console.log("submit Login Form", form);
  }

  function goToRegister() {
    navigation.navigate("register");
  }

  return (
    <View style={tw("flex-1 justify-between items-center bg-white py-12 px-4")}>
      <View style={tw("w-full items-center")}>
        <Text style={tw("font-sans text-lg")}>Hey there,</Text>
        <Text style={tw("font-sans-bold text-xl mb-8")}>Welcome Back</Text>

        <View style={tw("w-full")}>
          <TextField
            iconName="mail"
            placeholder="Email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => handleFormChange("email", e.nativeEvent.text)}
          />

          <TextFieldPassword
            placeholder="Password"
            value={form.password}
            onChange={(e) => handleFormChange("password", e.nativeEvent.text)}
          />
        </View>
      </View>

      <View style={tw("w-full")}>
        <View style={tw("w-full flex-row")}>
          <GradientButton onPress={submitForm} iconName="log-in">
            Login
          </GradientButton>
        </View>

        <View style={tw("border border-gray-300 w-full my-8")}></View>

        <TouchableOpacity onPress={goToRegister} style={tw("py-2 flex-row justify-center")}>
          <Text style={tw("font-sans text-sm text-center")}>Don{"’"}t have an account yet?</Text>
          <Text style={tw("text-fuchsia-500 ml-1")}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { Login };
