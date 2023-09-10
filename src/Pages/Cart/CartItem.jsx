
import React, { useContext } from 'react'
import { ShopContext } from '../../Context/shop-context';

export const CartItem = (props) => {
    const {id,prodname,price,img}=props.data;
    const {cartItems,addToCart,removeFromCart,updateCartItemCount}=useContext(ShopContext);
   
  return (
    <>
    <div className='cartItem'>
        <img  src={img}/>
        <div className='description'>
            <p><b>{prodname}</b></p>
            <p>{price}</p>
            <div className='countHandler'>
            <button onClick={()=>removeFromCart(id)}>-</button>
            <input value={cartItems[id]}  onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
            <button onClick={()=>addToCart(id)}>+</button>
        </div>
        
        </div>
        
        
    </div>
   
    
    </>
  )
}
