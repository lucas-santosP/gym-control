import React from "react";
import { tw } from "../../libs/tailwind";
import { TextInput, TextInputProps, View } from "react-native";
import { Feather } from "@expo/vector-icons";

type IProps = {
  iconName?: keyof typeof Feather.glyphMap;
  styles?: string;
} & TextInputProps;

const TextField: React.FC<IProps> = ({ iconName, styles = "", ...inputProps }) => {
  return (
    <View style={tw("relative")}>
      {iconName && (
        <Feather style={tw("absolute left-4 top-[18px] text-gray-500")} name={iconName} size={18} />
      )}

      <TextInput
        {...inputProps}
        style={tw(
          "flex-1 font-sans text-sm border border-gray-300 rounded-2xl bg-gray-100 px-4 py-4 mb-4",
          { "pl-12": !!iconName },
          styles
        )}
      />
    </View>
  );
};

export { TextField };
export type { IProps as ITextFieldProps };
