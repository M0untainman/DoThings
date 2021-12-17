import './style.css'
import addTask from './add.js';

//dom declartations
const btn_add = document.getElementById('btn_add');
let taskText = document.getElementById('taskText');

// event listeners
btn_add.addEventListener('click', () => {
    addTask(taskText.value);
    taskText.value ='';

})

