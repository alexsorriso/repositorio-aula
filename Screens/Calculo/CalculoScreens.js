import React, { useState } from 'react'; import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CustomButton from '../../Componentes/CustomButton/CustomButton';
import TextInputBox from '../../Componentes/TextInputBox/TextInputBox';
import Logo from '../../Componentes/Logo/Logo';
import { Picker } from 'react-native-web';
import MathUtils from '../../utils/MathUtils';


export default function CalculoScreen() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [saida, setSaida] = useState('');
  const [selectedValue, setSelectedValue] = useState('Somar')
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.container}>

        <Logo/>

        <Text style={styles.title}>Operações</Text>
        <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)}
            >
                <Picker.Item label="Somar" value="+" />
                <Picker.Item label="Subtrair" value="-" />
                <Picker.Item label="Multiplicar" value="*" />
                <Picker.Item label="Dividir" value="/" />
            </Picker>
        <TextInputBox value={number1}
          onChangeText={setNumber1} placeholder="Digite o primeiro número" keyboardType="numeric"
        />
        <TextInputBox value={number2}
          onChangeText={setNumber2} placeholder="Digite o segundo número" keyboardType="numeric"
        />
        <CustomButton title="Calcular"
          onPress={() => MathUtils.funcaoCalculo(number1, number2,selectedValue, setSaida )} style={styles.button}
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
