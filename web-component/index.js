// Card 데이터 패칭
const getCardsJson = async () => {
  return fetch("./card.json").then((res) => res.json());
};

const convertToString = (number) => {
  return String(number).padStart(2, "0");
};

// DOMContent 로드 후, 렌더링
const loaded = async () => {
  const cards = await getCardsJson();

  const cardsNodes = cards.map((card) => {
    const cardComponent = document.createElement("card-component");
    const number = convertToString(card.id);
    cardComponent.setContent(`${card.content} ${number}`);

    return cardComponent;
  });

  const cardTitles = cards.map((card) => {
    const cardTitle = document.createElement("card-title");
    const number = convertToString(card.id);
    cardTitle.setTitle(`${number}`);

    return cardTitle;
  });

  const wrapper = document.querySelector(".card-wrapper");
  wrapper.append(...cardsNodes);
  wrapper.append(...cardTitles);
};

document.addEventListener("DOMContentLoaded", loaded);
