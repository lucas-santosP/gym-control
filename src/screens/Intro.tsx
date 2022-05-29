import React from "react";
import { tw } from "@/libs/tailwind";
import { useNavigation } from "@react-navigation/native";

import { Text, View, Image } from "react-native";
import { GradientButton } from "@/components/GradientButton";

const Intro: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={tw("flex-1 justify-center items-center bg-gray-100 py-12")}>
      <View style={tw("items-center mt-auto")}>
        <Image
          style={tw("w-[180px] h-[130px]", { resizeMode: "contain" })}
          source={require("../assets/images/logo.png")}
        />

        <Text style={tw("font-sans text-gray-600 text-base mb-8")}>- Track your gains -</Text>
      </View>

      <View style={tw("flex-row w-full px-2 py-4 mt-auto")}>
        <GradientButton onPress={() => navigation.navigate("register")}>Get Started</GradientButton>
      </View>
    </View>
  );
};

export { Intro };
