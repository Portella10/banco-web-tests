/// <reference types="cypress" />

describe("Login", () => {
  it("Login com dados validos deve permitira a entrada", () => {
    cy.visit("http://localhost:4000");

    cy.get("#username").click().type("julio.lima");
    cy.get("#senha").click().type("123456");
    cy.contains("button", "Entrar").click();

    cy.contains("h4", "Realizar Transferência").should("be.visible");
  });

  it("Login com dados invalidos deve aparecer uma mensagem de erro", () => {
    cy.visit("http://localhost:4000");

    cy.get("#username").click().type("julio.lima");
    cy.get("#senha").click().type("654321");
    cy.contains("button", "Entrar").click();

    cy.get(".toast").should("have.text", "Erro no login. Tente novamente.");
  });
});
