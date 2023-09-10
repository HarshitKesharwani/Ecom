import React, { useContext } from 'react'
import { Products } from '../../Products'
import { CartItem } from './CartItem'
import { ShopContext } from '../../Context/shop-context'
import { useNavigate } from 'react-router-dom'
import './Cart.css';

export const Cart = () => {
    const {cartItems,getTotalAmount}=useContext(ShopContext);
    const total=getTotalAmount();
 const Navigate=useNavigate();
  return (
    <div>
        <div className='cart'>
         <h1>
            Your Cart Items
         </h1>
         
        </div>
        <div className='cart'>
        
        {Products.map((product)=>{
           if(cartItems[product.id]!==0)
           {
            return <CartItem data={product}/>
           }
        })}
{total>0?
(
<div  className='checkout'>
            <p>Subtotal : {total}</p>
            <button onClick={()=>Navigate('/')}>Continue Shopping</button>
            <button>Checkout</button>
        </div>):<h1>Your Cart is empty</h1>}
        </div>
        
    </div>
  )
}
