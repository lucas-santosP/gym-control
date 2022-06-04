import React from "react";
import { tw } from "@/libs/tailwind";
import { Text, View } from "react-native";

const Home: React.FC = () => {
  return (
    <View style={tw("flex-1 justify-center bg-white items-center py-12 px-4")}>
      <Text style={tw("font-sans text-base mb-8")}>Home</Text>
    </View>
  );
};

export { Home };
