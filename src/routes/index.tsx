import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";

export const Routes = () => {
  // verifica o tipo do usuario pra trocar as rotas, auth, logged etc...

  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};
