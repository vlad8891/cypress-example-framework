import { GenericActions } from "../common/generic-actions.js";
import { Actions } from "../e-commerce-platform/actions.js";

const genericActions = new GenericActions();
const actions = new Actions();

describe("E-commerce tests", () => {
  it("Search for a product, add it to cart, then verify that the cart contains said product", () => {
    cy.visit("");
    genericActions.clickOn("Search bar", "Homepage");
    genericActions.typeInto("Search bar", "Homepage", "blouse");
    genericActions.clickOn("Search button", "Homepage");
    genericActions.hoverOver("Product container", "Homepage", 0);
    genericActions.clickOn("Add to cart button", "Homepage");
    genericActions.clickOn("Continue shopping button", "Homepage");
    genericActions.clickOn("Search bar", "Homepage");
    genericActions.clearTextFrom("Search bar", "Homepage");
    genericActions.typeInto("Search bar", "Homepage", "printed dress");
    genericActions.clickOn("Search button", "Homepage");
    genericActions.hoverOver("Product container", "Homepage", 1);
    genericActions.clickNth("Add to cart button", "Homepage", 1);
    genericActions.clickOn("Proceed to checkout button", "Homepage");
    actions.validateNumberOfProducts("Product container", "Checkout", 2);
    actions.validateProductName("Product name", "Checkout", 0, "Blouse");
    actions.validateProductName("Product name", "Checkout", 1, "Printed Dress");
  });

  it("Remove products from cart, and validate they have been successfully removed", () => {
    genericActions.clickOn("Search bar", "Homepage");
    genericActions.typeInto("Search bar", "Homepage", "blouse");
    genericActions.clickOn("Search button", "Homepage");
    genericActions.hoverOver("Product container", "Homepage", 0);
    genericActions.clickOn("Add to cart button", "Homepage");
    genericActions.clickOn("Continue shopping button", "Homepage");
    genericActions.clickOn("Search bar", "Homepage");
    genericActions.clearTextFrom("Search bar", "Homepage");
    genericActions.typeInto("Search bar", "Homepage", "printed dress");
    genericActions.clickOn("Search button", "Homepage");
    genericActions.hoverOver("Product container", "Homepage", 1);
    genericActions.clickNth("Add to cart button", "Homepage", 1);
    genericActions.clickOn("Proceed to checkout button", "Homepage");
    actions.validateNumberOfProducts("Product container", "Checkout", 2);
    actions.validateProductName("Product name", "Checkout", 0, "Blouse");
    actions.validateProductName("Product name", "Checkout", 1, "Printed Dress");
    genericActions.clickNth("Remove from cart button", "Checkout", 1);
    actions.validateNumberOfProducts("Product container", "Checkout", 1);
    actions.validateProductName("Product name", "Checkout", 0, "Blouse");
    genericActions.clickNth("Remove from cart button", "Checkout", 0);
    actions.validateNumberOfProducts("Product container", "Checkout", 0);
    genericActions.validateVisibility("Empty cart alert", "Checkout");
    genericActions.clickNth("Remove from cart button", "Checkout", 0);
  });
});
