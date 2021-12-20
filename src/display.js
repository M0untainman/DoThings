import { jobDone } from "./add";
import { editTask } from "./add";

// function to display task info to the DOM
export default function displayTasks() {
    const taskContainer = document.getElementById('taskContainer');
    taskContainer.innerHTML = '';
    let taskList = JSON.parse(localStorage.getItem('taskList'))
    taskList.forEach((task, index) => {
            const taskItem = document.createElement('div');
            taskItem.classList.add('taskItem');
            taskItem.id = `${index}`
            taskContainer.appendChild(taskItem);
            const taskTitle = document.createElement('p')
            taskTitle.innerHTML = task.taskTitle; // title goes here
            taskItem.appendChild(taskTitle);
            const taskDescription = document.createElement('p')
            taskDescription.innerHTML = task.taskDescription; // description goes here
            taskItem.appendChild(taskDescription); 
            const done = document.createElement('div')
            done.classList.add('btn_done');
            done.innerHTML = 'Done'
            done.addEventListener('click', (e) => {
                jobDone(e)
            });
            taskItem.appendChild(done);  
            const edit = document.createElement('div')
            edit.classList.add('btn_done');
            edit.innerHTML = 'Edit'
            edit.addEventListener('click', (e) => editTask(e));
            taskItem.appendChild(edit);     
    });
   
}