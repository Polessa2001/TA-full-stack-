import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  audio = new Audio('sound.mp3');

  connect() {
    console.log('hey');
  }

  disable() {
    this.element.innerText = "Bingo!";
    this.element.classList.add("disabled");
    this.audio.play();
  }
}
