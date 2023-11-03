import React, { useContext } from 'react'
import { ShopContext } from '../shopContext/shopContext'
import CartItems from './CartItem'

const Cart = () => {
  const {products,cartItem}=useContext(ShopContext)
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="CartItems">
       {
        products.map((data)=>{
          if(cartItem[data.id]!==0){
            return <CartItems data={data}/>
          }
        })
       }
      </div>
    </div>
  )
}

export default Cart
