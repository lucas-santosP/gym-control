import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleProp, ViewStyle } from "react-native";

type IProps = {
  style?: StyleProp<ViewStyle>;
};

const ThemeGradient: React.FC<IProps> = ({ style, children }) => {
  return (
    <LinearGradient
      style={style}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#9DCEFF", "#92A3FD"]}
    >
      {children}
    </LinearGradient>
  );
};

export { ThemeGradient };
