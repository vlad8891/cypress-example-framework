import { Hooks } from "../common/hooks.js";

const hooks = new Hooks();

export class Actions {
  validateProductName(productNameElement, page, containerIndex, productName) {
    const selector = hooks.getSelectorFromPage(productNameElement, page);
    if (!selector) {
      throw new Error("Element name does not exist in hooks.js under any page");
    }
    cy.get(selector)
      .eq(containerIndex)
      .children("a")
      .should("have.text", productName);
  }

  validateNumberOfProducts(element, page, numberOfProducts) {
    const selector = hooks.getSelectorFromPage(element, page);
    if (!selector) {
      throw new Error("Element name does not exist in hooks.js under any page");
    }
    cy.get(selector).should("have.length", numberOfProducts);
  }
}
