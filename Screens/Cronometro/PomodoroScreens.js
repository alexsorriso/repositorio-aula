import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../Componentes/CustomButton/CustomButton';

export default function CalculoIMCScreen() {
    const [number, setNumber ] = useState(1200);
    const [rodando, setRodando ] = useState(false);

    useEffect(() => {
      let interval = null;

      if (rodando) {
        interval = setInterval(() => {
          setNumber(prevNumber => {
            let number = prevNumber - 1
            if(number <= 0){
              return 0
            }
            return number
          })
        }, 1000);
      } else {
        clearInterval(interval)
      }
      return () => clearInterval(interval)
    }, [rodando])

    function Formatar(tempo){
      const minutos = String(Math.floor(tempo / 60)).padStart(2,'0')
      const segundos = String(tempo % 60).padStart(2,'0')
      return `${minutos}:${segundos}`
    }

    return (
      <View style={styles.container}>
          <Text style={styles.time}>{Formatar(number)}</Text>
          <View style={styles.buttonsContainer}>
            <CustomButton title={rodando ? 'Pausar' : 'Iniciar'} onPress={() => {setRodando(!rodando)}}/>
            <CustomButton 
              title="Resetar" 
              onPress={() => {
                setRodando(false)
                setNumber(1200)
              }}/>
          </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff', 
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50,
    },
    time: {
      fontSize: 24,
      marginBottom: 20,
    },
    buttonsContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: 10,
    }
  });