// Business Logic
// Creates a new contact with personal details
function Contact(firstName, lastName, phone, email, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phone = phone || '';
  this.email = email || '';
  this.address = address || '';
}