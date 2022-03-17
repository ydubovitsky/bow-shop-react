import styles from './checkout.module.css';
import CartTotal from '../../common/cart-total/cart-total.component';
import { useState } from 'react';

const Checkout = () => {

  const [contactsData, setContactsData] = useState({});

  const contactsFormHandler = (event) => {
    const { name, value } = event.target;
    setContactsData({
      ...contactsData,
      [name]: value
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Checkout</div>
      <div className={styles.contactsForm}>
        <div className={styles.fioContainer}>
          <input type="text" name="firstName" placeholder='First Name' onChange={contactsFormHandler}/>
          <input type="text" name="lastName" placeholder='Last Name' onChange={contactsFormHandler}/>
        </div>
        <input type="text" name="email" placeholder='Email' onChange={contactsFormHandler}/>
        <input type="text" name="country" placeholder='Country' onChange={contactsFormHandler}/>
        <input type="text" name="town" placeholder='Town' onChange={contactsFormHandler}/>
        <input type="text" name="address" placeholder='Address' onChange={contactsFormHandler}/>
        <input type="text" name="zipCode" placeholder='ZIP Code' onChange={contactsFormHandler}/>
        <input type="text" name="phone" placeholder='Phone' onChange={contactsFormHandler}/>
        <textarea name="comment" placeholder='Leave a comment about your order' onChange={contactsFormHandler}/>
      </div>
      <div className={styles.cartTotal}>
        <CartTotal contactsData={contactsData}/>
      </div>
    </div>
  )
}

export default Checkout;