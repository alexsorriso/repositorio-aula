import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CalculoScreens from "./Screens/Calculo/CalculoScreens";
import HomeScreens from "./Screens/home/HomeScreens";
import CalculoIMCScreen from "./Screens/Calculo/CalculoIMCScreen";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreens} />
        <Tab.Screen name="Settings" component={CalculoScreens} />
        <Tab.Screen name="IMC" component={CalculoIMCScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}