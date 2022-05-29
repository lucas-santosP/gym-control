import React from "react";
import { tw } from "../libs/tailwind";
import { useNavigation } from "@react-navigation/native";

import { Text, View } from "react-native";
import { GradientButton } from "../components/GradientButton";
import { TextField } from "../components/TextField";
import { TextFieldPassword } from "../components/TextFieldPassword";

const Login: React.FC = () => {
  const navigation = useNavigation();

  const [loginForm, setLoginForm] = React.useState({ email: "", password: "" });

  function handleLoginFormChange(name: string, value: string) {
    setLoginForm({ ...loginForm, [name]: value });
  }

  async function submitLoginForm() {
    console.log("submitLoginForm", loginForm);
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
            value={loginForm.email}
            onChange={(e) => handleLoginFormChange("email", e.nativeEvent.text)}
          />

          <TextFieldPassword
            placeholder="Password"
            value={loginForm.password}
            onChange={(e) => handleLoginFormChange("password", e.nativeEvent.text)}
          />
        </View>
      </View>

      <View style={tw("w-full")}>
        <View>
          <GradientButton onPress={submitLoginForm} iconName="log-in">
            Login
          </GradientButton>
        </View>

        <View style={tw("border border-gray-300 w-full my-8")}></View>

        <Text onPress={goToRegister} style={tw("font-sans text-sm text-center")}>
          Don{"’"}t have an account yet?
          <Text style={tw("text-fuchsia-500 ml-1")}>Register</Text>
        </Text>
      </View>
    </View>
  );
};

export { Login };
