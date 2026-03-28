# User Management System
A professional web application designed for efficient administration of user data, providing a full suite of CRUD (Create, Read, Update, Delete) capabilities within a modular JavaScript environment.

---

## Overview
This system serves as a centralized directory for managing user profiles (names and email addresses). It is engineered to provide a seamless administrative experience, allowing for real-time searching, data entry, and secure modification of records. The project emphasizes clean code separation, ensuring that data logic and user interface components remain distinct.

## Core Features
* **Dynamic Search and Filtering**: Instant filtering of the user database based on name or email input.
* **Comprehensive Record Management**: Full support for creating new entries, updating existing data, and viewing the current directory.
* **Secure Deletion Workflow**: Includes a dedicated confirmation step to prevent accidental removal of user data.
* **State-Driven Navigation**: A unified navigation menu that manages the application state across different administrative views.

## Installation and Technical Setup
The application is a client-side JavaScript solution that runs directly in any modern web browser without the need for additional backend dependencies.

### Prerequisites
* A modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari).

### Deployment Steps
1.  **Extract Assets**: Download and extract the project files, ensuring the statics/js directory structure remains intact.
2.  **Verify Components**: Ensure all modular scripts (search, create, modify, confirm) are located in their respective subdirectories.
3.  **Launch Application**: Open the index.html file in your browser to initialize the system and load the default dataset.

## Architecture
The project follows a strict Model-View-Controller (MVC) pattern to manage complexity:
* **Model (modal.js)**: Holds the application state, including the global user array and input field buffers.
* **View**: Separated into functional modules (searchView, createView, modifyView, confirmView) that render HTML based on the current state.
* **Controller**: Handles user interactions and updates the Model, ensuring data integrity before re-rendering the View.

## Contributors
Developed as a technical project focusing on state management and modular application design in JavaScript.

---
*Efficient data administration through modular design.*
