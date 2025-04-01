import { Alert } from 'react-native';
class MathUtils {
    static funcaoCalculo(number1, number2, acao, setSaida) {
        var sum;
        switch (acao) {
            case '+':
                sum = parseFloat(number1) + parseFloat(number2);
                break;
            case '-':
                sum = parseFloat(number1) - parseFloat(number2);
                break;
            case '*':
                sum = parseFloat(number1) * parseFloat(number2);
                break;
            case '/':
                sum = parseFloat(number1) / parseFloat(number2);
                break;

            default:
                break;
        }
        if (isNaN(sum)) {
            Alert.alert('Erro', 'Por favor, insira números válidos.');
        } else {
            alert(`A soma é: ${sum}`);
        }
    }

    static funcaoCalculoIMC(number1, number2, setSaida) {
        var sum = (number2/number1**2) * 10000

        if (isNaN(sum)) {
            Alert.alert('Erro', 'Por favor, insira números válidos.');
        } else {
            setSaida(`O IMC é: ${sum.toFixed(2)}`);
            alert(`O IMC é: ${sum.toFixed(2)}`);
        }

    }

    static funcaoCadastro(tarefa, data, setSaida){
        let vtarefa=[];
        let vdata=[];
        vtarefa.push(tarefa);
        vdata.push(data);

    }
}
export default MathUtils;