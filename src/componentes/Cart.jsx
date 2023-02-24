import React, { useState } from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="title-empty">El carrito esta vacio</h1>;

  const resultadoDolar = (cartTotal / 18.00).toFixed(2);
  return (
    <section className="container-cart">
      <h5 className="title-section">
        Carrito ({totalUniqueItems}) total Articulos: ({totalItems})
      </h5>
      <table className="table-cart">
        <tbody className="table-cartbody">
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <img src={item.image} />
                </td>
                <td className="title-options">{item.name}</td>
                <td className="price-options">{item.price}</td>
                <td className="quantity-options">Cantidad ({item.quantity})</td>
                <td className="btn-options">
                    <button className="btn-less" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                    <button className="btn-more" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                    <button className="btn-remove" onClick={() => removeItem(item.id)}>Eliminar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="total-price">
        <h2>Precio Total: $ {cartTotal}</h2>
      </div>
      <div className="total-price-dollar">
        <h2>Precio Dolar: $ {resultadoDolar}</h2>
      </div>
      <div className="btn-clean">
        <button onClick={() => emptyCart()}>
            Limpiar Carrito
        </button>
      </div>
    </section>
  );
};

export default Cart;
