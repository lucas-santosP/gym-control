import React from "react";
import { tw } from "../../libs/tailwind";
import { Text, TouchableOpacity } from "react-native";
import { ThemeGradient } from "../ThemeGradient";
import { Feather } from "@expo/vector-icons";

type IProps = {
  onPress?: () => void;
  style?: string;
  iconName?: keyof typeof Feather.glyphMap;
  children: React.ReactNode;
};

const GradientButton: React.FC<IProps> = ({ children, iconName, onPress, style = "" }) => {
  return (
    <TouchableOpacity onPress={onPress} style={tw("flex-1 rounded-full shadow-md", style)}>
      <ThemeGradient
        style={tw("flex-1 rounded-full px-8 py-5 flex-row justify-center items-center")}
      >
        {iconName && <Feather style={tw("mr-2 text-white")} name={iconName} size={20} />}

        <Text style={tw("font-sans-bold tracking-wider text-white text-base font-semibold")}>
          {children}
        </Text>
      </ThemeGradient>
    </TouchableOpacity>
  );
};

export { GradientButton };
