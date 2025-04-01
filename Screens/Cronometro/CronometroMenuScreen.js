import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SimplesScreen from "./SimplesScreen";
import PomodoroScreen from "./PomodoroScreens";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Pomodoro" component={PomodoroScreen} />
        <Tab.Screen name="Simples" component={SimplesScreen} />
      </Tab.Navigator>
  )
}