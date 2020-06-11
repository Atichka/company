import '../pages/about.css';

const buttonOpen = document.querySelector('.open');
const buttonClose = document.querySelector('.close');
const blockComment = document.querySelector('.comment');
const data = document.querySelector('.data');

if (buttonOpen) {
  buttonOpen.addEventListener('click', openForm);
}

if (buttonClose) {
  buttonClose.addEventListener('click', closeForm);
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
