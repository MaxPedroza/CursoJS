x = 5 # x recebe o valor 5
y = 3.5 
z = 1+2j

w = "Max"
w = 'Max'

#A-z, 0-9 e _               variaveis nao devem começar com numeros, caso seja preciso podemos utilizar underline
#altura, Altura e ALTURA   python recebe as variaveis com diferença de maiusculas ou minusculas (Case Sensitive)

h, j, l = 1, 3, 5           #forma de adicioanr variaveis de uma unica vez
print(h)                    # como exibir as variaves
print(j)
print(l)

a = b = c = " Python"        #todas variaveis recebem "python"

print(a)
print(b)
print(c)

h = w + a                   #quando reutiliza-se uma variavel ela mantem o ultimo valor

print(h)

l = x + j                   # utilizando como calculo
print (l)

l = w + x                   # texto com uma variavel ineira nao é possivel concatenar desta forma
print (l)                   # python é de tipagem dinamica, é possivel atribuir valores diferentes para a mesma variavel 