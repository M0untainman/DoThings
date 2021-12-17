export default function addTask(text) {
    console.log(text);
    const taskContainer = document.getElementById('taskContainer');
    const taskItem = document.createElement('div');
    taskItem.classList.add('taskItem');
    taskContainer.appendChild(taskItem);
    const taskText = document.createElement('p')
    taskText.innerHTML = text;
    taskItem.appendChild(taskText);
    



}