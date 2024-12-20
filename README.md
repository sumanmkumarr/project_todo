# Todo Redux App

A modern Todo application built with React, Redux Toolkit, and TypeScript. The app includes both a Todo List and an Employee List feature, demonstrating state management and API integration.

Live Demo: [Todo Redux App](https://glittery-macaron-6a1018.netlify.app)

## Features

- ✅ Todo List Management (Add, Edit, Delete, Toggle)
- 👥 Employee List with API Integration
- 🎨 Clean UI with Tailwind CSS
- 🔄 State Management with Redux Toolkit
- 📱 Responsive Design

## Tech Stack

- React
- TypeScript
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Vite
- Axios

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd todo-redux-app
```

3. Install dependencies:
```bash
npm install
```

## Running the Application

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── TodoList/
│   │   ├── AddTodo.tsx
│   │   ├── TodoItem.tsx
│   │   └── TodoList.tsx
│   └── EmployeeList/
│       └── EmployeeList.tsx
├── store/
│   ├── slices/
│   │   ├── todoSlice.ts
│   │   └── employeeSlice.ts
│   └── index.ts
├── types/
│   └── index.ts
├── App.tsx
└── main.tsx
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run preview` - Previews the production build
- `npm run lint` - Runs ESLint for code quality

## Deployment

The application is deployed on Netlify. You can view it at:
[https://glittery-macaron-6a1018.netlify.app](https://glittery-macaron-6a1018.netlify.app)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

