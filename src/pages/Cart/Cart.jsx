import React, { useState, useEffect } from 'react';
import CartProducts from './components/CartProducts';
import './Cart.scss';
import CartSideBar from './components/CartSideBar';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [userPoints, setUserPoints] = useState([]);

  useEffect(() => {
    return window.localStorage.setItem(
      'TOKEN',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY3Mjk4Mjk5OX0.e5U_dS5bGyY-w7Kqay_3wdqCVa8pmgXNAhwdSAKh6W8'
    );
  }, []);

  useEffect(() => {
    fetch('/data/cartList.json', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'USER_NOT_EXISTS') {
          setCartData([]);
          return;
        }
        setCartData(result.data.cartList);
        setUserPoints(result.data.userPoints);
      });
  }, []);

  /* useEffect(() => {
    fetch('http://127.0.0.1:3000/carts', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'USER_NOT_EXISTS') {
          setCartData([]);
          return;
        }
        setCartData(result.result);
      });
  }, []);
*/

  const DeleteCartId = cartData.map(ele => {
    return ele.cartId;
  });

  const handleDelete = () => {
    fetch(
      `http://10.58.52.69:3000/carts?cart_id=${DeleteCartId.join('&cartId=')}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: localStorage.getItem('TOKEN'),
        },
        body: JSON.stringify({
          cartId: DeleteCartId,
        }),
      }
    ).then(response => {
      if (response.status === 204) {
        setCartData([]);
      }
    });
    setCartData([]);
  };

  const changeCount = (e, data) => {
    if (e.target.value !== '0') {
      setCartData(
        cartData.map(cart => {
          if (cart.cartId === data.cartId) {
            data.quantity = e.target.value;
            return data;
          } else {
            return cart;
          }
        })
      );
    } else {
      deleteCartData(data);
    }
  };

  const deleteCartData = data => {
    const changeCartData = [];
    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i].cartId !== data.cartId) {
        changeCartData.push(cartData[i]);
      }
    }
    setCartData(changeCartData);
  };

  let totalPrice = 0;
  if (cartData.length > 0) {
    for (let i = 0; i < cartData.length; i++) {
      totalPrice += parseInt(cartData[i].eachPrice * cartData[i].quantity);
    }
  }
  return (
    <div className="Cart">
      <div className="cart-wrapper payment">
        <div className="cart-inner">
          <div className="cart-header">
            <div className="cart-title">
              {cartData.length > 0 ? '장바구니' : '장바구니가 비었습니다'}
            </div>
            <img
              src="images/trash.png"
              className="cart-trash"
              type="button"
              onClick={handleDelete}
            />
          </div>
          {cartData.length > 0 && (
            <div className="product-list">
              {cartData.map(data => {
                return (
                  <CartProducts
                    key={data.cartId}
                    data={data}
                    changeCount={changeCount}
                    deleteCartData={deleteCartData}
                  />
                );
              })}
            </div>
          )}
        </div>
        {cartData.length > 0 && (
          <CartSideBar
            totalPrice={totalPrice.toLocaleString()}
            cartData={cartData}
            userPoints={userPoints}
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
