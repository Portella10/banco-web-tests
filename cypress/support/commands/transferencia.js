Cypress.Commands.add("realizarTransferencia", (contaOrigem, contaDestino, valor) => {
    cy.selecionarElementoCombobox("conta-origem", contaOrigem);
    cy.selecionarElementoCombobox("conta-destino", contaDestino);
    cy.get("#valor").click().type(valor);
    cy.contains("button", "Transferir").click();
});
