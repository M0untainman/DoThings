import displayTasks from './display.js';
import differenceInDays from 'date-fns/differenceInDays'
import isDate from 'date-fns/isDate'
import parseISO from 'date-fns/parseISO'

export default function addTask(title, description, date) {
    // pulls all required funcitons together to give user expected result
    let newTask = taskFactory(title, description, date)
    console.log(`title: ${title}  description: ${description}  date: ${date}`)
    // get list from local storage
    let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    taskList.push(newTask);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    displayTasks();
}

// factory function for creating tasks
const taskFactory = (taskTitle, taskDescription, date) =>{
    let today = new Date();
    let daysRemaining = differenceInDays(parseISO(date), today)
    return {taskTitle, taskDescription, date, daysRemaining}
}

const jobDone = (e) => {
    //function to remove a book from library
    let taskList = JSON.parse(localStorage.getItem('taskList'))
    let taskToRemove = e.srcElement.parentElement.id;
    taskList.splice(taskToRemove, 1);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    displayTasks();
}

const editTask = (e) => {
    //function to remove a book from library
    let taskList = JSON.parse(localStorage.getItem('taskList'))
    let taskToEdit = e.srcElement.parentElement.id;
    taskList[taskToEdit].taskTitle = 'changed title'
    taskList[taskToEdit].taskDescription = 'changed description'
    localStorage.setItem('taskList', JSON.stringify(taskList));
    displayTasks();
}


const openForm = () => {
    document.getElementById("popupForm").style.display = "block";
  }
const closeForm = () => {
    document.getElementById("popupForm").style.display = "none";
  }
export {jobDone, editTask, openForm, closeForm}
    