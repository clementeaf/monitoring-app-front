## Monitoring Frontend

    Overview
    This is the frontend application for the Monitoring system, which provides information about repositories and their commits. It is built using React and Vite.

## Getting Started

    Follow the instructions below to set up and run the project locally.

## Prerequisites

    - Node.js (>=14.17.0)
    - npm (>=7.0.0) or Yarn (>=1.22.11)
    - Installation
    - Clone the repository:
        bash: git clone https://github.com/your-username/monitoring-front.git
    - cd monitoring-front
    - Install the dependencies:
            - Using npm:
                 bash: npm install
            - Using Yarn:
                 bash: yarn
    - Configuration:
        Create a .env file in the root directory of the project and set the following environment variables:
        REACT_APP_BACKEND_URL: http://localhost:3000.
    - Running the Development Server: To start the development server, run:
        Using npm:
            bash: npm run dev
        Using Yarn:
            bash: yarn dev
    
    The development server will start, and you can access the application in your browser at http://localhost:4000 (or the specified URL).

## Features

    -   View repository information.
    -   Display a list of commits for a repository.
    -   Real-time updates using WebSocket for new commits.
    -   Technologies:
            -   React: A JavaScript library for building user interfaces.
            -   Vite: A fast build tool and development server.
            -   React Query: Data fetching and state management library.
            -   React Router: Declarative routing for React.
            -   Socket.io-client: Real-time, bidirectional, and event-based communication.

    -   Contributing: If you would like to contribute to this project, please follow these guidelines:
            -   Fork the repository.
            -   Create a new branch for your feature: git checkout -b feature-name.
            -   Implement your feature or bug fix.
            -   Run tests if available.
            -   Commit your changes: git commit -m 'Add some feature'.
            -   Push to your branch: git push origin feature-name.
            -   Submit a pull request.
    
    
    License:
    -   This project is licensed under the MIT License.

    Contact
    -   If you have any questions or need assistance, please contact:
        Clemente Arriagada
        carriagdafalcone@gmail.com
