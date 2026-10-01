import './App.css';
import ProductCard from './components/ProductCard';
import LikeButton from './components/LikeButton';
import StudentList from './components/StudentList';

function App() {
  return (
    <div className="app-container">
      <h1>React Tasks</h1>

      <section>
        <h2>Task 1: Product Cards</h2>
        <div className="product-list">
          <ProductCard title="Wireless Headphones" price={49.99} category="Electronics" />
          <ProductCard title="Running Shoes" price={79.99} category="Footwear" />
        </div>
      </section>

      <section>
        <h2>Task 2: Like Button</h2>
        <LikeButton />
      </section>

      <section>
        <h2>Task 3: Student List</h2>
        <StudentList />
      </section>
    </div>
  );
}

export default App;