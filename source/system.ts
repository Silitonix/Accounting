import { ErrorSystem } from "./error";
import { Tab } from "./tab";
import { UI } from "./ui";

export class System
{
  static tabDOM: HTMLElement;
  static tabDOMTitle: HTMLElement;
  static tabList: HTMLElement;
  static tabActive: Tab;

  static error(title: string, message: string, icon: number)
  {
    new ErrorSystem(title,message,icon);
    throw new Error(message);
  }

  static {
    this.tabDOM = UI.element("div", "tab-list");
    this.tabDOMTitle = UI.element("h1", "tab-title", this.tabDOM);
    this.tabDOMTitle.textContent = "Accounting";
  }
}