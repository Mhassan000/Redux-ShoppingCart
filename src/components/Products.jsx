import React from 'react';
// import {useState, useEffect} from 'react'
import { useEffect } from 'react';
import { add } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchProduct } from '../store/productSlice';
import {STATUSES} from '../store/productSlice';
const Products = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const {data:products,status} = useSelector((state)=> state.product)
   
  useEffect(() => {
    // const fetchProducts = async () => {
    //   const response = await fetch("https://api.escuelajs.co/api/v1/products");
    //   const data = await response.json();
    //   setProducts(data);

    // }
    dispatch(fetchProduct());
  }, [dispatch]);

  const onHandleAdd = (product) => {
    dispatch(add(product));
  };
  
  if (status === STATUSES.LOADING) {
    return <h1>Loading...</h1>
  }
  if (status === STATUSES.ERROR) {
    return <h1>Error...</h1>
  }

  return (
    <div className='productsWrapper'> 
    {products.map(product => (
      <div className='card' key={product.id}>
        <img src={product.images} alt={product.title}/>
        <h3>{product.title}</h3>
        {/* <p>{product.description}</p> */}
        <h4>{`$${product.price}`}</h4>
        <button onClick={()=> onHandleAdd(product)} className='btn'>Add to cart</button>
      </div>
    ))}
    {console.log(products)}
    </div>
  )
};

export default Products