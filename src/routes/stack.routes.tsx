import { Login } from "@/screens/Login";
import { Intro } from "@/screens/Intro";
import { Register } from "@/screens/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator, Group } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      {/* No auth screens */}
      <Group screenOptions={{ headerShown: false }}>
        <Screen name="intro" component={Intro} />
        <Screen name="login" component={Login} />
        <Screen name="register" component={Register} />
      </Group>

      {/* Logged pages */}
      <Group screenOptions={{ headerShown: false }}>
        {/* <Screen name="profile" component={Profile}  /> */}
      </Group>
    </Navigator>
  );
}
