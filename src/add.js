export default function addTask(title, description) {
    console.log(title);
    console.log(description);
    let newTask = taskFactory(title, description)

    // DOM stuff
    const taskContainer = document.getElementById('taskContainer');
    const taskItem = document.createElement('div');
    taskItem.classList.add('taskItem');
    taskContainer.appendChild(taskItem);
    const taskTitle = document.createElement('p')
    taskTitle.innerHTML = newTask.taskTitle;
    taskItem.appendChild(taskTitle);
    const taskDescription = document.createElement('p')
    taskDescription.innerHTML = newTask.taskDescription;
    taskItem.appendChild(taskDescription);
}

const taskFactory = (taskTitle, taskDescription) =>{
    return {taskTitle, taskDescription}
}
