import { useNavigate } from 'react-router-dom';

import './CartSideBar.scss';

const CartSideBar = ({ totalPrice, cartData, userPoints }) => {
  let productId = [];
  let cartId = [];
  let quantity = [];
  {
    cartData.map(data => {
      return (
        (productId += data.productId),
        (cartId += data.cartId),
        (quantity += data.quantity)
      );
    });
  }
  const navigate = useNavigate();

  const handleClickBuy = () => {
    fetch('http://10.58.52.69:3000/carts', {
      method: 'post',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
      body: JSON.stringify({
        cartId: cartId,
        productId: productId,
        quantity: quantity,
      }),
    }).then(result => {
      if (result.status === 201) {
        navigate('/payment', { state: { cartData: cartData } });
      }
    });
    navigate('/payment', {
      state: { cartData: cartData, userPoints: userPoints },
    });
  };

  const ShippingPrice = parseInt(2500).toLocaleString();

  console.log(cartData);

  return (
    <div className="CartSideBar">
      <div className="order">
        <span className="order-history">주문 내역</span>
        <div className="shipping-price">
          <span>전체 배송비</span>
          <span>₩ {ShippingPrice}</span>
        </div>
        <div className="total-price">
          <span>총 주문금액</span>
          <span className="total-price-won">₩ {totalPrice}</span>
        </div>
      </div>
      <button className="payment-btn" onClick={handleClickBuy}>
        <span>결제하기</span>
        <div className="arrow-btn" type="button">
          <i className="fas fa-solid fa-arrow-right" />
        </div>
      </button>
    </div>
  );
};

export default CartSideBar;
