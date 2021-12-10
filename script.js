let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("A", "A", 10, true);
addBookToLibrary("B", "B", 10, true);
addBookToLibrary("C", "C", 10, true);

myLibrary.forEach(element => {
  document.querySelector("div.content").innerHTML += "element<br>";
});