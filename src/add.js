import displayTasks from './display.js';

export default function addTask(title, description) {
    // pulls all required funcitons together to give user expected result
    let newTask = taskFactory(title, description)
    // get list from local storage
    let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    taskList.push(newTask);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    displayTasks();
}

// factory function for creating tasks
const taskFactory = (taskTitle, taskDescription) =>{
    return {taskTitle, taskDescription}
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

export {jobDone, editTask}
    