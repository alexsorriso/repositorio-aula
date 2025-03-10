export default function funcaoMultiplicacao(number1, number2) {  
    const mult = parseFloat(number1) * parseFloat(number2);   
    if (isNaN(mult)) { 
     alert( 'Por favor, insira números válidos.');   } else { 
     alert( `A multiplicação é: ${mult}`); 
   } 
 } 
 