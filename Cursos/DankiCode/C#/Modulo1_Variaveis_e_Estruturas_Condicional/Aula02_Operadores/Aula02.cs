

Console.WriteLine("Escreva um numero");
int numero1 = Convert.ToInt32(Console.ReadLine());      // writeLine apenas recebe istring, neste caso Tointo32 converte string em numero inteiro

Console.WriteLine("Escreva outro numero");
int numero2 = Convert.ToInt32(Console.ReadLine());

int total = (numero1+numero2);
Console.WriteLine("o seu total é: \n" + total);         // n\ cria um espaço entre a string e a variavel, utilizando concatenação (+) para nao gerar mais de uma linha de codigo