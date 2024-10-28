document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const taskForm = document.getElementById("create-task-form");
  const taskDescriptionInput = document.getElementById("new-task-description");
  const taskListContainer = document.getElementById("tasks");

  const renderApp = () => {
    taskListContainer.innerHTML = "";
    taskListContainer.appendChild(taskList.render());
  };

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const description = taskDescriptionInput.value.trim();
    if (description) {
      taskList.addTask(description);
      taskDescriptionInput.value = "";
      renderApp();
    }
  });

  renderApp();
});
