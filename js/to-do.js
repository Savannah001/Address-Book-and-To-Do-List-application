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