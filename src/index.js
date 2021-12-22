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
let category = document.getElementById('categoryView');
const btnFilterProject = document.getElementById('btnFilterProject');
const viewAll = document.getElementById('viewAll');

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
  FilterProjects(categoryView.value);
});
viewAll.addEventListener('click', () => {
  displayTasks();
});

// initialize program
const display = () => {
  displayTasks();
};
display();
