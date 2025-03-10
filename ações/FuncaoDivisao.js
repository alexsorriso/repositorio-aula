export default function FuncaoDivisiao(number1,number2){
    const div = parseFloat(number1)/parseFloat(number2);
    if (isNaN(div)){
        alert('Por favor, insira números válidos.');
    } else {
        alert(`A divisão é: ${div}`);
    }
}