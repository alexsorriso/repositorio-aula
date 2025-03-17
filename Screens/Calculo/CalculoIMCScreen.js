import React, { useState } from 'react';
 import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CustomButton from '../../Componentes/CustomButton/CustomButton';
import TextInputBox from '../../Componentes/TextInputBox/TextInputBox';
import Logo from '../../Componentes/Logo/Logo';
import { Picker } from 'react-native-web';
import MathUtils from '../../utils/MathUtils';

export default function CalculoIMCScreen() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView contentContainerStyle={styles.container}>
  
          <Logo/>
  
          <Text style={styles.title}>Calculo de IMC</Text>

          <TextInputBox value={number1}
            onChangeText={setNumber1} placeholder="Digite a altura, em cm" keyboardType="numeric"
          />
          <TextInputBox value={number2}
            onChangeText={setNumber2} placeholder="Digite o peso,em kg" keyboardType="numeric"
          />
          <CustomButton title="Calcular"
            onPress={() => MathUtils.funcaoCalculoIMC(number1, number2)} style={styles.button}
          />
        </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff', alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    }
  });