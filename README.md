# JobSprint

JobSprint is a modern, full-stack web application designed to help users track their job applications efficiently. Built with the MERN stack (MongoDB, Express, React, Node.js), it offers a robust platform for managing job search activities, visualizing progress, and staying organized during the recruitment process.

## Features

-   **Job Tracking**: Add, edit, and delete job applications with detailed information (company, position, status, job type).
-   **Status Management**: Track applications through various stages: 'Pending', 'Interview', 'Declined'.
-   **Visual Analytics**: insightful charts and statistics to monitor your application progress over time.
-   **Secure Authentication**: Robust user registration and login system using JWT (JSON Web Tokens) and HTTP-only cookies.
-   **Responsive Design**: A fully responsive user interface built with React and Styled Components for a seamless experience on desktop and mobile.
-   **User Profile**: Manage user details and settings.

## Tech Stack

**Frontend:**
-   **React**: UI library for building interactive interfaces.
-   **Vite**: Next-generation frontend tooling for fast builds.
-   **Styled Components**: CSS-in-JS for component-level styling.
-   **Recharts**: Composable charting library for React components.
-   **React Query (@tanstack/react-query)**: Powerful asynchronous state management.
-   **React Router**: Declarative routing.

**Backend:**
-   **Node.js**: JavaScript runtime environment.
-   **Express**: Fast, unopinionated web framework for Node.js.
-   **MongoDB**: NoSQL database for flexible data storage.
-   **Mongoose**: ODM library for MongoDB and Node.js.
-   **JWT**: Secure authentication mechanism.

## Getting Started

### Prerequisites

-   Node.js (v14 or higher recommended)
-   npm or yarn
-   MongoDB Atlas account (or local MongoDB instance)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/rohanbhardwaj2005/JobSprint.git
    cd JobSprint
    ```

2.  **Install Dependencies**
    Install dependencies for both the root (server) and client.
    ```bash
    npm run setup-project
    ```
    *Alternatively:*
    ```bash
    npm install
    cd client && npm install
    ```

3.  **Environment Configuration**
    Create a `.env` (or `config.env`) file in the root directory and add the following variables:
    ```env
    NODE_ENV=development
    PORT=5100
    MONGO_URL=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    JWT_LIFETIME=1d
    CLOUD_NAME=your_cloudinary_name
    CLOUD_API_KEY=your_cloudinary_key
    CLOUD_API_SECRET=your_cloudinary_secret
    ```

### Running the App

**Development Mode**
Run both the backend and frontend concurrently:
```bash
npm run dev
```
-   Server runs on `http://localhost:5100`
-   Client runs on `http://localhost:5173` (or similar)

**Production Build**
```bash
cd client
npm run build
```

## Deployment

The project is configured for deployment on **Vercel**.

1.  **Push** your code to a GitHub repository.
2.  **Import** the project into Vercel.
3.  **Environment Variables**: Ensure all variables from your `.env` file are added to the Vercel project settings.
4.  **Deploy**: Vercel will automatically detect the configuration in `vercel.json` and deploy both the serverless backend and the static frontend.
