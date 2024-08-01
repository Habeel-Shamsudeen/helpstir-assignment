# Helpstir Assignment - Todo List Application

## Overview

This Todo List application is built using Next.js with TypeScript. It includes the following features:

- Create Task: Allows users to add new tasks.
- Update Task: Allows users to edit existing tasks.
- Mark as Done: Allows users to mark tasks as completed.
- Search Tasks: Implements a search functionality to filter tasks.
- Expandable List: Displays tasks in an expandable list format, showing a description and a timestamp of the last update when expanded.

The application uses a dummy JSON file as a data repository and implements Server-Side Rendering (SSR) for enhanced performance. URL parameters are utilized to manage search queries and filters, ensuring the application is easily adaptable for future enhancements.

## System Design

### Frontend

- **React with Next.js**: Used for building the user interface and handling SSR.
- **TypeScript**: Provides type safety and helps in catching errors during development.
- **Tailwind CSS**: Used for styling components to ensure scoped and maintainable styles.

### Backend

- **Dummy JSON Data**: A `todos.json` file is used as the data source for tasks.

## Implementation

### Folder Structure

- **app**: Contains the main application files including the layout and main page.
- **components**: Contains the UI components such as AddTask, Appbar, TodoCard, and UpdateTask.
- **hooks**: Contains custom React hooks.
- **lib**: Contains utility functions and helper libraries.
- **public**: Contains static files such as the `todos.json` file.
- **types**: Contains TypeScript type definitions.

### Key Files

- `app/page.tsx`: The main page that handles displaying the todo list, adding tasks, updating tasks, and searching tasks.
- `components/AddTask.tsx`: Component for adding a new task.
- `components/Appbar.tsx`: Component for the application header.
- `components/todo-card.tsx`: Component for displaying individual todo tasks.
- `components/updateTask.tsx`: Component for updating an existing task.
- `public/todos.json`: The dummy JSON data file used as the data source.

## Setup and Run the Application

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Habeel-Shamsudeen/helpstir-assignment.git
    cd helpstir-assignment
    ```

2. Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. Open your browser and navigate to `http://localhost:3000`.

### Building and Running for Production

1. Build the application:
    ```bash
    npm run build
    # or
    yarn build
    ```

2. Start the production server:
    ```bash
    npm start
    # or
    yarn start
    ```

### Configuration

- `next.config.js`: Next.js configuration file.
- `.eslintrc.json`: ESLint configuration file.
- `tsconfig.json`: TypeScript configuration file.

## Future Enhancements

- Implement a real backend with a database for persistent data storage.
- Add user authentication to manage tasks for multiple users.
- Improve the UI/UX with better styling and responsiveness.
- use state management library for better state management.


## Contact

For any questions or feedback, please contact [habeel8075@gmail.com].

