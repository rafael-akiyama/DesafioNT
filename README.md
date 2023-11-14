## ***DESAFIO***

Desenvolver a executar dois cenários de teste web, de forma automatizada.

Contexto: Executar dois cenários baseados no campo de pesquisa do Blog do Agi

A automação será desenvolvida utilizando boas práticas de desenvolvimento, manutenibilidade e
reuso.

## ***Cenário 1: Fazer uma pesquisa de um termo que existe***

Acessar a página https://blogdoagi.com.br/, encontrar a barra de pesquisa e fazer uma pesquisa de um termo existente, e validar o retorno

## ***Cenário 2: Fazer uma pesquisa de um termo que não existe***

Acessar a página https://blogdoagi.com.br/, encontrar a barra de pesquisa e fazer uma pesquisa de um termo inexistente, e validar o retorno

## ***Para rodar o projeto:***

Baixar e instalar:

- Cypress

- Allure

Para rodar, utilizar os comandos:
npm run cy:run

Para criar report:
npm run allure:generate

Para visualizar o report:
npm run allure:open
