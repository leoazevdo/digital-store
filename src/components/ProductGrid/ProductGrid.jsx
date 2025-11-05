import { Product } from '../ProductCard/ProductCard';
import './ProductGrid.css'
export const ProductGrid = ({ products, columns, className }) => {
  const gridStyle = {
    gridTemplateColumns: `repeat(${columns || 4}, 1fr)` || 'repeat(4, 1fr)',
  };
  return (
    <div className={`grid-container ${className}`} style={gridStyle}>
      {products.map((product) => (
        <Product key={product.id} props={product} />
      ))}
    </div>
  );
};