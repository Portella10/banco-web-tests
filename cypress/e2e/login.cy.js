/// <reference types="cypress" />

describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4000");
  });

  it("Login com dados validos deve permitira a entrada", () => {
    cy.fixture("credenciais").then((credencias) => {
      cy.get("#username").click().type(credencias.valida.usuario);
      cy.get("#senha").click().type(credencias.valida.senha);
    });

    cy.contains("button", "Entrar").click();

    cy.contains("h4", "Realizar Transferência").should("be.visible");
  });

  it("Login com dados invalidos deve aparecer uma mensagem de erro", () => {
    cy.fixture("credenciais").then((credenciais) => {
      cy.get("#username").click().type(credenciais.invalida.usuario);
      cy.get("#senha").click().type(credenciais.invalida.senha);
    });
    cy.contains("button", "Entrar").click();

    cy.get(".toast").should("have.text", "Erro no login. Tente novamente.");
  });
});
