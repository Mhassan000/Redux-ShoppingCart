import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state)=> state.cart); 

  const handleRemove = (productId)=>{
    dispatch(remove(productId));
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {
          products.map(product => (
            <div className='cartCard' key={product.id}>
              <img src={product.images} alt={product.title}/>
              <h3>{product.title}</h3>
              <h4>{`$${product.price}`}</h4>
              <button onClick={()=> handleRemove(product.id)} className='btn'>Remove</button>
            </div>
          ))
        }
        </div>
    </div>
  )
  }
export default Cart;