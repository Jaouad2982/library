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
    const divBtn = document.createElement("div");
    divBlock.classList.add("createdDiv");
    const id = document.createElement("span");
    const h4 = document.createElement("h4");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    const p5 = document.createElement("p");

    const button = document.createElement("button");
    const buttonRead = document.createElement("button");
    button.classList.add("buttonAdd");
    buttonRead.classList.add("buttonRead");
    const read = document.createElement("p");
    container.append(divBlock);
    divBlock.append(id);
    divBlock.append(h4);
    divBlock.append(p1);
    divBlock.append(p2);
    divBlock.append(p3);
    divBlock.append(p4);
    divBlock.append(p5);
    divBtn.append(button);
    divBtn.append(buttonRead);
    divBlock.append(read);
    divBlock.append(divBtn);
    divBtn.classList.add("btn");
    button.classList.add("btnClass");
    buttonRead.classList.add("btnClass");

    button.textContent = "Remove Book";
    buttonRead.textContent = "toggle Read";
    id.textContent = idNumber;
    h4.textContent = elem.titleText;
    p1.textContent = elem.authorText;
    p2.textContent = elem.yearText;
    p3.textContent = elem.languageText;
    p4.textContent = elem.numberofpagesText;
    p5.textContent = "read:true";
    button.dataset.id = idNumber;
    button.addEventListener("click", function () {
      bookArray = bookArray.filter((id) => id !== this.dataset.id);
      divBlock.remove();
    });
    buttonRead.addEventListener("click", function () {
      console.log("button read clicked");
      if (p5.textContent === "read:true") {
        p5.textContent = "read:false";
      } else if (p5.textContent === "read:false") {
        p5.textContent = "read:true";
      }
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

// search for a book
const getBook = document.getElementById("bookSearch");
const btnSearch = document.getElementById("btnSearch");
let inputValue = "";
// getBook.addEventListener("keyup", function (e) {
//   inputValue = e.target.value;
//   let book = bookArray.find((elem) => elem.titleText == inputValue);
//   console.log(book);
// });

console.log(inputValue);
btnSearch.addEventListener("click", function () {
  const valueOfInput = getBook.value;
  let book = bookArray.find((elem) => {
    return (
      elem.titleText.toLowerCase().trim() ==
        valueOfInput.toLowerCase().trim() ||
      elem.authorText.toLowerCase().trim() == valueOfInput.toLowerCase().trim()
    );
  });
  if (book) {
    container.remove;
    container.innerHTML - "";
    container.innerHTML = `<div class="divSearch"> <h4>${book.titleText} </h4> <p>${book.authorText}</p> <p>${book.yearText} </p> <p>${book.languageText} </p>
  <p>${book.numberofpagesText}</p> </div>`;
  } else {
    container.innerHTML = `<h4> Book not found <h4>`;
  }
});
