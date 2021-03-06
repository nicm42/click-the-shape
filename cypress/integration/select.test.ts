/// <reference types="Cypress" />
/// <reference types="@testing-library/cypress" />

describe('Select tests', () => {
  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'));
  });

  it('Shape changes when select changes', () => {
    cy.findByTestId('select').should('exist').should('have.value', null);

    // Circle
    cy.findByTestId('select').select('Circle').should('have.value', 'Circle');
    // There's already a shape in closest, so now there should be shape and helper as well
    cy.findAllByTestId('circle').should('have.length', 3);

    // Heart
    cy.findByTestId('select').select('Heart').should('have.value', 'Heart');
    cy.findAllByTestId('heart').should('have.length', 3);

    // Hexagon
    cy.findByTestId('select').select('Hexagon').should('have.value', 'Hexagon');
    cy.findAllByTestId('hexagon').should('have.length', 3);

    // Star
    cy.findByTestId('select').select('Star').should('have.value', 'Star');
    cy.findAllByTestId('star').should('have.length', 3);

    // Square
    cy.findByTestId('select').select('Square').should('have.value', 'Square');
    cy.findAllByTestId('square').should('have.length', 3);

    // Triangle
    cy.findByTestId('select')
      .select('Triangle')
      .should('have.value', 'Triangle');
    cy.findAllByTestId('triangle').should('have.length', 3);
  });
});
