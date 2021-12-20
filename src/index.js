import './style.css'
import addTask from './add.js';

//dom declartations
const btn_add = document.getElementById('btn_add');
let taskTitle = document.getElementById('task_title');
let taskDescription = document.getElementById('task_description');

// event listeners
btn_add.addEventListener('click', () => {
    addTask(taskTitle.value, taskDescription.value);
    taskTitle.value ='';
    taskDescription.value = '';

})

const display = (() =>{
    console.log('fix display')
})()

