import './style.css'
import addTask from './add.js';
import displayTasks from './display.js';

//dom declartations
const btn_add = document.getElementById('btn_add');
const btnClose = document.getElementById('btnClose')
const btnSubmit = document.getElementById('btnSubmit')
const title = document.getElementById('title');
const description = document.getElementById('description')

// event listeners
btn_add.addEventListener('click', () => {
    openForm();
})
btnClose.addEventListener('click', () =>{
    closeForm();
})
btnSubmit.addEventListener('click', () => {
    addTask(title.value, description.value)
    title.value = '';
    description.value = '';
    closeForm();
})

function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }

const display = (() =>{
    displayTasks()
})()

