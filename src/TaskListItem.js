class TaskListItem {
  constructor(description) {
    this.description = description;
  }

  render() {
    const li = document.createElement('li');
    li.textContent = this.description;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(deleteButton);
    return li;
  }
}
