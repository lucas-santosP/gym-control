import { Login } from "@/screens/login";
import { Intro } from "@/screens/intro";
import { Register } from "@/screens/register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@/screens/home";

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
        <Screen name="home" component={Home} />
      </Group>
    </Navigator>
  );
}
