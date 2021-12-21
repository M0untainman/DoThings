import { jobDone, editTask, getDaysRemaining } from "./taskManipulation";

// function to display task info to the DOM
export default function displayTasks() {
  const taskContainer = document.getElementById("taskContainer");
  taskContainer.innerHTML = "";
  let taskList = JSON.parse(localStorage.getItem("taskList"));
  taskList.forEach((task, index) => {
    // create the div that holds the task
    const taskItem = document.createElement("div");
    taskItem.classList.add("taskItem");
    taskItem.id = `${index}`;
    taskContainer.appendChild(taskItem);
    // add title to task container
    const taskTitle = document.createElement("p");
    taskTitle.innerHTML = task.taskTitle; // title goes here
    taskItem.appendChild(taskTitle);
    // add description to task container
    const taskDescription = document.createElement("p");
    taskDescription.innerHTML = task.taskDescription; // description goes here
    taskItem.appendChild(taskDescription);
    // show date
    const daysRemaining = document.createElement("p");
    daysRemaining.innerHTML = `You have ${getDaysRemaining(
      task.date
    )} days remaining to complete this task`;
    const labelDate = document.createElement("p");
    labelDate.innerHTML = "The due date for this task is:";
    taskItem.appendChild(labelDate);
    const taskDate = document.createElement("p");
    taskDate.innerHTML = task.date;
    taskItem.appendChild(taskDate);
    taskItem.appendChild(daysRemaining);
    // add the task control buttons
    // done button
    const done = document.createElement("div");
    done.classList.add("btn_done");
    done.innerHTML = "Done";
    done.addEventListener("click", (e) => {
      jobDone(e);
    });
    taskItem.appendChild(done);
    // edit button
    const edit = document.createElement("div");
    edit.classList.add("btn_done");
    edit.innerHTML = "Edit";
    edit.addEventListener("click", editTask);
    taskItem.appendChild(edit);
  });
}
