class Card extends HTMLElement {
  connectedCallback() {
    const content = this.getAttribute("content");
    this.innerHTML = `<div class="card-item">
      <span class="card-content">${content}</span>
      </div>`;
  }

  static get observedAttributes() {
    return ["content"];
  }

  attributeChangedCallback() {
    console.log("!23");
  }

  setContent(attr) {
    this.setAttribute("content", attr);
  }
}

customElements.define("card-component", Card);

export default Card;
