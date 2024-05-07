import Card from "./card.js";

// Card 데이터 패칭
const getCardsJson = async () => {
  return fetch("./card.json").then((res) => res.json());
};

// Card 리스트 Wrapper 생성
const createCardsWrapper = () => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("card-wrapper");
  return wrapper;
};

// DOMContent 로드 후, 렌더링
const loaded = async () => {
  const cards = await getCardsJson();
  const wrapper = createCardsWrapper();

  cards.forEach((card) => {
    const cardComponent = new Card();
    const number = String(card.id).padStart(2, "0");
    cardComponent.setContent(`${card.content} ${number}`);
    wrapper.append(cardComponent);
  });

  const container = document.querySelector(".container");
  container.append(wrapper);
};

document.addEventListener("DOMContentLoaded", loaded);
