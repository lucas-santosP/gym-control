import React from "react";
import { tw } from "@/libs/tailwind";
import { useNavigation } from "@react-navigation/native";

import { Text, View, Image } from "react-native";
import { GradientButton } from "@/components/gradient-button";

const Intro: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={tw("flex-1 justify-center bg-white items-center py-12")}>
      <View style={tw("items-center mt-auto w-full")}>
        <Image
          style={tw("w-[185px] h-[130px]", { resizeMode: "contain" })}
          source={require("../assets/images/logo.png")}
        />

        <Text style={tw("font-sans text-gray-600 text-base mb-8")}>- Track Your Gains -</Text>
      </View>

      <View style={tw("flex-row w-full px-2 py-4 mt-auto")}>
        <GradientButton onPress={() => navigation.reset({ routes: [{ name: "register" }] })}>
          Get Started
        </GradientButton>
      </View>
    </View>
  );
};

export { Intro };
