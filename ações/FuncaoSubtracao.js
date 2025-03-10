export default function FuncaoSubtracao(number1, number2){
    const sub = parseFloat(number1)-parseFloat(number2);
    if (isNaN(sub)){
        alert('Por favor, insira números válidos.');
    } else {
        alert(`A subtração é: ${sub}`);
    }
}