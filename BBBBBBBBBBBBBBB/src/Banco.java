import java.util.ArrayList;

public class Banco {

    ArrayList <InstrumentoFinanceiro> instrumentos = new ArrayList<>();
    private int numInstrumentos;
    public static void main (String[] args){
        
        Acao acao = new Acao();
        Banco banco = new Banco();
        ContaCorrente CC = new ContaCorrente();
        FundoDeAplicacao FA = new FundoDeAplicacao();

        acao.setSaldo(200);
        acao.setCotas(4);
        CC.setSaldo(124);
        CC.setLimite(1000);
        FA.setSaldo(500);
        FA.setRentabilidade(12);
        banco.Adicionar(acao);
        banco.Adicionar(CC);
        banco.Adicionar(FA);
        banco.calcularSaldos();
        

       
    }

    public void Adicionar(InstrumentoFinanceiro Instrumento){
        instrumentos.add(Instrumento);
        numInstrumentos += 1;
    }
    
   public  float calcularSaldos(){
    float total=0;
    for (int i = 0;  i < numInstrumentos; i++){
     total += instrumentos.get(i).CalculaSaldoTotal();
    }
    return total ;
    }
}
