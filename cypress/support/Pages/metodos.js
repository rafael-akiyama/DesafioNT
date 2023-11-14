
const el = require('./elements').ELEMENTS;


class Pages {

    acessarPagBlogDoAgi() {
        cy.visit(Cypress.env('urlBlogDoAgi'));
        cy.xpath(el.validacaoPagInicialBlogDoAgi).should('be.visible');
        cy.screenshot();
    }

    fazerUmaPesquisaComSucesso() {
        cy.xpath(el.botaoLupaPesquisa).click();
        cy.get(el.campoPesquisa).type(Cypress.env('pesquisa com sucesso'));
        cy.screenshot();
        cy.get(el.botaoPesquisar).click();
        cy.xpath(el.validacaoPesquisaComSucesso).should('contain.text', "Agibank");
        cy.screenshot();
    }

    fazerUmaPesquisaSemSucesso() {
        cy.xpath(el.botaoLupaPesquisa).click();
        cy.get(el.campoPesquisa).type(Cypress.env('pesquisa sem sucesso'));
        cy.screenshot();
        cy.get(el.botaoPesquisar).click();
        cy.xpath(el.validacaoPesquisaSemSucesso).should('contain.text', "Nenhum resultado");
        cy.screenshot();
    }

    
}

export default new Pages();
