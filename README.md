# 🚀 Star Wars Characters Explorer

A simple frontend application that consumes the SWAPI (Star Wars API) to display a list of characters with pagination.

🔗 Live demo: https://desafio-frontend-swapi.vercel.app

---

## 📌 About the project

This project was built as a frontend challenge with the goal of practicing API consumption, state management, and user experience.

The app displays Star Wars characters in a paginated list, showing basic information like name and gender.

Even though it's a simple application, I focused on making the experience smooth and intuitive.

---

## ⚙️ Tech stack

- React
- JavaScript
- Vite
- CSS
- Vercel (deployment)

---

## ✨ Features

- List of characters from SWAPI
- Pagination with next/previous controls
- Disabled buttons when navigation is not possible
- Initial loading state
- Smooth transition (blur effect) between page changes

---

## 🧠 Some decisions I made

### Pagination behavior

I made sure users can't navigate to invalid pages:
- No "previous" button on the first page
- No "next" button on the last page

---

### User experience

Instead of changing content abruptly, I added a blur transition when switching pages.

This helps avoid a “hard cut” and makes the interaction feel smoother.

Also, a loading message is shown when data is being fetched.

---

## 🚧 What I would improve

If I had more time, I would:

- Add a loading indicator during page transitions (not only on initial load)
- Improve layout with a more complete structure (e.g., navbar and footer)
- Handle API errors with better user feedback
- Add automated tests

---

## ▶️ Running locally

```bash
git clone https://github.com/guilhermetavarees/desafio-frontend-swapi
cd desafio-frontend-swapi

npm install
npm run dev