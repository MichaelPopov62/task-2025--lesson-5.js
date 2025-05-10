import { refs } from './refs.js';
import { tasks } from './tasks.js';

export function renderTasks() {
  refs.list.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.text;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Видалити';
    delBtn.addEventListener('click', () => {
      const event = new CustomEvent('delete-task', { detail: task.id });
      window.dispatchEvent(event);
    });

    li.appendChild(delBtn);
    refs.list.appendChild(li);
  });
}
