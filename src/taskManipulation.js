import displayTasks from './display.js';
import differenceInDays from 'date-fns/differenceInDays';
import isDate from 'date-fns/isDate';
import parseISO from 'date-fns/parseISO';

const addTask = (title, description, date, category) => {
  // pulls all required funcitons together to give user expected result
  let newTask = taskFactory(title, description, date, category);
  let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
  taskList.push(newTask);
  localStorage.setItem('taskList', JSON.stringify(taskList));
  displayTasks();
};

// factory function for creating tasks
const taskFactory = (taskTitle, taskDescription, date, category) => {
  return { taskTitle, taskDescription, date, category };
};

const jobDone = (e) => {
  //function to remove a book from library
  let taskList = JSON.parse(localStorage.getItem('taskList'));
  let taskToRemove = e.srcElement.parentElement.id;
  taskList.splice(taskToRemove, 1);
  localStorage.setItem('taskList', JSON.stringify(taskList));
  displayTasks();
};

const editTask = (e) => {
  //function to remove a book from library
  let taskList = JSON.parse(localStorage.getItem('taskList'));
  let taskToEdit = e.srcElement.parentElement.id;
  taskList[taskToEdit].taskTitle = 'changed title';
  taskList[taskToEdit].taskDescription = 'changed description';
  localStorage.setItem('taskList', JSON.stringify(taskList));
  displayTasks();
};

const getDaysRemaining = (duedate) => {
  let today = new Date();
  let daysRemaining = differenceInDays(parseISO(duedate), today);
  return daysRemaining;
};

const openForm = () => {
  document.getElementById('popupForm').style.display = 'block';
};
const closeForm = () => {
  document.getElementById('popupForm').style.display = 'none';
};

const openProjectForm = () => {
  document.getElementById('ProjectPopup').style.display = 'block';
};
const closeProjectForm = () => {
  document.getElementById('ProjectPopup').style.display = 'none';
};

const addProject = (project) => {
  let projectList = JSON.parse(localStorage.getItem('projectList'));
  console.log(projectList);
  projectList.push(project);
  console.log(`the new list is ${projectList}`);
  localStorage.setItem('projectList', JSON.stringify(projectList));
};

const resetProjectList = () => {
  let projectList = JSON.parse(localStorage.getItem('projectList'));
  projectList = ['work', 'chores', 'fitness'];
  localStorage.setItem('projectList', JSON.stringify(projectList));
};

export {
  jobDone,
  editTask,
  getDaysRemaining,
  openForm,
  closeForm,
  addTask,
  openProjectForm,
  closeProjectForm,
  addProject,
  resetProjectList,
};
