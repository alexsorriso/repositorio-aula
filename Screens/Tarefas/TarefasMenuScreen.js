import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CadastrarScreen from "./CadastrarScreen";
import ListarScreen from "./ListarScreen";
import { useState } from "react";

const Tab = createBottomTabNavigator();

export default function App() {
  const [tarefas, setTarefas] = useState([])
  return (
      <Tab.Navigator>
        <Tab.Screen 
          name="Cadastrar" 
          children={props => <CadastrarScreen {...props} setTarefas={setTarefas} />}
        />
        <Tab.Screen 
          name="Listar" 
          children={props => <ListarScreen {...props} tarefas={tarefas} />}
        />
      </Tab.Navigator>
  )
}