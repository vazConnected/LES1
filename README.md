# Criação de Mocks no Jest (Teste de Unidade)
Um guia para a criação de testes de unidade em Moks - Jest.

## O que é Mocking?
Mocking ou "imitação", em uma tradução literal, é a técnica de criar imitações de objetos reais da sua aplicação que se comportam como se fosse o objeto real, exceto pelo fato de que você tem total controle sobre ele. Ao utilizar um Mock você consegue simular um teste para uma parte específica do código sem comprometer o que já foi implementado. 

## O que é Jest?
[Jest](https://jestjs.io/pt-BR/) é um framework de teste em JavaScript projetado para garantir a correção de qualquer código JavaScript. Ele permite que você escreva testes com uma API acessível, familiar e rica em recursos que lhe dá resultados rapidamente.

## Instalando o Jest:
Para instalar o Jest utilizando o yarn/npm basta rodar o seguinte comando dentro da pasta do seu projeto:
- yarn: ```yarn add --dev jest```
- npm: ```npm install --save-dev jest```

## Configuração:
É necessário adicionar ao documento package.json o seguinte trecho de código:
``` javascript
{
  "scripts": {
    "test": "jest"
  }
}
```
## Criando testes unitários no Jest
Primeiro vamos criar um arquivo chamado ```descontos.js``` e dentro dele uma função ```freteGratis```:

``` javascript
function freteGratis (valor) {
  return valor >= 150;
}
```
Para testá-lo vamos criar o arquivo descontos.test.js, dentro desse arquivo iremos chamar a função test que será reconhecida pelo Jest como um teste efetivamente, como segundo argumento de test passamos uma função anônima sem argumentos, e nessa função executamos a função expect, e é essa função que irá verificar o resultado do código sendo testado:

``` javascript
const freteGratis = require('./descontos').freteGratis();

test('freteGratis é verdadeiro para 200', () => {
  expect(freteGratis(200)).toBeTruthy();
})
```

Em seguida rodamos o seguinte comando no terminal para executar o teste:

``` 
npm test
```
Ou então:
```
yarn test
```

Na linha de comando o Jest irá notificar se o teste passou ou se falhou.
```
"descontos"

 PASS  test/descontos.test.js
  OK freteGratis é verdadeiro para 200 (5ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.814s
Ran all test suites matching /descontos/i.
```
### Matchers
Jest utiliza de "matchers" para realizar os testes efetivamente. Existem diversos matchers para cada situação em particular dentro do contexto de testes. Os matchers são implementados a partir da chamada de expect() seguinte a sintaxe:

``` javascript
test('descrição do teste', () => {
  expect("valor esperado").toMatch("código testado");
});
```
### Exemplo de Matcher: Igualdade
A função .toBe(valor) testa se o valor passado é idêntico ao esperado em valor e tipo .
``` javascript
test("resultados devem ser iguais",
  () => {
    let moeda = pais.findMoedaById(1);
    expect(moeda.pais).toBe('Dolar');
})
```

Para cada matcher de comparação é possível usar o .not para fazer uma comparação oposta.
``` javascript
test("resultados devem ser iguais",
  () => {
    let moeda = pais.findMoedaById(1);
    expect(moeda.pais).not.toEqual({cotacao: 5.15, pais: 'EUA', moeda: 'Dolar'});
})
```
## Funções de Mock

As Funções de mock permitem criar módulos e funções falsas utilizadas para simular uma dependência. Elas facilitam testar as ligações no código por substituir uma dependência cuja implementação seria inviável dentro do teste. Ao criar o mock de uma função, torna-se possível capturar chamadas dessa função (e seus parâmetros) pelo código que está sendo testado, permite capturar instâncias de funções construtoras quando implementadas usando new e também permitem a configuração dos valores retornados para o código sob teste.

Funções mock são criadas a partir da função ```jest.fn()``` e podem ser configuradas para reproduzir o comportamento desejado.

Vamos supor que temos a seguinte função no nosso código:
``` javascript
function pagamentoMoedaEstrangeira (tipoMoeda, valor, currency) {
  if (tipoMoeda === Currency.QUOTACAO_DOLAR) {
    valor *= currency.getQuotacaoDolar();
  } else if (tipoMoeda === Currency.QUOTACAO_EURO) {
    valor *= currency.getQuotacaoEuro();
  } else if (tipoMoeda === Currency.QUOTACAO_LIBRA) {
    valor *= currency.getQuotacaoLibra();
  } else {
    throw Error('moeda não disponível');
  }
  return valor;
}

module.exports = { pagamentoMoedaEstrangeira }
```
Conseguimos simular uma dependência do código sob teste sem aumentar muito a complexidade do código de teste:
``` javascript
const { pagamentoMoedaEstrangeira } = require('../src/operacoes.js');

const mockCurrency = {};
mockCurrency.getQuotacaoDolar = jest.fn();
mockCurrency.getQuotacaoDolar.mockReturnValue(3);

test('chamar getQuotacaoDolar uma vez', () => {
  expect(pagamentoMoedaEstrangeira('dolar', 300, mockCurrency)).toBe(900);
})
```

- Linha 3: Criamos o objeto que irá portar a função mock a ser criada.
- Linha 4: É criada efetivamente a função mock que ira ser usada dentro do teste.
- Linha 5: Definido o valor de retorno que a função getQuotacaoDolar irá retornar quando for chamada, no caso 3


## Agora é a sua vez!
Para treinar crie uma função mock para o teste da função ```freteGratis```.

## Referências:
- [Teste unitário com Jest](https://www.devmedia.com.br/teste-unitario-com-jest/41234);
- [TDD: Como criar mocks em Node.js com Jest](https://www.luiztools.com.br/post/tdd-como-criar-mocks-em-node-js-com-jest/);
- [Site Oficial Jest](https://jestjs.io/pt-BR/);

## Créditos:
Esse repositório constitui o 1º projeto da disciplina Laboratório de Engenharia de Software 1 ([Cefet-MG](https://cefetmg.br)). 

Autores:
- [Ana Julia Velasque Rodrigues](https://github.com/anajvelasque) - 20193020425;
- [Lucas Cota Dornelas](https://github.com/lucascdornelas) - 20193018294;
- [Pedro Henrique Estevam Vaz de Melo](https://github.com/vazConnected/) - 20193025047;
- [Rafael Augusto de Souza](https://github.com/RafaelAugustoo) - 20193025261;
