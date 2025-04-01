import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../Componentes/CustomButton/CustomButton';
import TextInputBox from '../../Componentes/TextInputBox/TextInputBox';


export default function CadastrarScreen({setTarefas}) {
    const [tarefa, setTarefa] = useState('')
    const [data, setData] = useState('');

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
          <Text style={styles.title}>Cadastro de Tarefas</Text>
          <TextInputBox value={tarefa}
            onChangeText={setTarefa} placeholder="Digite a tarefa" keyboardType="string"
          />
          <TextInputBox value={data}
            onChangeText={setData} placeholder="Digite a data" keyboardType="numeric"
          />
          <CustomButton 
            title="Salvar"
            style={styles.button}
            onPress={() => {
              if (tarefa && data) {
                const novaTarefa = {tarefa, data}
                setTarefas(prevTarefas => [...prevTarefas, novaTarefa])
                setTarefa('')
                setData('')
              } else {
                alert('Preencha todos os campos')
              }              
            }} 
          /> 
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