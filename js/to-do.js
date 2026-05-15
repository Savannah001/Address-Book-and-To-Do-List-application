//The task javascript file
//Creating new task with a description
function Task(description) {
  this.description = description;
  this.completed = false; // All new tasks start as incomplete
}
//Marking a task as completed and viceversa
Task.prototype.markComplete = function() {
  this.completed = true;
};
Task.prototype.markIncomplete = function() {
  this.completed = false;
};
//Manage collection of tasks
function ToDoList() {
  this.tasks = [];
}
//Adding task to the list
ToDoList.prototype.addTask = function(task) {
  this.tasks.push(task);
};
//Returning all tasks both completed and incompleted
ToDoList.prototype.getAllTasks = function() {
  return this.tasks;
};
//returning incomplete tasks
ToDoList.prototype.getActiveTasks = function() {
  var active = [];
  for (var i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i].completed === false) {
      active.push(this.tasks[i]);
    }
  }
  return active;
};
//Returning completed tasks
ToDoList.prototype.getCompletedTasks = function() {
  var completed = [];
  for (var i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i].completed === true) {
      completed.push(this.tasks[i]);
    }
  }
  return completed;
};
ToDoList.prototype.getTaskByIndex = function(index) {
  if (index >= 0 && index < this.tasks.length) {
    return this.tasks[index];
  }
  return null;
};
//Deleting  a task
ToDoList.prototype.deleteTask = function(index) {
  if (index >= 0 && index < this.tasks.length) {
    this.tasks.splice(index, 1);
    return true;
  }
  return false;
};
ToDoList.prototype.taskCount = function() {
  return this.tasks.length;
};