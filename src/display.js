import {
  jobDone,
  editTask,
  getDaysRemaining,
  openEditForm,
} from './taskManipulation';

// function to display task info to the DOM
const displayTasks = (filterValue = 'noProjectSelected') => {
  const taskContainer = document.getElementById('taskContainer');
  taskContainer.innerHTML = '';
  let taskList = JSON.parse(localStorage.getItem('taskList'));
  taskList.forEach((task, index) => {
    // create the div that holds the task
    if (filterValue == 'noProjectSelected') {
      createLargeTaskItems(task, index);
    } else if (task.category == filterValue) {
      createLargeTaskItems(task, index);
    }
  });
};

const createLargeTaskItems = (task, index) => {
  const taskItem = document.createElement('div');
  taskItem.classList.add('taskItem');
  taskItem.id = `${index}`;
  taskContainer.appendChild(taskItem);
  // add title to task container
  const taskTitle = document.createElement('p');
  taskTitle.innerHTML = task.taskTitle; // title goes here
  taskItem.appendChild(taskTitle);
  // add description to task container
  const taskDescription = document.createElement('p');
  taskDescription.innerHTML = task.taskDescription; // description goes here
  taskItem.appendChild(taskDescription);
  // show date
  const daysRemaining = document.createElement('p');
  daysRemaining.innerHTML = `You have ${getDaysRemaining(
    task.date
  )} days remaining to complete this task`;
  const labelDate = document.createElement('p');
  labelDate.innerHTML = 'The due date for this task is:';
  taskItem.appendChild(labelDate);
  const taskDate = document.createElement('p');
  taskDate.innerHTML = task.date;
  taskItem.appendChild(taskDate);
  taskItem.appendChild(daysRemaining);
  // add the task control buttons
  // done button
  const done = document.createElement('div');
  done.classList.add('btn_done');
  done.innerHTML = 'Done';
  done.addEventListener('click', (e) => {
    jobDone(e);
  });
  taskItem.appendChild(done);
  // edit button
  const edit = document.createElement('div');
  edit.classList.add('btn_done');
  edit.innerHTML = 'Edit';
  edit.addEventListener('click', (e) => {
    let taskToEdit = e.srcElement.parentElement.id;
    localStorage.setItem('taskToEdit', JSON.stringify(taskToEdit));
    openEditForm();
  });
  taskItem.appendChild(edit);
  // show category
  const category = document.createElement('p');
  category.innerHTML = task.category;
  taskItem.appendChild(category);
};

const FilterProjects = (filterValue) => {
  displayTasks(filterValue);
};

const populateProjectOptions = (projectOptionsViewer) => {
  let projectList = JSON.parse(localStorage.getItem('projectList'));
  let options = projectList
    .map(
      (projectList) =>
        `<option value=${projectList.toLowerCase()}>${projectList}</option>`
    )
    .join('\n');
  projectOptionsViewer.innerHTML = options;
};

export { displayTasks, FilterProjects, populateProjectOptions };
