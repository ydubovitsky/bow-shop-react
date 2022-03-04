import { useEffect } from 'react';
import {
  useDispatch, useSelector
} from 'react-redux';
import {
  getAllOrders, orderEntitiesSelector
} from '../../../redux/features/checkout/checkout.slice';
import styles from './order.module.css';
import Loader from '../loader/loader.component';

const Order = () => {
  const dispatch = useDispatch();
  const orderEntities = useSelector(orderEntitiesSelector);

  useEffect(() => {
    if (orderEntities.status === 'idle') {
      dispatch(getAllOrders())
    }
  }, [])

  const showOrderRow = (orders) => {
    return orders.map(order => {
      return (
        <div className={styles.orderRow}>
          {order.orderItems.map(item => showOrderItemInfo(item))}
          {showContactInfo(order.contacts)}
          <p>{order.orderStatus}</p>
          <i
            className="fas fa-trash"
          // onClick={() => dispatch(removeProduct({ product, count }))}
          ></i>
        </div>
      )
    })
  }

  const showOrderItemInfo = (orderItem) => {
    return (
      <div className={styles.orderItem}>
        <div className="">Order id: {orderItem.id}</div>
        <div className="">Count: {orderItem.count}</div>
        {showProductItemInfo(orderItem.product)}
      </div>
    )
  }

  const showContactInfo = (contact) => {
    return (
      <div className={styles.contactContainer}>
        <div className="">{contact.address}</div>
        <div className="">{contact.firstName}</div>
        <div className="">{contact.lastName}</div>
        <div className="">{contact.phone}</div>
        <div className="">{contact.country}</div>
        <div className="">{contact.town}</div>
        <div className="">{contact.zipCode}</div>
      </div>
    )
  }

  const showProductItemInfo = (productItem) => {
    return (
      <div className={styles.productItem}>
        <div className={styles.description}>
          <div className="">Product id: {productItem.id}</div>
          <div className="">Product name: {productItem.name}</div>
          <div className="">Product price: {productItem.price}</div>
        </div>
        <div className={styles.image}>
          <img src={`data:image/png;base64,${productItem.imageByte}`} alt="There is nothing to show" />
        </div>
      </div>
    )
  }

  if (orderEntities.status !== 'succeeded') {
    return <Loader />
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Order List</div>
      <div className={styles.order}>
        <div className={styles.table}>
          <p>Order info</p>
          <p>Address</p>
          <p>Status</p>
          <p>Remove</p>
        </div>
        <div className={styles.tableContent}>
          {showOrderRow(orderEntities.orders)}
        </div>
      </div>
    </div>
  )
}

export default Order;