import './style.css';
import {
  jobDone,
  editTask,
  openForm,
  closeForm,
  addTask,
} from './taskManipulation.js';
import { displayTasks, FilterProjects } from './display.js';

//dom declartations
const btn_add = document.getElementById('btn_add');
const btnClose = document.getElementById('btnClose');
const btnSubmit = document.getElementById('btnSubmit');
const title = document.getElementById('title');
const description = document.getElementById('description');
const date = document.getElementById('taskDate');
const category = document.getElementById('category');
const btnFilterProject = document.getElementById('btnFilterProject');

// event listeners
btn_add.addEventListener('click', () => {
  openForm();
});
btnClose.addEventListener('click', () => {
  closeForm();
});
btnSubmit.addEventListener('click', () => {
  addTask(title.value, description.value, date.value, category.value);
  title.value = '';
  description.value = '';
  closeForm();
});
btnFilterProject.addEventListener('click', () => {
  FilterProjects();
});

// initialize program
const display = () => {
  displayTasks();
};
display();
