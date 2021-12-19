export default function addTask(title, description) {
    // bebugging checks
    console.log(title);
    console.log(description);
    // pulls all required funcitons together to give user expected result
    let newTask = taskFactory(title, description)
    // get list from local storage
    let taskList = JSON.parse(localStorage.getItem('taskList')) || [];
    taskList.push(newTask);
    displayTasks(taskList);
    localStorage.setItem('taskList', JSON.stringify(taskList));
}

// factory function for creating tasks
const taskFactory = (taskTitle, taskDescription) =>{
    return {taskTitle, taskDescription}
}

// function to display task info to the DOM
const displayTasks = (taskArray) => {
    const taskContainer = document.getElementById('taskContainer');
    taskContainer.innerHTML = '';
    taskArray.forEach((task, index) => {
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
        done.addEventListener('click', (e) => jobDone(e));
        taskItem.appendChild(done);
    });

const jobDone = (e) => {
    //function to remove a book from library
    console.log('jobdone started')
    let taskList = JSON.parse(localStorage.getItem('taskList'))
    let taskToRemove = e.srcElement.parentElement.id;
    taskList.splice(taskToRemove, 1);
    localStorage.setItem('taskList', JSON.stringify(taskList));
    displayTasks(taskList);
}
    
}
    