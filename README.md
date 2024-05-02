# iNotebook

Your notes secured in the cloud. A full-stack web application built using MERN stack, specifically `React.js` as frontend and `Express.js` and `MongoDB` as backend.

## Table of Contents

- [Folder structure](#folder-structure)
- [Installation](#installation)
- [Defining environment variables](#defining-environment-variables)
- [Run the development environment](#run-the-development-environment)

## Folder structure
```bash
inotebook
├── backend
│   ├── ...
│   └── ...
├── public
│   └── ...
├── src
│   ├── ...
│   └── ...
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Installation

1. Clone the repository:

    ```bash
    git clone git@github.com:Samya-S/inotebook.git
    ```
    `Make sure you have SSH keys setup in your machine`

2. Navigate to the project directory:

    ```bash
    cd inotebook
    ```

3. Install dependencies:

   In the parent directory
   ```bash
   npm i
   ```
   
   In the backend directory
   ```bash
   cd backend
   npm i
   ```
   `Make sure to have nodejs and npm installed`

## Defining environment variables

1. In the parent directory:

    ```bash
    REACT_APP_BACKEND_HOSTING_DOMAIN = '<backend hosting domain url>'
    ```
1. In the backend directory:

    ```bash
    MONGO_URI = '<mongo db url>'
    ```

## Run the development environment

### To run both together

1. Navigate to the parent directory

2. Use the following command to run:

    ```bash
    npm run both
    ```

### To run the frontend separately: 

1. Navigate to the parent directory

2. Use the following command to run:

    ```bash
    npm start
    ```

### To run the backend separately: 

1. Navigate to the backend directory:

    ```bash
    cd backend
    ```
    
2. Use the following command to run:

    ```bash
    nodemon index.js
    ```
   or alternatively
    ```bash
    npm start
    ```
