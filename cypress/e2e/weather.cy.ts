describe("Weather Page", () => {
  beforeEach(() => {
    cy.visit("/weather");
  });

  it("shows weather heading", () => {
    cy.contains("Weather").should("exist");
  });

  it("accepts city input and submits", () => {
    cy.get<HTMLInputElement>('input[name="city"]').type("Berlin");
    cy.get<HTMLButtonElement>('button[type="submit"]').click();
    cy.contains("Berlin").should("exist");
  });
});
