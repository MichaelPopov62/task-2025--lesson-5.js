export let tasks = [];

export function addTask(text) {
  const newTask = { id: Date.now(), text };
  tasks.push(newTask);
  return newTask;
}

export function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
}
