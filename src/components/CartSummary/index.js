import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const pricesList = cartList.map(
        eachItem => eachItem.quantity * eachItem.price,
      )
      const totalPrice = pricesList.reduce((pre, nxt) => pre + nxt)
      const totalItems = cartList.length
      return (
        <div className="total-payments">
          <h1 className="total">
            Order Total: <span className="total-price">Rs {totalPrice}/-</span>
          </h1>
          <p className="items-count">{totalItems} items in cart</p>
          <button type="button" className="checkout-button">
            checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
