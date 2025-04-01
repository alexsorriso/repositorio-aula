import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CronometroMenuScreen from "./Screens/Cronometro/CronometroMenuScreen";
import HomeScreens from "./Screens/home/HomeScreens";
import TarefasMenuScreen from "./Screens/Tarefas/TarefasMenuScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreens} />
        <Drawer.Screen name="Cronometro" component={CronometroMenuScreen} />
        <Drawer.Screen name="Tarefas" component={TarefasMenuScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}