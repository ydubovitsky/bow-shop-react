import { useDispatch } from 'react-redux';
import styles from './cart-icon.module.css';
import { addProductToCart } from '../../../redux/features/cart/cart.slice';

const CartIcon = ({ product, count }) => {

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <i
        class="fas fa-cart-arrow-down"
        onClick={() => dispatch(addProductToCart({product, count}))}
      >
      </i>
    </div>
  )
}

export default CartIcon;