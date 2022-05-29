import React from "react";
import { Text, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { tw } from "../libs/tailwind";
import { GradientButton } from "../components/GradientButton";

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
          <View style={tw("relative")}>
            <Feather style={tw("absolute left-4 top-[18px] text-gray-500")} name="mail" size={18} />

            <TextInput
              nativeID="email"
              value={loginForm.email}
              placeholder="Email"
              onChange={(e) => handleLoginFormChange("email", e.nativeEvent.text)}
              style={tw(
                "flex-1 font-sans text-sm border border-gray-300 rounded-2xl bg-gray-100 px-2 py-4 pl-12 mb-4"
              )}
            />
          </View>

          <View style={tw("relative")}>
            <Feather style={tw("absolute left-4 top-[18px] text-gray-500")} name="lock" size={18} />

            <TextInput
              value={loginForm.password}
              onChange={(e) => handleLoginFormChange("password", e.nativeEvent.text)}
              secureTextEntry
              placeholder="Password"
              style={tw(
                "flex-1 font-sans text-sm border border-gray-300 rounded-2xl bg-gray-100 px-2 py-4 pl-12 mb-4"
              )}
            />
          </View>
        </View>
      </View>

      <View style={tw("w-full")}>
        <View>
          <GradientButton
            onPress={submitLoginForm}
            icon={<Feather style={tw("mr-2 text-white")} name="log-in" size={20} />}
          >
            Login
          </GradientButton>
        </View>

        <View style={tw("border border-gray-300 w-full  my-8")}></View>

        <Text onPress={goToRegister} style={tw("font-sans text-sm text-center")}>
          Don{"’"}t have an account yet?
          <Text style={tw("text-fuchsia-500 ml-1")}>Register</Text>
        </Text>
      </View>
    </View>
  );
};

export { Login };
