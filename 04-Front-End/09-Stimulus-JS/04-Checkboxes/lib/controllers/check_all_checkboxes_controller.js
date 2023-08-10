import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["checkbox"]

  connect() {
    console.log('hola');
  }

  checkAll() {
    this.checkboxTargets.forEach((checkbox) => {
      checkbox.checked = !checkbox.checked;
    });
  }
}
