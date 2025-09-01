describe("TodoList Page", () => {
  beforeEach(() => {
    cy.visit("/todo");
  });

  it("adds a new todo", () => {
    cy.get<HTMLInputElement>('input[name="newTodo"]').type("Learn Cypress");
    cy.get<HTMLButtonElement>("button").contains("Add").click();
    cy.contains("Learn Cypress").should("exist");
  });

  it("marks todo as completed", () => {
    cy.get<HTMLInputElement>('input[type="checkbox"]').first().check();
    cy.get<HTMLInputElement>('input[type="checkbox"]')
      .first()
      .should("be.checked");
  });
});
