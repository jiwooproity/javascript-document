import Card from "./card.js";

const loaded = async () => {
  const cards = await fetch("./card.json").then((res) => res.json());

  const wrapper = document.createElement("div");
  wrapper.classList.add("card-wrapper");

  cards.map((card) => {
    const cardComponent = new Card();
    const number = String(card.id).padStart(2, "0");
    cardComponent.setContent(`${card.content} ${number}`);
    wrapper.append(cardComponent);
  });

  const container = document.querySelector(".container");
  container.append(wrapper);
};

document.addEventListener("DOMContentLoaded", loaded);
