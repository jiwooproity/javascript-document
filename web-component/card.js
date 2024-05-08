class Card extends HTMLElement {
  constructor() {
    super();
    this.content = "No Content";
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["content"];
  }

  attributeChangedCallback() {
    this.render();
  }

  setContent(content) {
    this.setAttribute("content", content);
  }

  render() {
    this.content = this.getAttribute("content");

    this.innerHTML = `<div class="card-item">
      <span class="card-content">${this.content}</span>
      </div>`;
  }
}

customElements.define("card-component", Card);
