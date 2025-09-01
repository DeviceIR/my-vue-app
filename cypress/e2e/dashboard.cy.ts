describe("Dashboard Page", () => {
  beforeEach(() => {
    cy.visit("/dashboard");
  });

  it("displays dashboard heading", () => {
    cy.contains("Dashboard").should("exist");
  });

  it("navigates to Weather page", () => {
    cy.get<HTMLAnchorElement>('a[href="/weather"]').click();
    cy.url().should("include", "/weather");
  });
});
