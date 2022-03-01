import styles from './cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  cartEntitiesSelector,
  cartTotalPriceSelector
} from '../../../redux/features/cart/cart.slice';
import Button from '../../common/button/button.component';

const Cart = () => {

  const dispatch = useDispatch();
  const cartEntities = useSelector(cartEntitiesSelector);
  const cartTotalPrice = useSelector(cartTotalPriceSelector);

  const showCartProduct = () => {
    return cartEntities?.map(({ product, count }) => {
      return (
        <div className={styles.cartProduct}>
          <img src={`data:image/png;base64,${product.imageByte}`} alt="There is nothing to show" />
          <div className={styles.name}>{product.name}</div>
          <div className={styles.price}>{product.price} р.</div>
          <div className={styles.count}>
            <i class="fas fa-plus"></i>
            {count}
            <i class="fas fa-minus"></i>
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
        </div>
        {showCartProduct()}
      </div>
      <div className={styles.total}>
        <h1>Total</h1>
        <p>Total: {cartTotalPrice} р.</p>
        <Button name={"Checkout"} />
      </div>
    </div>
  )
}

export default Cart;