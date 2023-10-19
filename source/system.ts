import { Tab } from "./tab";
import { UI } from "./ui";

export class System
{
  private static errorDOM: HTMLElement;
  private static errorDOMTitle: HTMLElement;
  private static errorDOMMessage: HTMLElement;
  private static errorDOMIcon: HTMLImageElement;
  static tabDOM: HTMLElement;
  static tabDOMTitle: HTMLElement;
  static tabList: HTMLElement;
  static tabActive: Tab;

  static error(title: string, message: string, icon: number)
  {
    this.errorDOMTitle.innerHTML = title;
    this.errorDOMMessage.innerHTML = message;
    this.errorDOMIcon.src = `icons/${ icon }.svg`;
    this.status("open");
  }

  private static status(state: "close" | "open")
  {
    this.errorDOM.setAttribute("status", state);
  }

  static {
    this.errorDOM = UI.element("div", "error-container");
    this.errorDOMIcon = UI.element("img", "error-icon", this.errorDOM);
    this.errorDOMTitle = UI.element("div", "error-title", this.errorDOM);
    this.errorDOMMessage = UI.element("div", "error-message", this.errorDOM);
    this.status("close");
    this.tabDOM = UI.element("div", "tab-list");
    this.tabDOMTitle = UI.element("h1", "tab-title", this.tabDOM);
    this.tabDOMTitle.textContent = "Accounting";
  }
}