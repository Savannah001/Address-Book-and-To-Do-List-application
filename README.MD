# My Task App - Address Book & To Do List

A web application for managing contacts and daily tasks. Built with JavaScript using constructors and prototypes.

**Author:** Danson Karanja  
**Live Site:** https://savannah001.github.io/Address-Book-and-To-Do-List-application/? 
**Repository:** https://github.com/Savannah001/Address-Book-and-To-Do-List-application


## Description

This project combines two productivity tools into one simple interface:

1. **Address Book** — Add, view, and delete contacts with first name, last name, phone number, email, and physical address.
2. **To Do List** — Add tasks, mark them as complete, and delete them. Completed tasks move to a separate section.

The application demonstrates object-oriented JavaScript using constructor functions and prototype methods. All business logic is separated from UI logic.

## Technologies Used

- HTML
- CSS (Flexbox, CSS Grid, responsive design)
- JavaScript (constructors, prototypes, DOM manipulation)


## Setup Instructions
2. Open `index.html` in any modern web browser.

---

## Project Structure
TO-DO-LIST/

├── index.html # Main HTML file with both sections

├── css/

│ └── style.css # All styling

├── js/

│ ├── address-book.js # Contact & AddressBook constructors/prototypes

│ ├── to-do.js # Task & ToDoList constructors/prototypes

│ └── app.js # UI logic — connects business logic to the DOM

└── README.md # Project documentation & tests


### Address Book - Contact Constructor

**Test 1: Create a contact with all properties**
Input: new Contact("Jane", "Muthoni", "0712 345 678", "jane@email.com", "45 Kenyatta Ave, Nairobi")
Expected Output:

firstName: "Jane"

lastName: "Muthoni"

phone: "0712 345 678"

email: "jane@email.com"

address: "45 Kenyatta Ave, Nairobi"

## Known Issues

- Data is stored only in memory (JavaScript variables). Refreshing the page clears all contacts and tasks. 
- No edit functionality — contacts and tasks can only be added, viewed, and deleted.
## License

MIT License — feel free to use and modify this code for your own learning.

Copyright &copy; 2026 Danson karanja