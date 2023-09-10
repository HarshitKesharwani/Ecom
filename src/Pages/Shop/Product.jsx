import React, { useContext } from 'react'
import { ShopContext } from '../../Context/shop-context';
const Product = (props) => {
    const {id,prodname,price,img}=props.data;
    const {addToCart,cartItems}=useContext(ShopContext);
    const cartItemsAmount=cartItems[id];
  return (
    <div className='product'>
        <img src={img}/>
        
    
        <div className='description'>
            <p><b>{prodname}</b></p>
            <p>Rs{price}</p>
        </div>
        <button className='addtocart' onClick={()=>addToCart(id)}>Add to Cart {cartItemsAmount>0 && <>({cartItemsAmount})</>}</button>
    </div>
  )
}

export default Product