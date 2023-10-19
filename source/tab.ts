import { System } from "./system";
import { UI } from "./ui";

export class Tab
{
  DOM: HTMLElement;
  active()
  {
    this.DOM.setAttribute("status", "active");
    if (System.tabActive) System.tabActive.deactive();
    System.tabActive = this;
  }
  deactive()
  {
    this.DOM.setAttribute("status", "deactive");
  }
  constructor (name)
  {
    this.DOM = UI.element("div", "tab", System.tabDOM);
    this.DOM.textContent = name;
    this.DOM.addEventListener("click",this.active);
  }
}