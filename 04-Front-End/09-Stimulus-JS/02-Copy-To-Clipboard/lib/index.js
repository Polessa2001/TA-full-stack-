import { Application, Controller } from "@hotwired/stimulus";

// TODO: Import the Stimulus Controller here
import CopyToClipboardController from "./controllers/copy_to_clipboard_controller.js";

window.Stimulus = Application.start();
// TODO: Register your Stimulus Controller below
Stimulus.register("copy-to-clipboard", CopyToClipboardController);
