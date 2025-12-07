# Contact Management App (MongoDB & Mongoose) 📇

A full-stack web application to manage contact information. Built with **Node.js**, **Express**, and **MongoDB**, this project demonstrates CRUD operations with a NoSQL database, input validation, and session management.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-Templating-ff69b4?style=for-the-badge)

## 🌟 Key Features

* **CRUD with Mongoose:** Create, Read, Update, and Delete contacts using Mongoose ODM.
* **Data Validation:** Server-side validation using `express-validator` to ensure data integrity (e.g., checking for duplicate names or invalid emails).
* **Session & Flash Messages:** Provides user feedback (success/error messages) using `connect-flash` and `express-session`.
* **Templating:** Dynamic views rendered using **EJS**.
* **Method Override:** Supports PUT and DELETE methods in HTML forms.

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (via Mongoose ODM)
* **Frontend:** EJS (Embedded JavaScript), Bootstrap
* **Utilities:** Express Validator, Method Override, Cookie Parser

## 🚀 How to Run

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/SultanNabil2002/contact-app-mongoose.git](https://github.com/SultanNabil2002/contact-app-mongoose.git)
    cd contact-app-mongoose
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Database:**
    Ensure you have MongoDB installed locally or update the connection string in `app.js` / `config` to your MongoDB Atlas URI.

4.  **Run the App:**
    ```bash
    node app.js
    # or
    nodemon app.js
    ```
    Access the app at `http://localhost:3000`.

---
*Created by Sultan Nabil based on WPU Tutorial Series.*
