import { Utils } from "../../support/utils.js";

const utils = new Utils();

export class Hooks {
  getSelectorFromPage(element, page) {
    element = utils.formatElementName(element);

    switch (page) {
      case "Homepage":
        return {
          search_bar: "#search_query_top",
          search_button: '[name="submit_search"]',
          product_container: '[class="product-container"]',
          add_to_cart_button: '[title="Add to cart"]',
          cart_summary: "#cart_summary",
          continue_shopping_button: '[title="Continue shopping"]',
          proceed_to_checkout_button: '[title="Proceed to checkout"]',
        }[element];

      case "Checkout":
        return {
          product_container: "#cart_summary tbody tr",
          cart_description: '[class="cart_description"]',
          product_name: '[class="product-name"]',
          remove_from_cart_button: '[data-title="Delete"]',
          empty_cart_alert: '[class="alert alert-warning"]',
        }[element];

      default:
        throw new Error(
          "The page sent as argument from the feature file does not exist in hooks.js"
        );
    }
  }
}
