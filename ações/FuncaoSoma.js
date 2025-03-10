import { Alert } from 'react-native'; 
 
export default function funcaoSoma(number1, number2,setSaida) {  
   const sum = parseFloat(number1) + parseFloat(number2);   
   if (isNaN(sum)) { 
    alert( 'Por favor, insira números válidos.');   } else { 
    alert( `A soma é: ${sum}`); 
    setSaida(`A soma é: ${sum}`)
  } 
} 
