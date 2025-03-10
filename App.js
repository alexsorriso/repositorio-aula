import React, { useState } from 'react'; import { StatusBar } from 'expo-status-bar'; import { StyleSheet, Text, View } from 'react-native'; 
import CustomButton from './Componentes/CustomButton/CustomButton'; import TextInputBox from './Componentes/TextInputBox/TextInputBox'; import FuncaoSoma from './ações/FuncaoSoma'; 
import FuncaoSubtracao from './ações/FuncaoSubtracao';
import funcaoMultiplicacao from './ações/FuncaoMultiplicacao';
import FuncaoDivisiao from './ações/FuncaoDivisao';

 
 
export default function App() {   
  const [number1, setNumber1] = useState('');   
  const [number2, setNumber2] = useState(''); 
  const [saida, setSaida] = useState('');
  return ( 
    <View style={styles.container}> 
      <StatusBar style="auto" /> 
 
      <Text style={styles.title}>Operações</Text> 
      <TextInputBox         value={number1} 
        onChangeText={setNumber1}         placeholder="Digite o primeiro número"         keyboardType="numeric" 
      />  
      <TextInputBox         value={number2} 
        onChangeText={setNumber2}         placeholder="Digite o segundo número"         keyboardType="numeric" 
      /> 
      <CustomButton         title="Somar" 
        onPress={() => FuncaoSoma(number1,number2,setSaida)}         style={styles.button} 
      /> 
      <CustomButton         title="Subtrair" 
        onPress={() => FuncaoSubtracao(number1,number2,setSaida)}         style={styles.button} 
      /> 
      <CustomButton         title="Multiplicar" 
        onPress={() => funcaoMultiplicacao(number1,number2,setSaida)}         style={styles.button} 
      /> 
 
      <CustomButton         title="Dividir"
        onPress={() => FuncaoDivisiao(number1, number2,setSaida)}        style={styles.button}/>
       <Text>{saida ? saida: ''}</Text>
    </View> 
  ); 
} 
 
const styles = StyleSheet.create({   container: { 
    flex: 1, 
    backgroundColor: '#fff',     alignItems: 'center', 
    justifyContent: 'center', 
  },  
  title: { 
    fontSize: 24, 
    marginBottom: 20, 
  } 
}); 
