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
// contact form and display functions
function initAddressBookUI() {
  var form = document.getElementById('contact-form');

  // submission form
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Getting values from the form fields
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var email = document.getElementById('email').value.trim();
    var address = document.getElementById('address').value.trim();

    // Creating a new Contact object using the constructor
    var newContact = new Contact(firstName, lastName, phone, email, address);

    // Adding the contact to the address book
    myAddressBook.addContact(newContact);

    // Resetting the form fields
    form.reset();

    // Refreshing the contact list on the page
    renderContactList();
  });
  // Back to List button for contact details
  var closeDetailBtn = document.getElementById('close-detail-btn');
  closeDetailBtn.addEventListener('click', function() {
    document.getElementById('contact-detail-card').style.display = 'none';
    // Showing the contact list and form again
    document.querySelector('#section-address .card:nth-child(1)').style.display = '';
    document.querySelector('#section-address .card:nth-child(2)').style.display = '';
  });
  renderContactList();
}

// Display all contacts on the page
function renderContactList() {
  var container = document.getElementById('contact-list');
  var contacts = myAddressBook.getAllContacts();

  // If there are no contacts, show an empty message
  if (contacts.length === 0) {
    container.innerHTML = '<p class="empty-message">No contacts added yet. Add your first contact above.</p>';
    return;
  }
    // list of contacts as HTML
  var html = '';
  for (var i = 0; i < contacts.length; i++) {
    html = html + '<div class="contact-item" onclick="showContactDetail(' + i + ')">';
    html = html + '<span class="contact-name">' + contacts[i].fullName() + '</span>';
    html = html + '<span class="contact-phone">' + (contacts[i].phone || 'No phone') + '</span>';
    html = html + '</div>';
  }

  container.innerHTML = html;
}
// Showing the full details of a single contact
function showContactDetail(index) {
  var contact = myAddressBook.getContactByIndex(index);
  if (!contact) return;

  // Hiding list and form
  document.querySelector('#section-address .card:nth-child(1)').style.display = 'none';
  document.querySelector('#section-address .card:nth-child(2)').style.display = 'none';

  // detail view
  var detailContent = document.getElementById('contact-detail-content');
  var html = '';
  html = html + '<div class="detail-row"><div class="detail-label">Name</div><div class="detail-value">' + contact.fullName() + '</div></div>';
  html = html + '<div class="detail-row"><div class="detail-label">Phone</div><div class="detail-value">' + (contact.phone || 'Not provided') + '</div></div>';
  html = html + '<div class="detail-row"><div class="detail-label">Email</div><div class="detail-value">' + (contact.email || 'Not provided') + '</div></div>';
  html = html + '<div class="detail-row"><div class="detail-label">Address</div><div class="detail-value">' + (contact.address || 'Not provided') + '</div></div>';

  // delete button
  html = html + '<button class="btn-danger" style="margin-top:1rem;" onclick="deleteContactAndGoBack(' + index + ')">Delete This Contact</button>';

  detailContent.innerHTML = html;
  // detail card
  document.getElementById('contact-detail-card').style.display = '';
}
//Deleting a contact
function deleteContactAndGoBack(index) {
  myAddressBook.deleteContact(index);
  renderContactList();
  document.getElementById('contact-detail-card').style.display = 'none';
  document.querySelector('#section-address .card:nth-child(1)').style.display = '';
  document.querySelector('#section-address .card:nth-child(2)').style.display = '';
}
// Set up the task form and display functions
function initTodoUI() {
  var form = document.getElementById('task-form');
  // Handle form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the page from refreshing

    // Get the task description from the input
    var description = document.getElementById('taskDescription').value.trim();
    // Create a new Task object using the constructor
    var newTask = new Task(description);
    // Add the task to the to-do list
    myToDoList.addTask(newTask);
    // Reset the form
    form.reset();
    // Refresh the task lists on the page
    renderTaskLists();
  });
  // Initial render
  renderTaskLists();
}
// Display all active and completed tasks
function renderTaskLists() {
  renderActiveTasks();
  renderCompletedTasks();
}
// Display only the active tasks
function renderActiveTasks() {
  var container = document.getElementById('task-list');
  var activeTasks = myToDoList.getActiveTasks();
  // If no active tasks, show empty message
  if (activeTasks.length === 0) {
    container.innerHTML = '<p class="empty-message">No tasks added yet. Add your first task above.</p>';
    return;
  }
  // Creating an active tasks
  var html = '';
  for (var i = 0; i < activeTasks.length; i++) {
    var originalIndex = myToDoList.getAllTasks().indexOf(activeTasks[i]);
    html = html + '<div class="task-item">';
    html = html + '<span class="task-text">' + activeTasks[i].description + '</span>';
    html = html + '<div class="task-actions">';
    html = html + '<button class="btn-success" onclick="completeTask(' + originalIndex + ')">Done</button>';
    html = html + '<button class="btn-danger" onclick="deleteTask(' + originalIndex + ')">Delete</button>';
    html = html + '</div>';
    html = html + '</div>';
  }
  container.innerHTML = html;
}
// completed tasks
function renderCompletedTasks() {
  var container = document.getElementById('completed-list');
  var section = document.getElementById('completed-section');
  var completedTasks = myToDoList.getCompletedTasks();
  if (completedTasks.length === 0) {
    section.style.display = 'none';
    return;
  }
  section.style.display = '';
  var html = '';
  for (var i = 0; i < completedTasks.length; i++) {
    var originalIndex = myToDoList.getAllTasks().indexOf(completedTasks[i]);
    html = html + '<div class="completed-item">';
    html = html + '<span>' + completedTasks[i].description + '</span>';
    html = html + '<button class="btn-danger" onclick="deleteTask(' + originalIndex + ')">Delete</button>';
    html = html + '</div>';
  }
  container.innerHTML = html;
}
// Marking a task as complete
function completeTask(index) {
  var task = myToDoList.getTaskByIndex(index);
  if (task) {
    task.markComplete();
    renderTaskLists();
  }
}
// Delete a task
function deleteTask(index) {
  myToDoList.deleteTask(index);
  renderTaskLists();
}