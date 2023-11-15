/// <reference types="cypress" />


import Pages from '../support/Pages/metodos';

describe('CT 1 - Fazer Uma Pesquisa Com Sucesso', () => {
   it('Fazer uma pesquisa com sucesso', () => {
      Pages.acessarPagBlogDoAgi();
      Pages.fazerUmaPesquisaComSucesso();
   })

})