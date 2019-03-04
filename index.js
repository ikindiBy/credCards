const listCards = document.getElementById("list_cards");
const buttonAddCard = document.getElementById("add_card");

const srcImgCards = {
  visa: "visa",
  mastercard: "mastercard",
  belcard: "belcard",
  maestro: "maestro"
};

let counter = 0;

const addCard = () => {
  const cardItem = document.createElement("div");
  cardItem.classList.add("item_card");
  const textnode = document.createTextNode(`comment -- comment ${counter}`);

  const img = document.createElement("img");
  if (counter % 2 && counter % 3) {
    img.src = `images/${srcImgCards.visa}.png`;
  } else if (counter % 5) {
    img.src = `images/${srcImgCards.mastercard}.png`;
    // belcard
  } else if (counter % 7) {
    img.src = `images/${srcImgCards.belcard}.png`;
  } else {
    img.src = `images/${srcImgCards.maestro}.png`;
  }

  const button = document.createElement("button");
  const textButton = document.createTextNode("Delete");
  button.appendChild(textButton);

  cardItem.appendChild(img);
  cardItem.appendChild(textnode);
  cardItem.appendChild(button);

  listCards.appendChild(cardItem);

  counter++;
};

const deleteCard = e => {
  listCards.removeChild(e.target.parentNode);
};

buttonAddCard.addEventListener("click", addCard, false);
listCards.addEventListener("click", deleteCard, false);
