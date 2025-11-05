import { ProductGrid } from '../ProductGrid/ProductGrid'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import arrow from '../../assets/long-arrow-right.svg'
import '@globalStyles/ColorsVariables.css'
import './ProductListing.css'

export function ProductListing({displayValue}) {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      let url = `http://localhost:3000/products?limit=${displayValue}`;
      const response = await axios.get(url);
      const productsData = response.data.data;
      setProducts(productsData);
    } catch (error) {
      console.error("Erro ao buscar produtos", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const navigate = useNavigate();
  const handleViewAllClick = () => {
    navigate('/produtos');
  };
  return(
    <>
      <div className="products-container">
        <div className="layout">
          <div className="products-cont-header">
            <h4>Produtos em destaque</h4>
            <button onClick={handleViewAllClick}>Ver todos <img src={arrow} className="right-arrow"/></button>
          </div>
          <ProductGrid columns={4} products={products}/>
        </div>
      </div>
    </>
  )
}