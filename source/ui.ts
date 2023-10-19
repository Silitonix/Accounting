export class UI
{
  static element<K extends keyof HTMLElementTagNameMap>(tag: K, className: string, parent: HTMLElement = document.body): HTMLElementTagNameMap[ K ]
  {
    const element = document.createElement(tag);
    element.className = className;
    parent.appendChild(element);
    return element;
  }
}