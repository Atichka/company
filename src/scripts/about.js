import '../pages/about.css';

class CommentList {
  constructor(container) {
    this.container = container;
  }

  addComment(name) {
    const { commentElement } = new Comment(name);
    this.container.appendChild(commentElement);
  }
}

class Comment {
  constructor(name) {
    this.commentElement = this.create(name, date);
  }

  create(nameValue, dateValue) {
    const element = document.createRange().createContextualFragment(`<div class="company__item">
      <div class="comments__text">
        <h2 class="label">User</h2>
        <h2 class="label data">${date}</h2>
      </div>
      <textarea class="comments__input" rows="10" cols="100" name="text">${nameValue}</textarea>
    </div>`)
    return element;
  }
}

const buttonOpen = document.querySelector('.open');
const buttonClose = document.querySelector('.close');
const blockComment = document.querySelector('.comment');
const data = document.querySelector('.data');
const input = document.querySelector('.input');
const commentAdd = document.querySelector('.comment__add');
const comment = new CommentList(document.querySelector('.comments__container'));
const form = document.querySelector('.comment');

let nowDate = new Date();
let date = nowDate.getDate() + "." +(nowDate.getMonth()+1) + "." + nowDate.getFullYear();

if (commentAdd) {
  commentAdd.addEventListener('click', addComment);
}

if (buttonOpen) {
  buttonOpen.addEventListener('click', openForm);
}

if (buttonClose) {
  buttonClose.addEventListener('click', closeForm);
}

function addComment(event) {
  event.preventDefault();

  if (input.value=="") {
    alert("Поле '" + input.placeholder + "' не должно быть пустым!");
  } else {
    comment.addComment(form.elements.name.value, date);
    clearInput();
    closeForm();
  }
}

function clearInput() {
  input.value = "";
}

function openForm(event) {
  blockComment.style = 'display: block;';
}

function closeForm(event) {
  blockComment.style = 'display: none;';
}

window.addEventListener('load',function()
{
  let nowDate = new Date();
  let date = nowDate.getDate() + "." +(nowDate.getMonth()+1) + "." + nowDate.getFullYear();
  if (data) {
    data.textContent = date;
  }
});
