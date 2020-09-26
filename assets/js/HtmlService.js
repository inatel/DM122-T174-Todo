export default class HtmlService {

  constructor(todoService) {
    this.todoService = todoService;
    this.bindFormEvent();
    this.listTasks();
  }

  bindFormEvent() {
    const form = document.querySelector('form');
    form.addEventListener('submit', event => {
      event.preventDefault();
      console.log(form.item.value);
      form.reset();
    })
  }

  async listTasks() {
    const tasks = await this.todoService.getAll();
    console.log(tasks);
  }
}
