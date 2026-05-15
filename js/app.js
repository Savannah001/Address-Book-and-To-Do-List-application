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