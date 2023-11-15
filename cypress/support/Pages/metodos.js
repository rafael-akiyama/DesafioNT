
const el = require('./elements').ELEMENTS;


class Pages {

    acessarPagBlogDoAgi() {
        cy.visit(Cypress.env('urlBlogDoAgi'));
        cy.xpath(el.validacaoPagInicialBlogDoAgi).should('be.visible');
        cy.screenshot('validacaoPagInicial');
    }

    fazerUmaPesquisaComSucesso() {
        cy.xpath(el.botaoLupaPesquisa).click();
        cy.get(el.campoPesquisa).type(Cypress.env('pesquisa com sucesso'));
        cy.screenshot('CT1 - validacaoTermoDaPesquisaComSucesso');
        cy.get(el.botaoPesquisar).click();
        cy.xpath(el.validacaoPesquisaComSucesso).should('contain.text', "Agibank");
        cy.screenshot('CT1 - validacaoResultadoPesquisaComSucesso');
    }

    fazerUmaPesquisaSemSucesso() {
        cy.xpath(el.botaoLupaPesquisa).click();
        cy.get(el.campoPesquisa).type(Cypress.env('pesquisa sem sucesso'));
        cy.screenshot('CT2 - validacaoTermoDaPesquisaSemSucesso');
        cy.get(el.botaoPesquisar).click();
        cy.xpath(el.validacaoPesquisaSemSucesso).should('contain.text', "Nenhum resultado");
        cy.screenshot('CT2 - validacaoResultadoPesquisaSemSucesso');
    }

    
}

export default new Pages();
