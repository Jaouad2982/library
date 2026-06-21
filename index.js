const container = document.querySelector(".container");
const form = document.querySelector(".contact-form");
const formInput = document.querySelectorAll(".contact-form input");

console.log(formInput);

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const yearInput = document.getElementById("year");
const languageInput = document.getElementById("language");
const numOfpagesInput = document.getElementById("numOfpages");

//create the form elements
// const author;
let setOfDivs = new Set();
let arrOfBooks = [];
let bookArray = [];
function removeBook(btn) {
  btn.addEventListener("click", function () {
    console.log(bookArray);
  });
}

form.addEventListener("submit", function (event) {
  let idNumber = Math.round(Math.random() * 123456789);

  event.preventDefault(); // Prevent page reload

  // Get the input value
  const titleText = titleInput.value.trim();
  const authorText = authorInput.value.trim();
  const yearText = yearInput.value.trim();
  const languageText = languageInput.value.trim();
  const numberofpagesText = numOfpagesInput.value.trim();
  arrOfBooks.push({
    titleText,
    authorText,
    yearText,
    languageText,
    numberofpagesText,
  });

  bookArray = [...arrOfBooks];
  container.innerHTML = "";
  bookArray.forEach((elem) => {
    const divBlock = document.createElement("div");
    const id = document.createElement("span");
    const h4 = document.createElement("h4");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const button = document.createElement("button");

    container.append(divBlock);
    divBlock.append(id);
    divBlock.append(h4);
    divBlock.append(p1);
    divBlock.append(p2);
    divBlock.append(p3);
    divBlock.append(p4);
    divBlock.append(button);
    button.textContent = "Remove Book";
    id.textContent = idNumber;
    h4.textContent = elem.titleText;
    p1.textContent = elem.authorText;
    p2.textContent = elem.yearText;
    p3.textContent = elem.languageText;
    p4.textContent = elem.numberofpagesText;
    button.dataset.id = idNumber;
    button.addEventListener("click", function () {
      bookArray = bookArray.filter((id) => id !== this.dataset.id);
      divBlock.remove();
    });
  });

  // container.innerHTML = bookArray.map(
  //   (elem) => `<div class="divCreated">
  //     <h4>${elem.titleText} </h4>
  //     <p>${elem.authorText} </p>
  //     <p>${elem.yearText} </p>
  //     <p>${elem.languageText} </p>
  //     <p>${elem.numberofpagesText}</p>
  //   </div> `,
  // );
  // const createdDiv = document.querySelector(".divCreated");
  // button.textContent = "remove book";
  // createdDiv.append(button);
  // const btn = document.querySelector("#buttonCreated");
  // removeBook(btn);
  // arrayDiv.forEach((elem) => {});
  // console.log(setOfDivs);
  // const iterator = setOfDivs.values(); // or books[Symbol.iterator]()
  // console.log(iterator);
  // // Iterate manually
  // let result = iterator.next();
  // let divBlock = document.createElement("div");
  // container.append(divBlock);
  // let p = document.createElement("p");

  // while (!result.done) {
  //   const book = result.value;
  //   if (!book.has)
  //     // This is the object
  //     divBlock.append(p, book.titleText);
  //   result = iterator.next();
  // }
});
