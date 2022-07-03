import { Hooks } from "../common/hooks.js";

const hooks = new Hooks();

export class GenericActions {
  clickOn(element, page) {
    const selector = hooks.getSelectorFromPage(element, page);
    if (!selector) {
      throw new Error("Element name does not exist in hooks.js under any page");
    }
    cy.get(selector).click();
  }

  clickNth(element, page, elementIndex) {
    const selector = hooks.getSelectorFromPage(element, page);
    if (!selector) {
      throw new Error("Element name does not exist in hooks.js under any page");
    }
    cy.get(selector).eq(elementIndex).click();
  }

  hoverOver(element, page, elementIndex) {
    const selector = hooks.getSelectorFromPage(element, page);
    if (!selector) {
      throw new Error("Element name does not exist in hooks.js under any page");
    }
    cy.get(selector).eq(elementIndex).trigger("mouseover");
  }

  typeInto(element, page, text) {
    const selector = hooks.getSelectorFromPage(element, page);
    if (!selector) {
      throw new Error("Element name does not exist in hooks.js under any page");
    }
    cy.get(selector).type(text);
  }

  clearTextFrom(element, page) {
    const selector = hooks.getSelectorFromPage(element, page);
    if (!selector) {
      throw new Error("Element name does not exist in hooks.js under any page");
    }
    cy.get(selector).clear();
  }

  validateVisibility(element, page) {
    const selector = hooks.getSelectorFromPage(element, page);
    if (!selector) {
      throw new Error("Element name does not exist in hooks.js under any page");
    }
    cy.get(selector).should("be.visible");
  }
}
