import './style.css';
import {
  jobDone,
  editTask,
  openForm,
  closeForm,
  addTask,
  addProject,
  openProjectForm,
  closeProjectForm,
  resetProjectList,
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
const btnNewProject = document.getElementById('btnNewProject');
const btnProjectClose = document.getElementById('btnProjectClose');
const btnProjectSubmit = document.getElementById('btnProjectSubmit');
const newProjectName = document.getElementById('newProjectName');
const btnResetProjectList = document.getElementById('btnResetProjectList');

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

btnNewProject.addEventListener('click', () => {
  openProjectForm();
});

btnProjectClose.addEventListener('click', () => {
  closeProjectForm();
});
btnProjectSubmit.addEventListener('click', () => {
  addProject(newProjectName.value);
  newProjectName.value = '';
});

btnResetProjectList.addEventListener('click', () => {
  resetProjectList();
});

// initialize program
const initialize = () => {
  displayTasks();
  let projectList = JSON.parse(localStorage.getItem('projectList')) || [
    'work',
    'chores',
    'fitness',
  ];
  localStorage.setItem('projectList', JSON.stringify(projectList));
};
initialize();
