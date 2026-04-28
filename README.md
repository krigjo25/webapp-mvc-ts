# User Management System (TypeScript & Vite)
A professional web application designed for efficient administration of user data, providing a full suite of CRUD (Create, Read, Update, Delete) capabilities within a modular TypeScript environment.

---

## Overview
This system serves as a centralized directory for managing user profiles (names and email addresses). It is built with TypeScript for enhanced type safety and maintainability, and utilizes Vite for a modern, fast development experience. The project emphasizes clean code separation using the MVC pattern.

## Core Features
* **TypeScript Support**: Full type safety across models, views, and controllers.
* **Vite Integration**: Extremely fast development server and optimized production builds.
* **Dynamic Search and Filtering**: Instant filtering of the user database based on name or email input.
* **Comprehensive Record Management**: Full support for creating new entries, updating existing data, and viewing the current directory.
* **Secure Deletion Workflow**: Includes a dedicated confirmation step to prevent accidental removal of user data.
* **State-Driven Navigation**: A unified navigation menu that manages the application state across different administrative views.

## Technical Setup

### Prerequisites
* [Node.js](https://nodejs.org/) (latest LTS recommended)
* [npm](https://www.npmjs.com/)

### Installation
1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```

### Available Commands
* **Development Server**:
  ```bash
  npm run dev
  ```
* **Build for Production**:
  ```bash
  npm run build
  ```
* **Preview Production Build**:
  ```bash
  npm run preview
  ```
* **Compile TypeScript**:
  ```bash
  npm run compile
  ```

## Architecture
The project follows a strict Model-View-Controller (MVC) pattern:
* **Source Files**: All source logic is located in `statics/ts/`.
* **Compiled Files**: TypeScript is compiled into `statics/js/` (ignored by git).
* **Model (`statics/ts/modal.ts`)**: Defines types and holds the application state.
* **Views**: Functional modules (`statics/ts/*/view.ts`) that render HTML based on the state.
* **Controllers**: Handle user interactions (`statics/ts/*/controller.ts`) and update the Model.

---
*Efficient data administration through modern TypeScript and Vite.*
