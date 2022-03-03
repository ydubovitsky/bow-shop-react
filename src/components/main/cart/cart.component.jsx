import { useDispatch, useSelector } from 'react-redux';
import {
  cartEntitiesSelector, decreaseProductCount,
  increaseProductCount,
  removeProduct
} from '../../../redux/features/cart/cart.slice';
import styles from './cart.module.css';
import CartTotal from '../../common/cart-total/cart-total.component';

const Cart = () => {

  const dispatch = useDispatch();
  const cartEntities = useSelector(cartEntitiesSelector);


  const showCartProduct = () => {
    return cartEntities?.map(({ product, count }) => {
      return (
        <div className={styles.cartProduct}>
          <img src={`data:image/png;base64,${product.imageByte}`} alt="There is nothing to show" />
          <div className={styles.name}>{product.name}</div>
          <div className={styles.price}>{product.price} р.</div>
          <div className={styles.count}>
            <i
              className="fas fa-plus"
              onClick={() => dispatch(increaseProductCount({ product, count }))}
            ></i>
            <p>{count}</p>
            <i
              className="fas fa-minus"
              onClick={() => dispatch(decreaseProductCount({ product, count }))}
            ></i>
          </div>
          <div className={styles.trash}>
            <i
              className="fas fa-trash"
              onClick={() => dispatch(removeProduct({ product, count }))}
            ></i>
          </div>
        </div>
      )
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Shopping Cart</div>
      <div className={styles.order}>
        <div className={styles.table}>
          <p>Photo</p>
          <p>Name</p>
          <p>Price</p>
          <p>Count</p>
          <p>Remove</p>
        </div>
        {showCartProduct()}
      </div>
      <CartTotal />
    </div>
  )
}

export default Cart;