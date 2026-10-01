# React Tasks

A set of three React mini-projects demonstrating core React concepts: reusable components with props, state management with hooks, and list/conditional rendering.

## Tasks Overview

### Task 1: Reusable Component with Props
`ProductCard` component accepts `title`, `price`, and `category` as props and displays them in a styled box layout. Reused twice in `App.jsx` with different product data.

### Task 2: State & Event Handling (useState)
`LikeButton` component uses React's `useState` Hook with click event handling to dynamically increment and display a like count.

### Task 3: List Rendering & Conditional Rendering
`StudentList` component renders an array of student objects using `.map()` with unique `key` props, and conditionally displays a green "Pass" or red "Fail" status based on each student's score.

## Technologies Used

- React (Vite)
- Modern JavaScript (ES6): Destructuring, Arrow Functions, Hooks, Ternary/Conditional Rendering
- CSS (responsive design with media queries)

## Project Structure

React-Tasks/
├── src/
│ ├── components/
│ │ ├── ProductCard.jsx
│ │ ├── LikeButton.jsx
│ │ └── StudentList.jsx
│ ├── App.jsx
│ └── App.css


## How to Run

1. Clone this repository:

git clone https://github.com/khadija6415/-React-Tasks.git

2. Navigate into the project folder:

cd -React-Tasks

3. Install dependencies:

npm install

4. Start the dev server:

npm run dev


## Author

Khadija