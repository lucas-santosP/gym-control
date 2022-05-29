import React from "react";
import { tw } from "../../libs/tailwind";
import { Text, Pressable } from "react-native";
import { ThemeGradient } from "../ThemeGradient";

type IProps = {
  onPress?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

const GradientButton: React.FC<IProps> = ({ children, icon, onPress }) => {
  return (
    <ThemeGradient style={tw("flex-1 rounded-full shadow-md text-white text-center font-semibold")}>
      <Pressable
        onPress={onPress}
        style={tw("flex-1 px-8 py-5 flex-row justify-center items-center")}
      >
        {icon && icon}

        <Text style={tw("font-sans-bold tracking-wider text-white text-base font-semibold")}>
          {children}
        </Text>
      </Pressable>
    </ThemeGradient>
  );
};

export { GradientButton };
