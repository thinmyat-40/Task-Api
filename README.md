# Task Management System

A web-based Task Management System developed using **React.js** for the frontend and **Laravel** for the backend. This application allows users to create, view, update, and delete tasks efficiently.

## Technologies Used

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Bootstrap / Tailwind CSS (if used)
- Axios / Fetch API

### Backend

- PHP
- Laravel
- MySQL
- RESTful API

### Development Tools

- Visual Studio Code
- Git & GitHub
- Postman
- XAMPP

## Features

- Add new tasks
- View all tasks
- Edit existing tasks
- Delete tasks
- Update task status
- Manage task information
- Store task data in MySQL database

## Project Structure

```text
Task-Management-System/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── backend/
    ├── app/
    ├── routes/
    ├── database/
    ├── resources/
    ├── .env
    └── artisan
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Backend Setup (Laravel)

Go to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
composer install
```

Create the environment file:

```bash
cp .env.example .env
```

Generate application key:

```bash
php artisan key:generate
```

Configure your database in the `.env` file:

```env
DB_DATABASE=task_management
DB_USERNAME=root
DB_PASSWORD=
```

Run database migrations:

```bash
php artisan migrate
```

Start Laravel server:

```bash
php artisan serve
```

Backend URL:

```text
http://127.0.0.1:8000
```

### 3. Frontend Setup (React)

Open another terminal and go to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start React development server:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

## Database

This project uses MySQL to store task information.

Example task fields:

- id
- title
- description
- status
- created_at
- updated_at

## API Integration

The React frontend communicates with the Laravel backend through RESTful APIs to perform CRUD operations.

| Method | Description             |
| ------ | ----------------------- |
| GET    | Retrieve all tasks      |
| POST   | Create a new task       |
| PUT    | Update an existing task |
| DELETE | Delete a task           |

## Author

**Your Name**

## License

This project is developed for educational and learning purposes.
