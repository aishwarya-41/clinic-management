Clinic Management System

Project Description
The Clinic Management System is a web-based application that facilitates communication between doctors and receptionists. The system allows doctors to examine patient details and receptionists to assign tokens, create charges, and generate billing advice. The project is developed using HTML, CSS, JavaScript, and Firebase.


Features
Doctor Dashboard
Allows doctors to log in and view patient details including name, email, prescription, and token.
Logout functionality to return to the main page.


Receptionist Dashboard
Allows receptionists to log in, assign tokens, and create charges for patients.
Displays a list of patients with their details.
Generates billing advice based on the receptionist's input.

Authentication Tests
Login Functionality: Verified that both doctors and receptionists can log in using their credentials. Checked for error messages with invalid credentials.
Logout Functionality: Ensured users can log out, and verified they are redirected to the login page.


Patient Management Tests
Patient Information Input: Confirmed that receptionists can input patient names, emails, and prescriptions, and generate tokens successfully.
Patient List Display: Checked that the patient list dynamically updates with newly added patients, showing all relevant details.


Billing Management Tests
Bill Generation: Ensured receptionists can generate bills with patient names, charges, status, and date. Verified that the bills appear correctly in the list.
Bill Status Update: Tested the functionality to change the status of bills from "unpaid" to "paid." Ensured the update is reflected immediately in the UI.


Data Handling Tests
Database Operations: Verified all Firebase Firestore operations (adding patients, retrieving patient and bill data, updating bill status) are functioning correctly.
Error Handling: Ensured appropriate error messages are displayed for database operation failures.


UI/UX Tests
Responsive Design: Checked that the interface is responsive and works well on various screen sizes.
User Interface Elements: Ensured all buttons, inputs, and displays are styled correctly and enhance user experience.
Accessibility: Confirmed that form inputs and buttons are accessible and navigable using a keyboard.

Technologies Used
- Frontend: HTML, CSS, JavaScript
- Backend: Firebase
- Version Control: Git, GitHub

  Setup
To set up the project locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/aishwarya-41/clinic-management.git
   cd clinic-management

To run this code, I used visual studio code.
