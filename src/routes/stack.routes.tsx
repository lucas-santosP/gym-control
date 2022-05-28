import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Register } from "../screens/Register";

const { Screen, Navigator, Group } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      {/* No auth screens */}
      <Group>
        <Screen name="home" component={Home} options={{ headerShown: false }} />
        <Screen name="register" component={Register} options={{ title: "Register" }} />
        {/* <Screen name="register" component={Register} options={{ title: "Register" }} /> */}
      </Group>

      {/* Logged pages */}
      <Group screenOptions={{ headerShown: false }}>
        {/* <Screen name="profile" component={Profile}  /> */}
      </Group>
    </Navigator>
  );
}
