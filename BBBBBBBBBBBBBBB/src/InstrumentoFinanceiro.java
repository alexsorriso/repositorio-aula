public abstract class InstrumentoFinanceiro {

    private float saldo;

    public void setSaldo(float saldo){
        this.saldo=saldo;
    }
    public float getSaldo(){
        return saldo;
    }

    public float CalculaSaldoTotal(){
        return saldo;
    }

}