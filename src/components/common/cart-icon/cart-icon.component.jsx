import { useDispatch } from 'react-redux';
import styles from './cart-icon.module.css';
import { addProductToCart } from '../../../redux/features/cart/cart.slice';

const CartIcon = ({ product, count }) => {

  const dispatch = useDispatch();

  //Проверка, есть ли продукт в наличии!
  const addProductHandler = () => {
    if (!(product.count === 0 || product.count === null || product.count === undefined)) {
      dispatch(addProductToCart({ product, count }))
    }
  }

  return (
    <div className={styles.container}>
      <i
        className="fas fa-cart-arrow-down"
        onClick={addProductHandler}
      >
      </i>
    </div>
  )
}

export default CartIcon;