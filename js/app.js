// Connects the Address Book and To Do List and business logic to the HTML interface.

//one address book and one to-do list for the entire app
var myAddressBook = new AddressBook();
var myToDoList = new ToDoList();
// Switch between Address Book and To Do List
function initTabs() {
  var tabAddress = document.getElementById('tab-address');
  var tabTodo = document.getElementById('tab-todo');
  var sectionAddress = document.getElementById('section-address');
  var sectionTodo = document.getElementById('section-todo');
  // Address Book tab
  tabAddress.addEventListener('click', function() {
    tabAddress.classList.add('active');
    tabTodo.classList.remove('active');
    sectionAddress.classList.add('active');
    sectionTodo.classList.remove('active');
  });
  // To Do List tab
  tabTodo.addEventListener('click', function() {
    tabTodo.classList.add('active');
    tabAddress.classList.remove('active');
    sectionTodo.classList.add('active');
    sectionAddress.classList.remove('active');
  });
}