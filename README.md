# Frontend Mentor - Todo App

This repository contains my solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). The application enables users to manage tasks efficiently with features such as adding, completing, deleting, and reordering tasks via drag-and-drop. It also includes filters for task status, a light/dark mode toggle, and ensures responsiveness across devices.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Links](#links)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Features

- **Add Todo**: Users can add new todo items.
- **Complete Todo**: Users can mark todo items as completed.
- **Delete Todo**: Users can delete individual todo items.
- **Reorder Todos**: Users can reorder todo items via drag-and-drop.
- **Filter Todos**: Users can filter todo items by all, active, or completed status.
- **Toggle All Todos**: Users can toggle the completion status of all todo items.
- **Clear Completed**: Users can clear all completed todo items.
- **Light/Dark Mode**: Users can switch between light and dark themes.

## Screenshots

![Desktop View Dark](https://github.com/user-attachments/assets/2d3a0afc-aa22-4545-b289-10fd8bdebd3c)
![Desktop View Light](https://github.com/user-attachments/assets/7618eb32-9a62-4ee9-9543-f63f14a1b058)

## Technologies Used

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Redux Toolkit**: For state management.
- **RTK Query**: For data fetching and caching.
- **Tailwind CSS**: For styling.
- **Vite**: For development and build tooling.
- **Dnd-kit**: For drag-and-drop functionality.

### Backend

- **Node.js**: JavaScript runtime.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM for MongoDB.
- **dotenv**: For environment variable management.
- **cors**: For enabling Cross-Origin Resource Sharing.
- **morgan**: For HTTP request logging.

## Project Structure

### Client

- `src/`
  - `App.jsx`: Main application component.
  - `components/`: Contains React components like `CreateTodo`, `TodoContainer`, `TodoHeader`, `TodoList`, `TodoListFooter`, and `TodoListTask`.
  - `services/`: Contains API service definitions using RTK Query.
  - `stores/`: Contains Redux store configuration.
  - `assets/`: Contains images and other static assets.
  - `index.css`: Global CSS styles.
  - `main.jsx`: Entry point for the React application.

### Server

- `api/`: Contains the main entry point for the Express server.
- `config/`: Contains database configuration.
- `controllers/`: Contains controller functions for handling API requests.
- `models/`: Contains Mongoose models.
- `routes/`: Contains route definitions.
- `.env`: Environment variables for server configuration.

## Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```

2. Install dependencies for the client:
   ```sh
   cd client
   npm install
   ```
3. Install dependecies for the server:
   ```sh
   cd ../server
   npm install
   ```

## Running the Application

### Development

1. Start the backend server:

```sh
  cd server
  npm run dev
```

2. Start the frontend development server:

```sh
  cd ../client
  npm run dev
```

### Production

1. Build the frontend:

```sh
  cd client
  npm run build
```

2. Start the backend server:

```sh
  cd ../server
  npm start
```

## Environment Variables

Create a .env file in both the client and server directories with the following variables:

### Client

```ini
    VITE_NODE_ENV=development
    VITE_API_URL=http://localhost:5000
    VITE_API_URL_PROD=https://todo-app-backend-ruby.vercel.app
```

### Server

```ini
    NODE_ENV=development
    PORT=5000
    FRONTEND_URL=http://localhost:5173
    FRONTEND_URL_PROD=https://todoappbysayaliakbar.netlify.app
    MONGO_URI_DEV=mongodb://127.0.0.1:27017/todoapp
    MONGO_URI_PROD=mongodb+srv://<username>:<password>@prod-cluster.dv35n.mongodb.net/todoapp?retryWrites=true&w=majority&appName=prod-cluster
```

## Links

- Live Site Url: [https://todoappbysayaliakbar.netlify.app](https://todoappbysayaliakbar.netlify.app)
- Backend API Documentation: []()

## Author

- GitHub: [https://github.com/sayaliakbar](https://github.com/sayaliakbar)
- LinkedIn: [https://www.linkedin.com/in/sayaliakbar](https://www.linkedin.com/in/sayaliakbar)

## Acknowledgements

I would like to express my gratitude to the Frontend Mentor community for providing the challenge and resources that inspired this project. Special thanks to [Dnd-kit](https://dndkit.com/) for their excellent drag-and-drop library, and to the developers of RTK Query for simplifying data fetching in Redux.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
