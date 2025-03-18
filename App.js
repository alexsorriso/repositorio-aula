import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CalculoScreens from "./Screens/Calculo/CalculoScreens";
import HomeScreens from "./Screens/home/HomeScreens";
import CalculoIMCScreen from "./Screens/Calculo/CalculoIMCScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreens} />
        <Drawer.Screen name="Calculadora" component={CalculoScreens} />
        <Drawer.Screen name="IMC" component={CalculoIMCScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}