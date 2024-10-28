class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    const task = new TaskListItem(description);
    this.tasks.push(task);
  }

  render() {
    const ul = document.createElement('ul');
    this.tasks.forEach(task => {
      ul.appendChild(task.render());
    });
    return ul;
  }
}
