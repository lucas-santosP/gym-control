import React from "react";
import { tw } from "@/libs/tailwind";

import { Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ThemeGradient } from "@/components/theme-gradient";

type IProps = {
  onPress?: () => void;
  style?: string;
  iconName?: keyof typeof Feather.glyphMap;
  children: React.ReactNode;
  iconPosition?: "left" | "right";
};

const GradientButton: React.FC<IProps> = (props) => {
  const { children, iconName, onPress, iconPosition = "left", style = "" } = props;

  return (
    <ThemeGradient style={tw("w-full flex-1 rounded-full")}>
      <TouchableOpacity
        onPress={onPress}
        style={tw("w-full flex-row justify-center items-center rounded-full px-8 py-5", style)}
      >
        {iconPosition === "left" && iconName && (
          <Feather style={tw("mr-2 text-white")} name={iconName} size={20} />
        )}

        <Text
          style={tw("font-sans-bold tracking-wider text-white text-base font-semibold", {
            "mr-6": !!iconName && iconPosition === "left",
            "ml-6": !!iconName && iconPosition === "right",
          })}
        >
          {children}
        </Text>

        {iconPosition === "right" && iconName && (
          <Feather style={tw("ml-2 text-white")} name={iconName} size={20} />
        )}
      </TouchableOpacity>
    </ThemeGradient>
  );
};

export { GradientButton };
