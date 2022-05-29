import React from "react";
import { Text, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { tw } from "../libs/tailwind";
import { GradientButton } from "../components/GradientButton";
import { TextField } from "../components/TextField";
import { TextFieldPassword } from "../components/TextFieldPassword";

const Register: React.FC = () => {
  const navigation = useNavigation();

  const [form, setForm] = React.useState({ name: "", email: "", password: "" });

  function handleLoginFormChange(name: string, value: string) {
    setForm({ ...form, [name]: value });
  }

  async function submitForm() {
    console.log("submitForm", form);
  }

  function goToRegister() {
    navigation.navigate("login");
  }

  return (
    <View style={tw("flex-1 justify-between items-center bg-white py-12 px-4")}>
      <View style={tw("w-full items-center")}>
        <Text style={tw("font-sans text-lg")}>Hey there,</Text>
        <Text style={tw("font-sans-bold text-xl mb-8")}>Create an Account</Text>

        <View style={tw("w-full")}>
          <TextField
            iconName="user"
            placeholder="Name"
            value={form.name}
            onChange={(e) => handleLoginFormChange("name", e.nativeEvent.text)}
          />

          <TextField
            iconName="mail"
            placeholder="Email"
            value={form.email}
            onChange={(e) => handleLoginFormChange("email", e.nativeEvent.text)}
          />

          <TextFieldPassword
            placeholder="Password"
            value={form.password}
            onChange={(e) => handleLoginFormChange("password", e.nativeEvent.text)}
          />
        </View>
      </View>

      <View style={tw("w-full")}>
        <View>
          <GradientButton onPress={submitForm} iconName="user-plus">
            Register
          </GradientButton>
        </View>

        <View style={tw("border border-gray-300 w-full my-8")}></View>

        <Text onPress={goToRegister} style={tw("font-sans text-sm text-center")}>
          Already have an account?
          <Text style={tw("text-fuchsia-500 ml-1")}>Login</Text>
        </Text>
      </View>
    </View>
  );
};

export { Register };
