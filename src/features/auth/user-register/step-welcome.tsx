import React from "react";
import { tw } from "@/libs/tailwind";

import { Image, ScrollView, Text, View } from "react-native";
import { GradientButton } from "@/components/gradient-button";
import { useNavigation } from "@react-navigation/native";
import { UseFormReturn } from "react-hook-form";
import { IFormRegister } from "./form-validation";

type IProps = {
  form: UseFormReturn<IFormRegister>;
};

const StepWelcome: React.FC<IProps> = ({ form }) => {
  const navigation = useNavigation();
  const userName = form.getValues("name");

  function goToHome() {
    navigation.navigate("home");
  }

  return (
    <ScrollView
      style={tw("w-full")}
      contentContainerStyle={tw("w-full h-full justify-between items-center py-8 px-4")}
    >
      <View style={tw("w-full items-center mb-8")}>
        <Image
          style={tw("w-full h-[250px] mb-4", { resizeMode: "contain" })}
          source={require("@/assets/images/welcome.png")}
        />

        <Text style={tw("font-sans-bold text-xl mb-2")}>Welcome, {userName}</Text>
        <Text style={tw("font-sans text-center text-gray-400 max-w-[260px] text-sm mb-8")}>
          You are all set now, let{"’"}s reach your goals together with us
        </Text>
      </View>

      <View style={tw("w-full mt-auto")}>
        <View style={tw("w-full flex-row")}>
          <GradientButton onPress={goToHome} iconName="home">
            Go To Home
          </GradientButton>
        </View>
      </View>
    </ScrollView>
  );
};

export { StepWelcome };
