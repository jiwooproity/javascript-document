// Card 데이터 패칭
const getCardsJson = async () => {
  return fetch("./card.json").then((res) => res.json());
};

// DOMContent 로드 후, 렌더링
const loaded = async () => {
  const cards = await getCardsJson();

  const cardsNodes = cards.map((card) => {
    const cardComponent = document.createElement("card-component");
    const number = String(card.id).padStart(2, "0");
    cardComponent.setContent(`${card.content} ${number}`);
    return cardComponent;
  });

  const wrapper = document.querySelector(".card-wrapper");
  wrapper.append(...cardsNodes);
};

document.addEventListener("DOMContentLoaded", loaded);
