````md
# 🛒 PratikCart — Full Stack E-Commerce Platform

![React](https://img.shields.io/badge/Frontend-React-blue?style=for-the-badge&logo=react)
![Django](https://img.shields.io/badge/Backend-Django-darkgreen?style=for-the-badge&logo=django)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue?style=for-the-badge&logo=postgresql)
![TailwindCSS](https://img.shields.io/badge/UI-TailwindCSS-38BDF8?style=for-the-badge&logo=tailwindcss)
![JWT](https://img.shields.io/badge/Auth-JWT-black?style=for-the-badge)

A modern full-stack **E-Commerce Web Application** built using **React + Django REST Framework + PostgreSQL**.

This project includes:

- 🔐 JWT Authentication
- 🛍️ Product Management
- 🛒 Cart System
- 📦 Order Placement
- 👤 User Authentication
- ⚡ REST API Integration
- 🎨 Responsive Tailwind UI
- 🖼️ Product Image Upload Support

---

# ✨ Features

## 👤 Authentication

- User Registration
- User Login
- JWT Token Authentication
- Protected Routes
- Logout Functionality

---

## 🛍️ Product System

- Product Listing
- Product Details Page
- Category Management
- Dynamic Product Rendering
- Product Images from Django Media

---

## 🛒 Cart System

- Add to Cart
- Remove from Cart
- Update Quantity
- Dynamic Total Price Calculation
- Persistent Backend Cart Storage

---

## 📦 Order System

- Checkout Page
- Address & Phone Collection
- Cash on Delivery Support
- Order Creation API
- Cart Auto Clear after Order

---

# 🏗️ Tech Stack

## Frontend

- React.js
- React Router DOM
- Tailwind CSS
- Context API
- Vite

## Backend

- Django
- Django REST Framework
- Simple JWT
- PostgreSQL

---

# 📂 Project Structure

```bash
E-commerce-Project/
│
├── backend/
│   ├── backend/
│   ├── store/
│   ├── media/
│   ├── manage.py
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── utils/
│   │   └── App.jsx
│   │
│   ├── public/
│   └── package.json
│
└── README.md
````

---

# ⚙️ Backend Setup (Django)

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Pratik3186/E-commerce-site.git
cd E-commerce-site
```

---

## 2️⃣ Create Virtual Environment

```bash
python -m venv env
```

### Activate Environment

#### Linux / Mac

```bash
source env/bin/activate
```

#### Windows

```bash
env\Scripts\activate
```

---

## 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 4️⃣ PostgreSQL Setup

Create PostgreSQL Database:

```sql
CREATE DATABASE ecommerce;
```

---

## 5️⃣ Create `.env` File

Inside `backend/`

```env
DB_NAME=ecommerce
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_HOST=localhost
DB_PORT=5432
SECRET_KEY=your_secret_key
DEBUG=True
```

---

## 6️⃣ Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

---

## 7️⃣ Create Superuser

```bash
python manage.py createsuperuser
```

---

## 8️⃣ Run Backend Server

```bash
python manage.py runserver
```

Backend will run on:

```bash
http://127.0.0.1:8000/
```

---

# ⚛️ Frontend Setup (React)

## 1️⃣ Go to Frontend

```bash
cd frontend
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Create `.env` File

```env
VITE_DJANGO_BASE_URL=http://127.0.0.1:8000
```

---

## 4️⃣ Start Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173/
```

---

# 🔐 JWT Authentication APIs

| Endpoint              | Method | Description   |
| --------------------- | ------ | ------------- |
| `/api/register/`      | POST   | Register User |
| `/api/token/`         | POST   | Login User    |
| `/api/token/refresh/` | POST   | Refresh Token |

---

# 🛒 Cart APIs

| Endpoint            | Method | Description     |
| ------------------- | ------ | --------------- |
| `/api/cart/`        | GET    | Get User Cart   |
| `/api/cart/add/`    | POST   | Add Product     |
| `/api/cart/remove/` | POST   | Remove Product  |
| `/api/cart/update/` | POST   | Update Quantity |

---

# 📦 Order APIs

| Endpoint              | Method | Description  |
| --------------------- | ------ | ------------ |
| `/api/orders/create/` | POST   | Create Order |

---

# 🖼️ Screenshots

## 🏠 Home Page

Add your screenshot here.

```md
![Home](./screenshots/home.png)
```

---

## 🛍️ Product Detail Page

```md
![Product](./screenshots/product.png)
```

---

## 🛒 Cart Page

```md
![Cart](./screenshots/cart.png)
```

---

## 📦 Checkout Page

```md
![Checkout](./screenshots/checkout.png)
```

---

# 🚀 Future Improvements

* ❤️ Wishlist Feature
* 💳 Razorpay / Stripe Integration
* 📱 Mobile Responsive Optimization
* 🔎 Search & Filter
* ⭐ Product Reviews
* 📊 Admin Dashboard
* 📦 Order Tracking
* 🔔 Notifications

---

# 🧠 Learning Outcomes

Through this project I learned:

* Full Stack Development
* REST API Development
* JWT Authentication
* React Context API
* State Management
* PostgreSQL Integration
* Django Media Handling
* Protected Routes
* API Integration Between React & Django

---

# 👨‍💻 Author

## Pratik Kumar

* 🎓 BTech CSE Student
* 💻 Full Stack Developer
* 🚀 Passionate About Building Scalable Applications

### GitHub

[https://github.com/Pratik3186](https://github.com/Pratik3186)

---

# ⭐ Support

If you like this project:

* 🌟 Star this repository
* 🍴 Fork this repository
* 🧑‍💻 Contribute to improve features

---

# 📜 License

This project is licensed under the MIT License.

---

# 🔥 Final Preview

> A complete modern E-Commerce platform using React, Django REST Framework, PostgreSQL, JWT Authentication, Tailwind CSS, and Context API.

Built with ❤️ by Pratik Kumar

```
```
