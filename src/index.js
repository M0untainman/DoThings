import './style.css'
import addTask from './taskManipulation.js';
import {jobDone, editTask, openForm, closeForm} from './taskManipulation.js'
import displayTasks from './display.js';

//dom declartations
const btn_add = document.getElementById('btn_add');
const btnClose = document.getElementById('btnClose')
const btnSubmit = document.getElementById('btnSubmit')
const title = document.getElementById('title');
const description = document.getElementById('description')
const date = document.getElementById('taskDate')

// event listeners
btn_add.addEventListener('click', () => {
    openForm();
})
btnClose.addEventListener('click', () =>{
    closeForm();
})
btnSubmit.addEventListener('click', () => {
    addTask(title.value, description.value, date.value)
    title.value = '';
    description.value = '';
    closeForm();
})



const display = (() =>{
    displayTasks()
})()

