# 🍽️ Chuks Kitchen

### Nigerian Food Ordering Web Application (Frontend)

Chuks Kitchen is a responsive food ordering web application built with **React.js** and **Tailwind CSS**.  
The platform allows users to explore authentic Nigerian meals, browse by category, and interact with a modern restaurant-style interface.

This project demonstrates scalable frontend architecture, reusable components, responsive design, and clean state management practices.

---

## 🚀 Live Features

- ✅ Responsive landing (Welcome) page
- ✅ Explore/Menu page with dynamic category filtering
- ✅ Reusable meal card components
- ✅ Sticky category sidebar
- ✅ Scroll-to-top floating action button
- ✅ Authentication UI (Sign In / Sign Up)
- ✅ Clean routing with React Router
- ✅ Modern UI built with Tailwind CSS
- ✅ Component-based architecture

---

## 🛠️ Tech Stack

| Technology            | Purpose                     |
| --------------------- | --------------------------- |
| **React.js (Vite)**   | Frontend framework          |
| **Tailwind CSS**      | Styling & responsive design |
| **React Router DOM**  | Client-side routing         |
| **Lucide React**      | Icons                       |
| **JavaScript (ES6+)** | Application logic           |

---

## 📂 Project Structure

```bash
src/
│
├── components/
│   ├── ui/
│   │   └── ScrollToTopButton.jsx
│   ├── MealCard.jsx
│   ├── CategorySidebar.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Explore.jsx
│   ├── Welcome.jsx
│   ├── SignIn.jsx
│   └── SignUp.jsx
│
├── data/
│   └── meals.js
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone <repository-url>
cd chuks-kitchen
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Install Required Packages

If not already installed:

```bash
npm install react-router-dom
npm install lucide-react
```

---

### 4️⃣ Run Development Server

```bash
npm run dev
```

Application runs at:

```
http://localhost:5173
```

---

### 5️⃣ Build for Production

```bash
npm run build
```

Production-ready files will be generated in the `dist/` directory.

---

## 🧠 Architecture & Design Decisions

### 🔹 Component-Based Structure

Reusable components like:

- `MealCard`
- `CategorySidebar`
- `ScrollToTopButton`

This ensures scalability and maintainability.

---

### 🔹 Data Separation

All meal data is centralized in:

```
src/data/meals.js
```

This makes the application backend-ready.

---

### 🔹 Dynamic Category Filtering

Category selection updates state using:

```js
useState();
```

Meals are filtered dynamically using:

```js
Array.filter();
```

---

### 🔹 Responsive Layout

Tailwind breakpoints used:

- `sm:` Mobile
- `md:` Tablet
- `lg:` Desktop

Sticky sidebar implemented using:

```css
position: sticky;
```

---

### 🔹 Scroll-to-Top Button

- Appears after 300px scroll
- Uses `useEffect` for event listener
- Smooth scrolling behavior
- Proper cleanup to prevent memory leaks

---

## 📱 Pages & Routes

| Route      | Description       |
| ---------- | ----------------- |
| `/`        | Welcome Page      |
| `/explore` | Menu Listing Page |
| `/signin`  | Login Page        |
| `/signup`  | Registration Page |

Routing handled using:

```jsx
react - router - dom;
```

---

## 🎯 Key Learning Outcomes

This project demonstrates:

- React component architecture
- State management with hooks
- Responsive UI development
- Clean folder organization
- Event handling & lifecycle management
- UI replication from design mockups
- Production-level frontend structure

---

## 🚀 Future Improvements

- 🛒 Add global cart using Context API
- 🔐 Implement real authentication (JWT/Firebase)
- 🔎 Add search functionality
- 📦 Backend integration (Node.js / Express)
- 💳 Payment integration
- 🌙 Dark mode toggle
- 🎞️ Framer Motion animations
- 📊 Admin dashboard

---

## 🏁 Conclusion

Chuks Kitchen is a scalable and modern React application designed following industry best practices.

The project serves as:

- A frontend internship assessment
- A portfolio-ready React project
- A foundation for a full-stack food ordering platform

---

## 👨‍💻 Author

Developed as part of a frontend internship project.

---

Live Demo Url: https://chuks-food.netlify.app/
