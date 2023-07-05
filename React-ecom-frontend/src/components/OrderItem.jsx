import React from 'react'
import FormatPrice from '../Helpers/FormatPrice'
import {BsDiamondFill} from 'react-icons/bs'
const OrderItem = ({id, name, image, color, price, amount }) => {
    console.log(name)
  return (
    <div className='rgrid'>
        <div className="list-grid-4">
            <p className="order-p">Name: {name}</p>
        </div>
        <div className="list-grid-4">
            <p className="order-p">Quantity: {amount}</p>
        </div>
        <div className="list-grid-4"> 
            <p className="order-p">Price: <FormatPrice price={price} /></p>
        </div>
        <div className="list-grid-4">
        <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div className="list-grid-4">
            <p >color: <BsDiamondFill className='iconColor' style={{  color: color }}/></p>
         
          </div>
          
    </div>
  )
}

export default OrderItem