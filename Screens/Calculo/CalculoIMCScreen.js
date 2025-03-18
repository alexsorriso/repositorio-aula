import React, { useState } from 'react';
 import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CustomButton from '../../Componentes/CustomButton/CustomButton';
import TextInputBox from '../../Componentes/TextInputBox/TextInputBox';
import Logo from '../../Componentes/Logo/Logo';

import MathUtils from '../../utils/MathUtils';

export default function CalculoIMCScreen() {
    const [peso, setPeso ] = useState('');
    const [altura, setAltura] = useState('');
    const [saida, setSaida] = useState('');
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView contentContainerStyle={styles.container}>
  
          <Logo/>
  
          <Text style={styles.title}>Calculo de IMC</Text>

          <TextInputBox value={altura}
            onChangeText={setAltura} placeholder="Digite a altura, em cm" keyboardType="numeric"
          />
          <TextInputBox value={peso}
            onChangeText={setPeso} placeholder="Digite o peso,em kg" keyboardType="numeric"
          />
          <CustomButton title="Calcular"
            onPress={() => MathUtils.funcaoCalculoIMC(altura, peso, setSaida)} style={styles.button}
          />
            <Text>{saida ? saida : ''}</Text>
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