# Criação de Mocks no Jest (Teste de Unidade)
Repositório para o projeto 1 da disciplina de Laboratório de Engenharia de Software 1.

## O que é Mocking?
Mocking ou “imitação”, em uma tradução literal, é a técnica de criar imitações de objetos reais da sua aplicação que se comportam como se fosse o objeto real, exceto pelo fato de que você tem total controle sobre ele. Ao utilizar um Mock você consegue simular um teste para uma parte específica do código sem comprometer o que já foi implementado. 

## O que é Jest?
[Jest](https://jestjs.io/pt-BR/) é um framework de teste em JavaScript projetado para garantir a correção de qualquer código JavaScript. Ele permite que você escreva testes com uma API acessível, familiar e rica em recursos que lhe dá resultados rapidamente.

## Instalando o Jest:
Para instalar o Jest utilizando o yarn/npm basta rodar o seguinte comando dentro da pasta do seu projeto:

yarn: yarn add --dev jest

npm: npm install --save-dev jest

## Configuração:
É necessário adicionar ao documento package.json o seguinte trecho de código:

{
      "scripts": {
        "test": "jest"
      }
    }
    
## Criando testes unitários no Jest

## Referências:
- [Teste unitário com Jest](https://www.devmedia.com.br/teste-unitario-com-jest/41234);
- [TDD: Como criar mocks em Node.js com Jest](https://www.luiztools.com.br/post/tdd-como-criar-mocks-em-node-js-com-jest/);
- [Site Oficial Jest](https://jestjs.io/pt-BR/);

## Autores:
- [Ana Julia Velasque Rodrigues](https://github.com/anajvelasque) - 20193020425;
- [Lucas Cota Dornelas](https://github.com/lucascdornelas) - 20193018294;
- [Pedro Henrique Vaz](https://github.com/vazConnected/) - 20193025047;
- [Rafael Augusto de Souza](https://github.com/RafaelAugustoo) - 20193025261;
