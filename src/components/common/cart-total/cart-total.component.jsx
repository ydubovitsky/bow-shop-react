import { useSelector } from 'react-redux';
import {
  cartProductEntitiesNumberSelector,
  cartProductTotalCountSelector, cartTotalPriceSelector
} from '../../../redux/features/cart/cart.slice';
import Button from '../../common/button/button.component';
import styles from './cart-total.module.css';
import { useDispatch } from 'react-redux';
import { makeOrder } from '../../../redux/features/checkout/checkout.slice';

const CartTotal = ({ contactsData }) => {

  const dispatch = useDispatch();
  const cartTotalPrice = useSelector(cartTotalPriceSelector);
  const cartProductEntitiesNumber = useSelector(cartProductEntitiesNumberSelector);
  const cartProductTotalCount = useSelector(cartProductTotalCountSelector);

  return (
    <div className={styles.container}>
      <h1>Total</h1>
      <p>Total cost: {cartTotalPrice} р.</p>
      <p>Product number: {cartProductEntitiesNumber}</p>
      <p>Total product count: {cartProductTotalCount}</p>
      <Button
        name={"Checkout"}
        //TODO Если данных для заказа нет, то не обрабатывать клик!
        handler={{ onClick: () => dispatch(makeOrder(contactsData)) }}
      />
    </div>
  )
}

export default CartTotal;