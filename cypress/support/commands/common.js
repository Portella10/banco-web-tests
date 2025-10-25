Cypress.Commands.add("verificarMensagemToast", (mensagem) => {
    cy.get(".toast").should("have.text", mensagem);
});

Cypress.Commands.add("selecionarElementoCombobox", (labelDoCampo, opcao) => {
    cy.get(`label[for="${labelDoCampo}"]`).parent().as(`campo-${labelDoCampo}`);
    cy.get(`@campo-${labelDoCampo}`).click();
    cy.get(`@campo-${labelDoCampo}`).contains(opcao).click();
});
