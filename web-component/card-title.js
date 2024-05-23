class CardTitle extends HTMLElement {
  constructor() {
    super();
    // this.title = "";
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["title"];
  }

  setTitle(title) {
    this.setAttribute("title", title);
  }

  render() {
    this.title = this.getAttribute("title");

    this.innerHTML = `<div>
      <h1>${this.title}</h1>
      </div>`;
  }
}

customElements.define("card-title", CardTitle);
