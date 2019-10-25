/// <reference types="Cypress" />

describe("My First Test", function() {
  it("Does not do much!", function() {
    cy.visit("/",{ timeout: 30000 });
    expect(true).to.equal(true);
  });
});
