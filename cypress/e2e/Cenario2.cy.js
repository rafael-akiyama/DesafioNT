/// <reference types="cypress" />


import Pages from '../support/Pages/metodos';

describe('CT 2 - Fazer Uma Pesquisa Sem Sucesso', () => {
   it('Fazer uma pesquisa sem sucesso', () => {
      Pages.acessarPagBlogDoAgi();
      Pages.fazerUmaPesquisaSemSucesso();
   })

})