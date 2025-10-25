/// <reference types="cypress" />

describe("Transferencia", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.fazerLoginComCredenciaisValidas();
    });

    it("Deve transferir com os valores validos", () => {
        //act
        cy.realizarTransferencia("João da Silva", "Maria Oliveira", "10");

        //assert
        cy.verificarMensagemToast("Transferência realizada!");
    });

    it("Deve apresentar erro ao tentar enviar uma transacao de R$6000 sem o token", () => {
        //act
        cy.realizarTransferencia("João da Silva", "Maria Oliveira", "6000");

        //assert
        cy.verificarMensagemToast("Autenticação necessária para transferências acima de R$5.000,00.");
    });
});
