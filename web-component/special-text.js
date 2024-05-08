class SpecialText extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["title"];
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>
            .title-area {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 5px;
                margin: 0px 0px 15px 0px;
            }

            h1 {
                color: blue;
                margin: 0px;
                text-transform: uppercase;
            }

            slot[name="subTitle"] {
                font-size: 8px;
                line-height: 8px;
                color: rgba(0, 0, 0, 0.8);
                text-transform: capitalize;
            }
        </style>
        <div class="title-area">
            <h1>${this.title}</h1>
            <slot name="subTitle"></slot>
        </div>
    `;
  }
}

customElements.define("special-text", SpecialText);
