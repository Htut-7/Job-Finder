# JobFinder

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/Firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)
![Firestore](https://img.shields.io/badge/Firestore-F6820D?style=for-the-badge&logo=firebase&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## Overview

JobFinder is a modern job search platform built with React and Firebase. The application allows users to browse job opportunities, search jobs by keywords or location, save favorite jobs, and manage bookmarked jobs with secure authentication.

The project focuses on responsive design, clean UI, and real-world React application architecture using custom hooks, protected routes, and Firestore integration.

---

## Features

- User Authentication with Firebase
- Protected Routes
- Search Jobs by:
  - Job Title
  - Company Name
  - Location
- Save / Bookmark Jobs
- Remove Saved Jobs
- Toast Notifications
- Responsive Design
- Pagination
- Hero Section Search
- Footer Quick Search Categories
- Firestore Database Integration

---

## Technologies Used

- React.js
- React Router DOM
- Firebase Authentication
- Firestore Database
- React Toastify
- React Icons
- CSS3
- Arbeitnow Job API

---

## Project Structure

```bash
src/
│
├── components/
├── pages/
├── hooks/
├── Context/
├── Router/
├── firebase/
└── css/
```

---

## Authentication

Users can:
- Register an account
- Login securely
- Access protected pages
- Save bookmarked jobs
- Logout from the application

---

## Bookmark System

Authenticated users can:
- Save jobs to Firestore
- View saved jobs
- Remove bookmarked jobs instantly

---

## Search Functionality

Users can search jobs by:
- Title
- Company Name
- Location

Quick search categories are also available in the footer:
- Remote Jobs
- Full Time
- Part Time
- Internships

---

## API

Job data is provided by the Arbeitnow Job API.

API URL:

https://www.arbeitnow.com/job-board-api

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Htut-7/Job-Finder.git
```

Move into the project folder:

```bash
cd jobfinder
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

## Firebase Setup

Create a Firebase project from the Firebase Console and enable:

- Authentication
- Firestore Database

Then create a `Firebase.js` configuration file inside:

```bash
src/firebase/Firebase.js
```

Add your Firebase configuration:

```js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

inside your Firebase configuration file.

---

## Author

Sithu Htut

---

## License

This project was created for educational and portfolio purposes.