# 🌿 KeenKeeper — Friendship Management App

## 📌 Overview

**KeenKeeper** is a modern friendship management web application that helps users stay connected with the people who matter most. It allows users to track interactions, manage relationships, and maintain meaningful connections through a clean and intuitive interface.

This project is built following a structured UI design and focuses on responsiveness, usability, and simplicity.

---

## 🚀 Live Demo

🔗 https://your-live-site-link.com

---

## 🛠️ Technologies Used

* ⚛️ React.js (Vite)
* 🔀 React Router DOM
* 🎨 Tailwind CSS
* 🌼 DaisyUI
* 📊 Recharts
* 🔔 React Hot Toast (or any toast library)

---

## ✨ Key Features

### 🧭 Navigation System

* Clean and responsive Navbar
* Active route highlighting
* Icon-based navigation (Home, Timeline, Stats)

---

### 🏠 Home Page

* Beautiful banner section with CTA button
* Summary cards showing friendship insights
* Dynamic friend list loaded from JSON
* Responsive 4-column grid layout (desktop)

---

### 👫 Friend Management

* Display realistic friend profiles
* Status-based color indicators:

  * 🔴 Overdue
  * 🟡 Almost Due
  * 🟢 On Track
* Tags for categorizing relationships
* Clickable cards → Navigate to detailed view

---

### 👤 Friend Details Page

* Two-column responsive layout
* Detailed friend information:

  * Profile, bio, email, tags
* Stats cards:

  * Days Since Contact
  * Goal
  * Next Due Date
* Quick actions:

  * 📞 Call
  * 💬 Text
  * 🎥 Video
* Timeline updates on interaction
* Toast notifications for actions

---

### 📜 Timeline Page

* Displays all interaction history
* Each entry includes:

  * Date
  * Interaction type (Call/Text/Video)
  * Title
* 🔍 Filter functionality:

  * View by Call / Text / Video

---

### 📊 Friendship Analytics (Stats Page)

* Pie chart visualization using Recharts
* Shows distribution of:

  * Calls
  * Texts
  * Video interactions

---

### ⚙️ Additional Features

* ⏳ Loading spinner while fetching data
* 🚫 Custom 404 Not Found page
* 🔔 Toast notifications for user actions
* 🔄 Page reload support (no routing errors)
* 📱 Fully responsive (Mobile, Tablet, Desktop)

---

## 📂 Project Structure

```
keen-keeper/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── data/
│   │   └── friends.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

---

## 📋 Sample Friend Data

```json
{
  "id": 1,
  "name": "Emma Wilson",
  "picture": "https://randomuser.me/api/portraits/women/44.jpg",
  "email": "emma.wilson@example.com",
  "days_since_contact": 10,
  "status": "almost due",
  "tags": ["work", "close friend"],
  "bio": "Worked together at my first job. We still talk about career growth and life updates.",
  "goal": 14,
  "next_due_date": "2026-05-01"
}
```

---

## ⚡ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/keenkeeper.git

# Go to project folder
cd keen-keeper

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 🌍 Deployment

You can deploy this project using:

* Vercel
* Netlify
* Firebase Hosting

Make sure:

* All routes are properly handled
* No errors on reload

---

## 🎯 Project Goals

* Practice React fundamentals
* Build a multi-page application
* Work with dynamic JSON data
* Implement UI from design (pixel-perfect)
* Improve responsive design skills

---

## 👨‍💻 Author

**Abdullah Al Saba**

* GitHub: https://github.com/abdullah-alsaba

---

## 📄 License

This project is for educational purposes only.

---

## ⭐ Final Notes

This project focuses on:

* Clean UI implementation
* Functional interaction tracking
* Real-world use case (relationship management)

Feel free to fork, improve, and expand it 🚀
