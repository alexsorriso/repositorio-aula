/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
public class Usuário
{
   private string login;
    private string senha;
    //private int numfuncional;
    //private string titulação;
    
    public Usuário(string login, string senha)
    {
        this.login = login;
        this.senha = senha
    }
    
public class Funcionário extends Usuário
{
    public Funcionário(string login, string senha)
    {
    super(login , senha);
        int numfuncional;
    }
    public void RegistrarHora(date hora)
    {
        
    }
    
}
   public class Professor extends Funcionário
   {
       public Professor(string login, string senha)
       {
           super(login , senha);
           string titulação;
           
       }
       public void RegistrarNotas(int turma)
       {
           
       }
   }
   public class Aluno extends Usuário
   {
       public Aluno(string login, string senha)
       super(login , senha);
       int matrícula;
       string curso;
   }
   
   public void matricular()
   {
       
   }
   public void Trancar()
   {
       
   }
}

public class Main
{
	public static void main(String[] args) {
		System.out.println("");
	}
}
