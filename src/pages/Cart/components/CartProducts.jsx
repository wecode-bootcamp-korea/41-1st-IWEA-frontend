import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import './CartProducts.scss';

const CartProducts = ({ data, changeCount, deleteCartData }) => {
  const { cartId, eachPrice, koreanName, englishName, quantity, thumbnail } =
    data;

  const handleCount = e => {
    fetch(`http://10.58.52.69:3000/carts?cart_id=${cartId}`, {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        cartId: cartId,
        quantity: parseInt(e.target.value),
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'LACK_OF_QUANTITY') {
          alert('재고가 부족합니다.');
        }
      });
    changeCount(e, data);
  };

  const handleDelete = () => {
    fetch(`http://10.58.52.69:3000/carts?cart_id=${cartId}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        cartId: cartId,
      }),
    }).then(response => {
      if (response.status === 204) {
        deleteCartData(data);
      }
    });
    deleteCartData(data);
  };

  const Price = eachPrice => {
    return parseInt(eachPrice).toLocaleString();
  };

  const productQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v, i) => i);

  console.log(data);
  return (
    <div className="CartProducts">
      <div className="product-inner">
        <Link className="product-img" to="/">
          <img alt="product-img" src={thumbnail} />
        </Link>
        <div className="product-info">
          <div className="product-header">
            <Link className="product-name" to="/">
              {koreanName}
              <br />
              {englishName}
            </Link>
            <span className="currentPrice">₩ {Price(eachPrice)}</span>
          </div>
          <div className="cart-selector">
            <div className="quantity-seloctor">
              <select defaultValue={quantity} onChange={handleCount}>
                {productQuantity.map((num, index) => {
                  return (
                    <option key={index} vlaue={`${num}`}>
                      {num}
                    </option>
                  );
                })}
              </select>
            </div>
            <button className="delete-btn" type="button" onClick={handleDelete}>
              삭제
            </button>
          </div>
        </div>
      </div>
      <span className="product-price">₩ {Price(eachPrice * quantity)}</span>
    </div>
  );
};

export default CartProducts;
