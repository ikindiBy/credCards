const listCards = document.getElementById("list_cards");
const buttonCreateCard = document.getElementById("create_card");
const buttonAddCard = document.getElementById("add_card");

const coverDisplay = document.getElementById("coverDisplay");
const modalForm = document.getElementById("modalForm");

const selectTypeCard = document.getElementById("typeCard");
const commentForCard = document.getElementById("comment");

const typesCards = {
  visa: "visa",
  mastercard: "mastercard",
  belcard: "belcard",
  maestro: "maestro"
};

const SHOWING_STATES = {
  BLOCK: "block",
  NONE: "none"
};

const emptyComment = "no comment yet";

let counter = 0;
let comment = "";

const changeShowingModalAddingCard = stateShowing => {
  coverDisplay.style.display = stateShowing;
  modalForm.style.display = stateShowing;
};

const openModalAddingCard = () => {
  changeShowingModalAddingCard(SHOWING_STATES.BLOCK);
};

const closeModalAddingCard = () => {
  changeShowingModalAddingCard(SHOWING_STATES.NONE);
};

const addCard = e => {
  e.preventDefault();

  const selectedTypeCard = selectTypeCard.value;

  const cardItem = document.createElement("div");
  cardItem.classList.add("item_card");

  const textnode = document.createTextNode(comment || emptyComment);

  const img = document.createElement("img");
  img.src = `images/${selectedTypeCard}.png`;

  const button = document.createElement("button");
  const textButton = document.createTextNode("Delete");
  button.appendChild(textButton);

  cardItem.appendChild(img);
  cardItem.appendChild(textnode);
  cardItem.appendChild(button);

  listCards.appendChild(cardItem);

  counter++;

  //   selectedTypeCard.value = "Chose type";
  commentForCard.value = "";

  closeModalAddingCard();
};

const deleteCard = e => {
  listCards.removeChild(e.target.parentNode);
};

const handleInputComment = e => {
  let inputText = e.target.value;
  console.log("To!", inputText);
  if (inputText.length < 14) {
    console.log("To!", inputText);
    comment = inputText;
  } else {
    console.log("Too long. Enaught!!");
  }
};

buttonCreateCard.addEventListener("click", openModalAddingCard, false);
coverDisplay.addEventListener("click", closeModalAddingCard, false);
buttonAddCard.addEventListener("click", addCard, false);

listCards.addEventListener("click", deleteCard, false);
commentForCard.addEventListener("input", handleInputComment, false);
