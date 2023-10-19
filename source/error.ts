import { UI } from "./ui";

export class ErrorSystem
{
  private static count = 0;
  private DOM: HTMLElement;
  private DOMTitle: HTMLElement;
  private DOMMessage: HTMLElement;
  private DOMIcon: HTMLImageElement;

  private status(state: "close" | "open")
  {
    this.DOM.setAttribute("status", state);
  }
  private remove(){
    this.status("close");

  }
  constructor (title: string, message: string, icon: number,btn:string = "خروج")
  {
    this.DOM = UI.element("div", "error-container");
    this.DOMIcon = UI.element("img", "error-icon", this.DOM);
    this.DOMTitle = UI.element("div", "error-title", this.DOM);
    this.DOMMessage = UI.element("div", "error-message", this.DOM);
    this.status("open");
    
    this.DOMTitle.innerHTML = title;
    this.DOMMessage.innerHTML = message;
    this.DOMIcon.src = `icons/${ icon }.svg`;
    
    this.DOM.style.top = 10+(this.DOM.clientHeight+10) * ErrorSystem.count + 'px';
    ErrorSystem.count++;
    
  }
}