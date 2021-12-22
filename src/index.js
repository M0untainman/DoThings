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
  closeEditForm,
  openEditForm,
} from './taskManipulation.js';
import {
  displayTasks,
  FilterProjects,
  populateProjectOptions,
} from './display.js';

//dom declartations
const btn_add = document.getElementById('btn_add');
const btnClose = document.getElementById('btnClose');
const btnSubmit = document.getElementById('btnSubmit');
const title = document.getElementById('title');
const description = document.getElementById('description');
const date = document.getElementById('taskDate');
const btnFilterProject = document.getElementById('btnFilterProject');
const viewAll = document.getElementById('viewAll');
const btnNewProject = document.getElementById('btnNewProject');
const btnProjectClose = document.getElementById('btnProjectClose');
const btnProjectSubmit = document.getElementById('btnProjectSubmit');
const newProjectName = document.getElementById('newProjectName');
const btnResetProjectList = document.getElementById('btnResetProjectList');
let projectOptionsViewerStart = document.getElementById(
  'projectOptionsViewerStart'
);
let projectOptionsViewerForm = document.getElementById(
  'projectOptionsViewerForm'
);
let projectOptionsViewerEdit = document.getElementById(
  'projectOptionsViewerEdit'
);
const btneditClose = document.getElementById('btneditClose');
const btnEditSubmit = document.getElementById('btnEditSubmit');
let editTaskDate = document.getElementById('editTaskDate');
let editTitle = document.getElementById('editTitle');
let editDescription = document.getElementById('editDescription');

// event listeners
btn_add.addEventListener('click', () => {
  openForm();
});
btnClose.addEventListener('click', () => {
  closeForm();
});
btnSubmit.addEventListener('click', () => {
  addTask(
    title.value,
    description.value,
    date.value,
    projectOptionsViewerForm.value
  );
  title.value = '';
  description.value = '';
  closeForm();
});
btnFilterProject.addEventListener('click', () => {
  FilterProjects(projectOptionsViewerStart.value);
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
btneditClose.addEventListener('click', () => {
  closeEditForm();
});
btnEditSubmit.addEventListener('click', () => {
  console.log('edit called');
  editTask(
    editTitle.value,
    editDescription.value,
    editTaskDate.value,
    projectOptionsViewerEdit.value
  );
  editTitle.value = '';
  editDescription.value = '';
  closeEditForm();
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
  populateProjectOptions(projectOptionsViewerStart);
  populateProjectOptions(projectOptionsViewerForm);
  populateProjectOptions(projectOptionsViewerEdit);
};
initialize();
