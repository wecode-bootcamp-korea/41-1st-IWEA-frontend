import React, { useState, useEffect } from 'react';
import CartProducts from './components/CartProducts';
import './Cart.scss';
import CartSideBar from './components/CartSideBar';
import PaymentModal from './components/PaymentModal';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [isOpenPaymentModal, setIsOpenPaymentModal] = useState(false);

  const openPaymentModal = () => {
    setIsOpenPaymentModal(true);
  };
  const closePaymentModal = () => {
    setIsOpenPaymentModal(false);
  };

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
      });
  }, []);

  const deleteCartId = cartData.map(ele => {
    return ele.cartId;
  });

  const handleDeleteAll = () => {
    fetch(
      `http://10.58.52.184:3000/carts?cartId=${deleteCartId.join('&cartId=')}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: localStorage.getItem('TOKEN'),
        },
      }
    ).then(response => {
      if (response.status === 200) {
        setCartData([]);
      }
    });
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

  const totalPrice = cartData.reduce(
    (prev, current) => prev + current.eachPrice * current.quantity,
    0
  );

  return (
    <div className="Cart">
      {isOpenPaymentModal &&
        cartData.map(data => {
          return (
            <PaymentModal
              closePaymentModal={closePaymentModal}
              data={data}
              totalPrice={totalPrice}
            />
          );
        })}
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
              onClick={handleDeleteAll}
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
            openPaymentModal={openPaymentModal}
          />
        )}
      </div>
    </div>
  );
};

export default Cart;
