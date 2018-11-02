//Um vetor (array) é representdo utilizando []
let lista = [1, 2, 3, 4, 5, 'Olá', 'Felipe', 55, true];
//Indíces:  [0, 1, 2, 3, 4,     5,        6,  7,    8]

//Para acessar o valor de um vetor, basta utilizar nomeDaVariavel[indíce]
console.log(lista[0]);

//Com o acesso pelo indíce, também é possível atribuir novos valores
lista[0] = 'Estação Hack';

//Acessando um indíce e atribuindo um valor que não existe inicialmente no vetor, você pode aumentar seu tamanho
lista[9] = 'Estação Hack';

//Acessando um indíce que ainda não existe e que não é o próximo da sua lista, você adicionar diversas entradas de valor 'undefined' no seu vetor
lista[22] = true;

//Push adiciona um elemento ao fim do vetor
lista.push(31231);

//Pop remove um elemento do fim da lista
lista.pop();

//Slice recebe 2 ou + parâmetros. A ordem dos parâmetros é:
//Qual indíce você quer acessar, quantos elementos serão apagados a partir do indíce, e do terceiro parâmetro em diante tudo será adicionado

//Ou seja, nesse caso, a partir do indíce 1, 3 elementos serão apagados (de indíces 1, 2 e 3)
lista.slice(1, 3);

//Já nesse caso, a partir do indíce 1, 3 elementos serão apagados (de indíces 1, 2 e 3); e serão adicionados os três próximos elementos
lista.slice(1, 3, 'novo valor', 27, false);

lista.push(lista);
