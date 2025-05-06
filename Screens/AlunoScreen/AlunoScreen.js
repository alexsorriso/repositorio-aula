import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../Componentes/CustomButton/CustomButton';
import TextInputBox from '../../Componentes/TextInputBox/TextInputBox';
import API from '../../API/API';



export default function Aluno(){    
  
    
    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [anoAtivo, setAnoAtivo] = useState('');
    const [sala, setSala] = useState('');
    const [quantidadeAlunos, setQuantidadeAlunos] = useState('');


    function salvarDados(){
        const body = {
            id,
            nome,
            anoAtivo,
            sala,
            quantidadeAlunos
        }

        API.post('http://192.168.8.1:3000/alunos',body)
        
    }

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
          <Text style={styles.title}>Cadastro de Alunos</Text>
          <TextInputBox value={id}
            onChangeText={setId} 
            placeholder="Digite o id do elemento" keyboardType="string"
          />
          <TextInputBox value={nome}
            onChangeText={setNome} placeholder="Digite o nome do elemento" keyboardType="string"
          />
          <TextInputBox value={anoAtivo}
            onChangeText={setAnoAtivo} placeholder="Digite a idade" keyboardType="string"
          />
          <TextInputBox value={sala}
            onChangeText={setSala} placeholder="Digite a sala" keyboardType="string"
          />
          
          <TextInputBox value={quantidadeAlunos}
            onChangeText={setQuantidadeAlunos} placeholder="Digite a quantidade de alunos, carinha feliz :)" keyboardType="numeric"
          />
          <CustomButton 
            title="Salvar"
            style={styles.button}
            onPress={salvarDados}   
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


