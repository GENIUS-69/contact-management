# 📇 Contact Management Web App (MERN Stack)

A simple **Contact Management Web Application** built using the **MERN stack** as part of a web developer interview task.  
The application allows users to submit contact details, store them in MongoDB, and view/manage submitted contacts in real time.

---

## 🚀 Tech Stack

### Frontend

- React (Vite)
- React Router DOM
- Tailwind CSS (v4)
- JavaScript (ES Modules)
- Fetch API

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

---

## 🎯 Project Objective

The goal of this project is to demonstrate:

- MERN stack fundamentals
- REST API design
- Client-side validation
- Database integration
- Clean project structure
- Real-time UI updates without page reload

UI polish is secondary to **working functionality and clean logic**.

---

## ✨ Features

### ✅ Core Features

- Contact form with validation
- Store contact data in MongoDB
- Fetch and display contacts
- Responsive UI
- RESTful API architecture
- React state management using `useState`

### ⭐ Bonus Features

- Delete contact
- Success messages
- Reusable components
- Routing with React Router
- Environment variable configuration

---

## 🧾 Contact Fields

| Field | Required | Validation |
|-------|----------|------------|
| Name  | ✅ Yes | Non-empty |
| Email | ✅ Yes | Valid email format |
| Phone | ✅ Yes | Non-empty |
| Message | ❌ No | Optional |

---

## 🗂️ Project Structure

```
contact-management-app/
│
├── backend/
│ ├── controllers/
│ │ └── contact.controller.js
│ ├── models/
│ │ └── contact.model.js
│ ├── routes/
│ │ └── contact.routes.js
│ ├── config/
│ │ └── db.js
│ ├── server.js
│ ├── .env
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Header.jsx
│ │ │ ├── ContactForm.jsx
│ │ │ └── ContactList.jsx
│ │ ├── pages/
│ │ │ ├── Home.jsx
│ │ │ ├── AddContact.jsx
│ │ │ └── Contacts.jsx
│ │ ├── services/
│ │ │ └── api.js
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── .env
│ └── package.json
│
├── .gitignore
└── README.md
```

---

## 🔌 Backend API Endpoints

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/contacts` | Create new contact |
| GET | `/api/contacts` | Fetch all contacts |
| DELETE | `/api/contacts/:id` | Delete a contact |

---

## 🌐 Environment Variables

### Backend (`backend/.env`)

```
env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```