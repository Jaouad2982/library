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
form.addEventListener("submit", function (event) {
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

  let bookArray = [...arrOfBooks];

  container.innerHTML = bookArray.map(
    (elem) => `<div class="divCreated">
      <h4>${elem.titleText} </h4>
      <p>${elem.authorText} </p>
      <p>${elem.yearText} </p>
      <p>${elem.languageText} </p>
      <p>${elem.numberofpagesText}</p>
    </div> `,
  );

  console.log(bookArray);

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
