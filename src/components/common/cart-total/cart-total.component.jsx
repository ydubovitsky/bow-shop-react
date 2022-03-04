import { useSelector } from 'react-redux';
import {
  cartProductEntitiesNumberSelector,
  cartProductTotalCountSelector, cartTotalPriceSelector
} from '../../../redux/features/cart/cart.slice';
import Button from '../../common/button/button.component';
import styles from './cart-total.module.css';
import { useDispatch } from 'react-redux';
import { makeOrder } from '../../../redux/features/checkout/checkout.slice';
import { useNavigate } from "react-router-dom";

const CartTotal = ({ contactsData }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartTotalPrice = useSelector(cartTotalPriceSelector);
  const cartProductEntitiesNumber = useSelector(cartProductEntitiesNumberSelector);
  const cartProductTotalCount = useSelector(cartProductTotalCountSelector);

  const makeOrderHandler = (contactsData) => {
    if (validateContactsData(contactsData)) {
      dispatch(makeOrder(contactsData));
    } else {
      navigate("/checkout");
    }
  }

  const validateContactsData = (contactsData) => {
    if (!contactsData?.email && !contactsData?.phone) return false;
    return true;
  }

  return (
    <div className={styles.container}>
      <h1>Total</h1>
      <p>Total cost: {cartTotalPrice} р.</p>
      <p>Product number: {cartProductEntitiesNumber}</p>
      <p>Total product count: {cartProductTotalCount}</p>
      <Button
        name={"Checkout"}
        handler={{ onClick: () => makeOrderHandler(contactsData) }}
      />
    </div>
  )
}

export default CartTotal;