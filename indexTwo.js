const Book = function (id, title, author, language, year, numOfPages) {
  if (!title || !author || !language || !year || !numOfPages) {
    return "......";
  }
  this.id = id;
  this.title = title;
  this.author = author;
  this.language = language;
  this.year = year;
  this.numOfPages = numOfPages;
};
let arrayOfBooks = [];
const id = Math.round(Math.random() * 12345);
console.log(id);
const book = new Book(
  id,
  "Introduction to Algorithms",
  "Thomas H Cormen",
  "English",
  2009,
  1312,
);

const bookOne = new Book(
  id,
  "Eloquent JavaScript",
  "Marijn Haverbeke",
  "English",
  2018,
  472,
);

const bookTwo = new Book(
  id,
  "The Pragmatic Programmer",
  "Andrew Hunt",
  "English",
  1999,
  352,
);

const bookThree = new Book(
  id,
  "Introduction to java programming",
  "Y. Daniel Liang",
  "English",
  2012,
  1249,
);
const addBookToLibrary = function (book) {
  arrayOfBooks.push(book);
  return arrayOfBooks;
};

addBookToLibrary(book);
addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
addBookToLibrary(bookThree);

// add the book the DOM
function returnElement(element) {
  return document.querySelector(element);
}

const title = returnElement(".title");
const author = returnElement(".author");
const language = returnElement(".language");
const year = returnElement(".year");
const numOfPages = returnElement(".numOfPages");
const container = returnElement(".container");
const card = returnElement(".card");
arrayOfBooks.forEach(
  (element) =>
    (container.innerHTML += `<div class="newClassDiv"><p>${element.title}</p>
    <p>${element.author}</p>
    <p>${element.language}</p>
    <p>${element.year}</p>
    <p>${element.numOfPages}</p></div>`),
);

const newClassDiv = document.querySelector(".newClassDiv");
newClassDiv.classList.add("card");
newClassDiv.classList.add("border-card");

// function createHTMLcard(title, author, language, year, numberofpages) {
//   return `
//     <div class="card">
//       <h4 class="title"</h4>
//       <p class="author">author</p>
//       <p class="language">language</p>
//       <p class="year">year</p>
//       <p class="numOfPages">numberofpages</p>
//     </div>
//   `;
// }

//
