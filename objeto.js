//Um objeto é representado utilizando {}
//Todo objeto é composto por pares de chave e valor, representados como:
//chave: valor,
let professor = {
  nome: 'Felipe',
  idade: 23,
  programador: true
};

let email = {valor:'joao@zikah2018.top.br'};

let joaozinho = {
  nome: 'João',
  idade: 14,
  namorada: undefined,
  email: email,
  gatos: [
    {
      nome: 'Claudio',
      raca: 'SRD',
    },
    {
      nome: 'Gustavo',
      raca: 'Tomba-latas'
    }
  ]
}

let mariazinha = {
  nome: 'Maria',
  idade: 16,
  namorado: undefined,
  email: email,
  cachorros: [
    {
      nome: 'Bob',
      raca: 'Indefinida'
    }
  ]
}

//É possível acessar a propriedade de um objeto com as duas maneiras abaixo:
joaozinho['namorada'] = mariazinha;
mariazinha.namorado = joaozinho;

