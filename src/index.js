import "./index.css";

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
    <h2 class="company__name">${nameValue}</h2>
    <p class="company__comment">Текст текст</p>
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

buttonSend.addEventListener('click', sendForm);
companyAdd.addEventListener('click', visibleForm);

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
  // const inputs = Array.from(form.elements);

  // inputs.forEach((elem) => {
  //   if (elem.className == "company__input") {
  //     if (!elem.value) {
  //       alert("Поле '" + elem.placeholder + "' не должно быть пустым!");
  //     }
  //   }
  // })
}

// function checkVal () {
//   if (input.value!="") {
//     buttonSend.setAttribute('disabled', '');
//     buttonSend.classList.add('company__button-add_disabled');
//     alert("c");
//   } else {
//     buttonSend.removeAttribute('disabled');
//     buttonSend.classList.remove('company__button-add_disabled');
//   }
// }

// form.addEventListener('input', checkVal);

// window.addEventListener('load', checkVal);
