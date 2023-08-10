import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["displayCounter"]

  static values = {
    Counter: Number
  }

  connect() {
    console.log('something!');
  }

  updateCounter(digit) {
    this.displayCounterTarget.innerText = digit;
  }

  count(event) {
    if (event.inputType === "deleteContentBackward" && this.CounterValue > 0) {
      this.CounterValue -= 1;
    } else {
      this.CounterValue += 1;
    }
    this.updateCounter(this.CounterValue);
  }
}
