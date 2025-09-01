describe("Profile Page", () => {
  beforeEach(() => {
    cy.visit("/profile");
    cy.clearLocalStorage(); // start fresh
  });

  it("displays profile heading", () => {
    cy.get('[data-cy="profile-heading"]').should("be.visible");
  });

  it("updates profile info", () => {
    cy.get<HTMLInputElement>('[data-cy="username-input"]')
      .clear()
      .type("Erfan")
      .should("have.value", "Erfan");

    cy.get<HTMLButtonElement>('[data-cy="save-button"]').click();
    cy.contains("Settings saved!").should("exist");
  });
});
