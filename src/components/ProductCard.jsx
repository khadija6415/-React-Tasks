function ProductCard({ title, price, category }) {
  return (
    <div className="product-card">
      <h3 className="product-title">{title}</h3>
      <p className="product-category">{category}</p>
      <p className="product-price">${price}</p>
    </div>
  );
}

export default ProductCard;