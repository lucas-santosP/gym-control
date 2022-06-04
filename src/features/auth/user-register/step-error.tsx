import React from "react";
import { tw } from "@/libs/tailwind";

import { Image, ScrollView, Text, View } from "react-native";
import { GradientButton } from "@/components/gradient-button";

type IProps = {
  resetForm: () => void;
};

const StepError: React.FC<IProps> = ({ resetForm }) => {
  return (
    <ScrollView
      style={tw("w-full")}
      contentContainerStyle={tw("w-full h-full justify-between items-center py-8 px-4")}
    >
      <View style={tw("w-full items-center mb-8 -mt-6")}>
        <Image
          style={tw("w-full h-[250px] mb-4", { resizeMode: "contain" })}
          source={require("@/assets/images/step-2-register.png")}
        />

        <Text style={tw("font-sans-bold text-xl mb-2")}>Ops! An error occurred</Text>
        <Text style={tw("font-sans text-gray-400 text-sm mb-8")}>Please try again later</Text>
      </View>

      <View style={tw("w-full")}>
        <View style={tw("w-full flex-row")}>
          <GradientButton onPress={resetForm} iconName="arrow-left">
            Back To Register
          </GradientButton>
        </View>
      </View>
    </ScrollView>
  );
};

export { StepError };
