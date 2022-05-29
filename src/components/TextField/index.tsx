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
    <View style={tw("relative w-full mb-4 h-8", { minHeight: 60 })}>
      {iconName && (
        <Feather
          style={tw("absolute left-4 top-[20px] text-gray-500 z-2")}
          name={iconName}
          size={18}
        />
      )}

      <TextInput
        autoCapitalize="none"
        {...inputProps}
        style={tw(
          "flex-1 w-full font-sans text-sm border border-gray-300 rounded-2xl bg-gray-100 px-4 py-2 leading-4",
          { "pl-12": !!iconName },
          styles
        )}
      />
    </View>
  );
};

export { TextField };
export type { IProps as ITextFieldProps };
