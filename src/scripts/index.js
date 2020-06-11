import '../pages/index.css';

class CompanyList {
  constructor(container) {
    this.container = container;
  }

  addCard(name) {
    const { cardElement } = new Company(name);
    this.container.appendChild(cardElement);
  }
}

class Company {
  constructor(name) {
    this.cardElement = this.create(name);
  }

  create(nameValue) {
    const element = document.createRange().createContextualFragment(`<div class="company__item">
    <h2 class="company__title"><a class="company__name" href="./about.html">${nameValue}</a></h2>
    <p class="company__comment">Текст текст</p><input class="comments__input" name="name" type="text" placeholder="Коментарий" minlength='2' maxlength="100"
    required />
    </div>`)
    return element;
  }
}

const form = document.querySelector('.company__add');
const buttonSend = document.querySelector('.company__button-add');
const error = document.querySelector('.company__error');
const input = document.querySelector('.input');
const company = new CompanyList(document.querySelector('.company__container'));
const companyAdd = document.querySelector('.company__button');

if(buttonSend) {
  buttonSend.addEventListener('click', sendForm);
}

if(companyAdd) {
  companyAdd.addEventListener('click', visibleForm);
}

function visibleForm () {
  form.classList.toggle('company__add_disabled');
}

function clearInput() {
  const inputs = Array.from(form.elements);

  inputs.forEach((elem) => {
    elem.value = "";
  })
}

function sendForm (event) {
  event.preventDefault();

  if (input.value=="") {
    alert("Поле '" + input.placeholder + "' не должно быть пустым!");
  } else {
    company.addCard(form.elements.name.value);
    clearInput();
  }
}
