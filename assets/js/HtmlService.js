export default class HtmlService {

  constructor() {
    this.bindFormEvent();
  }

  bindFormEvent() {
    const form = document.querySelector('form');
    form.addEventListener('submit', event => {
      event.preventDefault();
      console.log(form.item.value);
      form.reset();
    })
  }
}
