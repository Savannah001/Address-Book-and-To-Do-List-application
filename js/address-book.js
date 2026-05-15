// Business Logic
// Creates a new contact with personal details
function Contact(firstName, lastName, phone, email, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phone = phone || '';
  this.email = email || '';
  this.address = address || '';
}
//Returns the fullname - first and last
Contact.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};
//address book constructor - to manage collection of books
function AddressBook() {
  this.contacts = [];
}
//Adding contact to the address book
AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
};
//Return all contacts in the address book
AddressBook.prototype.getAllContacts = function() {
  return this.contacts;
};
//Finding a specific contact
AddressBook.prototype.getContactByIndex = function(index) {
  if (index >= 0 && index < this.contacts.length) {
    return this.contacts[index];
  }
  return null;
};
//deleting a contact by their index position
AddressBook.prototype.deleteContact = function(index) {
  if (index >= 0 && index < this.contacts.length) {
    this.contacts.splice(index, 1);
    return true;
  }
  return false;
};