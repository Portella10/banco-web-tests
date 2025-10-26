Cypress.Commands.add("fazerLoginComCredenciaisValidas", () => {
    cy.fixture("credenciais").then((credencias) => {
        cy.get("#username").click().type(credencias.valida.usuario);
        cy.get("#senha").click().type(credencias.valida.senha);
    });
    cy.contains("button", "Entrar").click();
});

Cypress.Commands.add("fazerLoginComCredenciaisInvalidas", () => {
    cy.fixture("credenciais").then((credenciais) => {
        cy.get("#username").click().type(credenciais.invalida.usuario);
        cy.get("#senha").click().type(credenciais.invalida.senha);
    });
    cy.contains("button", "Entrar").click();
});
