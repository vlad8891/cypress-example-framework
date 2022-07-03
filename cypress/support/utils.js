export class Utils {
  formatElementName(element) {
    element = element.replace(/ |-/g, "_").toLowerCase();
    return element;
  }
}
