import React from 'react';
import { useCart } from 'react-use-cart';

function ItemCard(props) {
    const {addItem } = useCart();
  return (
    <div className='container-carditem'>
        <div className='cardItem'>
            <img src={props.image} />
            <div className='body-item'>
                <h5>{props.title}</h5>
                <p>$ {props.price}</p>
                <button className='btn-agregar' onClick={() => addItem(props.item)}>Agregar a el carrito</button>
            </div>
        </div>
    </div>
  )
}

export default ItemCard