import React from "react";
import tw from "twrnc";
import { Text, View, TextInput, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Home: React.FC = () => {
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
    <View style={tw`flex-1 items-center bg-gray-100 py-16`}>
      <Text style={tw`text-xl mt-8`}>Welcome to the </Text>
      <Text style={tw`text-2xl mb-8 font-bold text-emerald-600`}>Personal Gym App!</Text>

      <Text style={tw`text-xl font-semibold uppercase`}>Login</Text>

      <View style={tw`w-full px-2 `}>
        <Text style={tw`text-base text-gray-800 mb-1`}>Email</Text>
        <TextInput
          nativeID="email"
          value={loginForm.email}
          onChange={(e) => handleLoginFormChange("email", e.nativeEvent.text)}
          style={tw`flex-1 rounded-md border p-2 py-3 mb-4`}
        />

        <Text style={tw`text-base text-gray-800 mb-1`}>Password</Text>
        <TextInput
          value={loginForm.password}
          onChange={(e) => handleLoginFormChange("password", e.nativeEvent.text)}
          secureTextEntry
          style={tw`flex-1 rounded-md border p-2 py-3 mb-4`}
        />
      </View>

      <View style={tw`flex-row w-full px-2 py-4`}>
        <Pressable
          onPress={goToRegister}
          style={tw`flex-1 flex-row justify-center items-center border border-gray-600 rounded-md shadow-md text-gray-600 text-center text-sm px-8 py-2 uppercase font-semibold mr-1`}
        >
          <MaterialIcons name="person-add" size={14} />
          <Text style={tw`text-black text-sm font-semibold ml-2`}>Register</Text>
        </Pressable>

        <Pressable
          onPress={submitLoginForm}
          style={tw`flex-1 flex-row justify-center items-center bg-emerald-600 rounded-md shadow-md text-white text-center text-sm px-8 py-2 uppercase font-semibold ml-1`}
        >
          <MaterialIcons color="#fff" name="login" size={14} />
          <Text style={tw`text-white text-sm font-semibold ml-2`}>Enter</Text>
        </Pressable>
      </View>
    </View>
  );
};

export { Home };
