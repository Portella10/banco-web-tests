/// <reference types="cypress" />

describe("Login", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Login com dados validos deve permitira a entrada", () => {
        //act
        cy.fazerLoginComCredenciaisValidas();

        //assert
        cy.contains("h4", "Realizar Transferência").should("be.visible");
    });

    it("Login com dados invalidos deve aparecer uma mensagem de erro", () => {
        //act
        cy.fazerLoginComCredenciaisInvalidas();

        //assert
        cy.verificarMensagemToast("Erro no login. Tente novamente.");
    });
});
