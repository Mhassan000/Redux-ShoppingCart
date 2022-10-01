import React from 'react'
import { Link , Outlet} from 'react-router-dom'
import { useSelector } from 'react-redux';
// import { Fragment } from 'react'
const Navbar = () => {
  const item = useSelector((state)=> state.cart.length)
  return (
    <div>
      <nav className='navbar' style={
        {
          display: 'flex',
          justifyContent: 'space-between',
          // alignItems: 'center',
        }
      }>
        <span className='logo'>Redux Store</span>
        <div style={
          {    
            marginLeft: 'auto',
               }
        }>
            <Link className='navLink'  to='/'>Home</Link>
            <Link className='navLink' to='/cart'>Cart</Link>
        </div>
        <span className='cartCount'> Cart Items: {item}</span>
      </nav>
        <Outlet />
    </div>
    
  )
}

export default Navbar;