import { useEffect } from 'react';
import {
  useDispatch, useSelector
} from 'react-redux';
import {
  getAllOrders,
  orderEntitiesSelector,
  deleteOrderById
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
    console.log(orders);
    return orders.map(order => {
      return (
        <div key={order.id} className={styles.orderRow}>
          <div className="">Order id: {order.id}</div>
          {showOrderInfo(order.orderItems)}
          {showAddress(order.contacts)}
          <p>{order.orderStatus}</p>
          <i
            className="fas fa-trash"
            onClick={() => dispatch(deleteOrderById(order.id))}
          ></i>
        </div>
      )
    })
  }

  const showOrderInfo = (orderItems) => {
    return (
      <div className={styles.orderItems}>
        {orderItems.map(orderItem => showOrderItem(orderItem))}
      </div>
    )
  }

  const showOrderItem = ({ id, product, count }) => {
    return (
      <div key={id} className={styles.orderItem}>
        <div className="">{id}</div>
        <div className="">{count}</div>
        {showProduct(product)}
      </div>
    )
  }

  const showProduct = (product) => {
    return (
      <div key={product.id} className={styles.productItem}>
        <div className={styles.description}>
          <div className="">Product id: {product.id}</div>
          <div className="">Product name: {product.name}</div>
          <div className="">Product price: {product.price}</div>
        </div>
        <div className={styles.image}>
          <img src={`data:image/png;base64,${product.imageByte}`} alt="There is nothing to show" />
        </div>
      </div>
    )
  }

  const showAddress = (contact) => {
    return (
      <div className={styles.contactContainer}>
        <div className="">{contact.address}</div>
        <div className="">{contact.firstName}</div>
        <div className="">{contact.lastName}</div>
        <div className="">{contact.phone}</div>
        <div className="">{contact.email}</div>
        <div className="">{contact.country}</div>
        <div className="">{contact.town}</div>
        <div className="">{contact.zipCode}</div>
      </div>
    )
  }

  if (orderEntities.status !== 'succeeded') {
    return <Loader />
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Orders</div>
      <div className={styles.orderList}>
        <div className={styles.order}>
          <div className={styles.table}>
            <div className={styles.tableColumn}>
              <p>№</p>
            </div>
            <div className={styles.tableColumn}>
              <div className={styles.orderInfo}>
                <div className={styles.orderInfoHeader}>
                  <p>Order info</p>
                </div>
                <div className={styles.subTable}>
                  <p>Product Id</p>
                  <p>Count</p>
                  <p>Product</p>
                </div>
              </div>
            </div>
            <div className={styles.tableColumn}>
              <p>Address</p>
            </div>
            <div className={styles.tableColumn}>
              <p>Status</p>
            </div>
            <div className={styles.tableColumn}>
              <p>Remove</p>
            </div>
          </div>
          <div className={styles.tableContent}>
            {showOrderRow(orderEntities.orders)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order;