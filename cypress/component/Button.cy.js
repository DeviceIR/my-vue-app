import Button from "../../src/components/Button.vue";

describe("Button.vue", () => {
  it("renders slot text", () => {
    cy.mount(Button, {
      slots: {
        default: "Click Me",
      },
    });
    cy.contains("Click Me").should("exist");
  });

  it("emits click event", () => {
    cy.mount(Button, {
      slots: { default: "Click" },
    });
    cy.get("button").click();
    // Check emitted events
  });
});
