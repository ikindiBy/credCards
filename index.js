const listCards = document.getElementById("list_cards");
const buttonAddCard = document.getElementById("add_card");

let counter = 0;

const addCard = () => {
  const cardItem = document.createElement("div");
  cardItem.classList.add("item_card");
  const textnode = document.createTextNode(`comment -- comment ${counter}`);

  const img = document.createElement("img");
  if (counter % 2) {
    img.src = "images/mastercard.png";
  } else {
    img.src = "images/visa.png";
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
