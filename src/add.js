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
    taskArray.forEach((task) => {
        const taskContainer = document.getElementById('taskContainer');
        const taskItem = document.createElement('div');
        taskItem.classList.add('taskItem');
        taskContainer.appendChild(taskItem);
        const taskTitle = document.createElement('p')
        taskTitle.innerHTML = task.taskTitle; // title goes here
        taskItem.appendChild(taskTitle);
        const taskDescription = document.createElement('p')
        taskDescription.innerHTML = task.taskDescription; // description goes here
        taskItem.appendChild(taskDescription); 
    });
    
}
    