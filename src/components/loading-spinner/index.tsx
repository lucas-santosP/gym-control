import React from "react";
import { tw } from "@/libs/tailwind";
import { ActivityIndicator, View } from "react-native";

type IProps = {};

const LoadingSpinner: React.FC<IProps> = (props) => {
  return (
    <View
      style={tw(
        "flex-1 z-10 absolute top-0 left-0 p-4 bg-white/80 justify-center items-center h-full w-full"
      )}
    >
      <ActivityIndicator size={64} color="#92A3FD" />
    </View>
  );
};

export { LoadingSpinner };
