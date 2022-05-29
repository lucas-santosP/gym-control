import React from "react";
import { tw } from "@/libs/tailwind";

import { Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ThemeGradient } from "@/components/ThemeGradient";

type IProps = {
  onPress?: () => void;
  style?: string;
  iconName?: keyof typeof Feather.glyphMap;
  children: React.ReactNode;
};

const GradientButton: React.FC<IProps> = ({ children, iconName, onPress, style = "" }) => {
  return (
    <ThemeGradient style={tw("w-full flex-1 rounded-full")}>
      <TouchableOpacity
        onPress={onPress}
        style={tw("w-full flex-row justify-center items-center rounded-full px-8 py-5", style)}
      >
        {iconName && <Feather style={tw("mr-2 text-white")} name={iconName} size={20} />}

        <Text style={tw("font-sans-bold tracking-wider text-white text-base font-semibold")}>
          {children}
        </Text>
      </TouchableOpacity>
    </ThemeGradient>
  );
};

export { GradientButton };
