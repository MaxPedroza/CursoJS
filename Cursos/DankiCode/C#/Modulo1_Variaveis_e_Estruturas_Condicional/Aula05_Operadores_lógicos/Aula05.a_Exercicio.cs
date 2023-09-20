using System;
					
public class Program
{
	public static void Main()
	{		
		Console.WriteLine("Faça os calculos corretamente e adicione o valor correspondete!");
		Console.WriteLine("1) - 2+2=?");
   		int per1 = Convert.ToInt32(Console.ReadLine());
		int pontos = 0;
		
		
		
        if (per1 == 4 )        // Pergunta 1
        {
            pontos +=2;
			Console.WriteLine("Correto!");
			
        }else
        {
            Console.WriteLine("Incorreto! Resposta Correta: 4");
			
        }
		
		Console.WriteLine("2) - 4+4=?");
    	int per2 = Convert.ToInt32(Console.ReadLine());
		
		 if (per2 == 8)        // Pergunta 2
        {
            pontos +=2;
		   Console.WriteLine("Correto!");
			
        }else
        {
            Console.WriteLine("Incorreto! Resposta Correta: 8");
			
        }
		
		Console.WriteLine("3) - 5+4=?");
    	int per3 = Convert.ToInt32(Console.ReadLine());
		
		 if (per3 == 9)        // Pergunta 3
        {
           pontos +=2;
		   Console.WriteLine("Correto!");
			
        }else
        {
            Console.WriteLine("Incorreto! Resposta Correta: 9");
			
        }
		
		Console.WriteLine("4) - 6+4=?");
    	int per4 = Convert.ToInt32(Console.ReadLine());
		
		 if (per4 == 10)        // Pergunta 4
        {
            pontos +=2;
		   Console.WriteLine("Correto!");
			
        }else
        {
            Console.WriteLine("Incorreto! Resposta Correta: 10");
			
        }
		
		Console.WriteLine("5) - 6.2 + 4.5 =?");
    	float per5 = float.Parse(Console.ReadLine());
		
		 if (per5 == 11.7f)       // Pergunta 5, importante o f depois do numero float, evita erros com numeros flutuantes
        {
            pontos +=2;
		   Console.WriteLine("Correto!");
			
        }else
        {
            Console.WriteLine("Incorreto! Resposta Correta: 11.7");
			
        }
		
		Console.WriteLine("Pontuação:" + pontos);		
	}
}